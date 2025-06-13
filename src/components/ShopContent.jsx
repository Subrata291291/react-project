import React, { useEffect, useState, useContext } from 'react';
import { CartContext } from '../components/AddToCart';
import { toast } from 'react-toastify';

const ShopContent = () => {
  const { addToCart } = useContext(CartContext); 

  const [allProducts, setAllProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortOption, setSortOption] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  useEffect(() => {
    fetch('/products.json')
      .then((res) => res.json())
      .then((data) => {
        setAllProducts(data);
        setProducts(data);
      })
      .catch((error) => console.error('Error loading product data:', error));
  }, []);

  const categories = ['All', ...new Set(allProducts.map(p => p.category))];

  const sortProducts = (items, option) => {
    if (option === 'low-to-high') {
      return [...items].sort((a, b) => a.price - b.price);
    } else if (option === 'high-to-low') {
      return [...items].sort((a, b) => b.price - a.price);
    }
    return items;
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
    let filtered = category === 'All'
      ? [...allProducts]
      : allProducts.filter(product => product.category === category);
    setProducts(sortProducts(filtered, sortOption));
  };

  const handleSortChange = (e) => {
    const selected = e.target.value;
    setSortOption(selected);
    const sorted = sortProducts([...products], selected);
    setProducts(sorted);
  };

  // Pagination
  const totalPages = Math.ceil(products.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const currentProducts = products.slice(startIndex, startIndex + productsPerPage);

  const renderPagination = () => (
    <nav className="mt-4">
      <ul className="pagination justify-content-center">
        <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
          <button className="page-link" onClick={() => setCurrentPage(currentPage - 1)}>Prev</button>
        </li>
        {[...Array(totalPages)].map((_, idx) => (
          <li key={idx + 1} className={`page-item ${currentPage === idx + 1 ? 'active' : ''}`}>
            <button className="page-link" onClick={() => setCurrentPage(idx + 1)}>
              {idx + 1}
            </button>
          </li>
        ))}
        <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
          <button className="page-link" onClick={() => setCurrentPage(currentPage + 1)}>Next</button>
        </li>
      </ul>
    </nav>
  );

  return (
    <div>
      <section className="products-area pt-90" data-aos="fade-up">
        <div className="container">
          <div className="row gx-md-5">
            {/* Sidebar */}
            <div className="col-12 col-md-4">
              <div className="products-left">
                <h3>Product Categories</h3>
                <ul className="list-unstyled">
                  {categories.map(category => (
                    <li key={category}>
                      <button
                        onClick={() => handleCategoryClick(category)}
                        className={`btn btn-link text-start ${selectedCategory === category ? 'fw-bold' : ''}`}
                      >
                        {category}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Products */}
            <div className="col-12 col-md-8">
              <div className="products-right">
                <ul className="d-flex justify-content-between align-items-center">
                  <li>
                    <h3>{selectedCategory}</h3>
                    <p className="mt-4 mb-4">Showing {currentProducts.length} of {products.length} Products</p>
                  </li>
                  <li>
                    <select
                      className="product-sorting form-select"
                      value={sortOption}
                      onChange={handleSortChange}
                    >
                      <option value="">Default Sorting</option>
                      <option value="low-to-high">Price: Low to High</option>
                      <option value="high-to-low">Price: High to Low</option>
                    </select>
                  </li>
                </ul>

                <div className="row" id="custom-products">
                  {currentProducts.map((product) => (
                    <div className="col-6 col-md-4 col-lg-3" key={product.id}>
                      <div className="product-box text-center position-relative">
                        <div className="product-pic">
                          <img src={product.img} alt={product.title} className="product-image" />
                        </div>
                        <div className="product-content">
                          <div className="product-title text-truncate">{product.title}</div>
                          <div className="product-price">${product.price.toFixed(2)}</div>
                        </div>
                        <div className="cart-details position-absolute">
                          <ul>
                            {/* {<li><a href="#"><i className="fa-regular fa-heart"></i></a></li>} */}
                            <li>
                              {/* {<button className="add-cart btn p-0 border-0 bg-transparent" onClick={() => addToCart(product)}>
                                <i className="fa-solid fa-bag-shopping"></i>
                              </button>} */}
                              <button className="add-cart btn p-0 border-0 bg-transparent"
                                onClick={() => {
                                  addToCart(product);
                                  toast.success(`${product.title} added to cart`, {
                                  });
                                }}>
                                  <i className="fa-solid fa-bag-shopping"></i>
                                </button>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                {renderPagination()}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShopContent;
