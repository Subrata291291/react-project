import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import $ from 'jquery';
import products from '../assets/products';
import CommonBanner from '../components/CommonBanner';
import { CartContext } from '../components/AddToCart';
import { toast } from 'react-toastify';

const SingleProduct = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const { addToCart, removeFromCart, cartItems } = useContext(CartContext);
  const cartItem = cartItems.find(item => item.id === product?.id);
  const [quantity, setQuantity] = useState(cartItem ? cartItem.qty : 1);

  useEffect(() => {
    const productSlider = $('.product-slider');
    const centerSlider = $('.center');

    if (productSlider.length > 0 && centerSlider.length > 0) {
      productSlider.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.center',
      });

      centerSlider.slick({
        slidesToShow: 4,
        arrows: true,
        autoplay: true,
        slidesToScroll: 1,
        asNavFor: '.product-slider',
        dots: false,
        focusOnSelect: true,
      });

      return () => {
        productSlider.slick('unslick');
        centerSlider.slick('unslick');
      };
    }
  }, []);

  const handleAddToCart = () => {
    const qty = parseInt(quantity);
    if (!qty || qty < 1) {
      toast.error('Please enter a valid quantity!');
      return;
    }

    addToCart(product, qty);
    toast.success(`${product.title} (x${qty}) added to cart!`);
  };

  const handleQuantityChange = (type) => {
    if (!product) return;
    let newQty = type === 'increase' ? quantity + 1 : quantity - 1;
    if (newQty < 1) return;
    setQuantity(newQty);
  };

  const handleRemove = () => {
    removeFromCart(product.id);
    toast.info(`${product.title} removed from cart.`);
    setQuantity(1);
  };

  if (!product) {
    return (
      <div className="container text-center my-5">
        <h4>Product not found</h4>
      </div>
    );
  }

  return (
    <>
      <CommonBanner />
      <div className="single-products-area p-70">
        <div className="container">
          <div className="row gx-lg-5">
            {/* Slider */}
            <div className="col-md-5">
              <div className="single-products-left">
                <div className="product-slider regular slick-slider">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className='main-product-pic'>
                      <img src={product.img} alt={product.title} />
                    </div>
                  ))}
                </div>
                <div className="center slick-slider">
                  {[...Array(4)].map((_, i) => (
                    <div key={i}>
                      <div className="product-gallery-pic">
                      <img src={product.img} className="w-100" alt={product.title} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Product Details */}
            <div className="col-md-7">
              <div className="single-products-right">
                <h3 className='mb-3'>{product.title}</h3>
                <div className="price-box">
                  <ul className="">
                    <li className="star-pic mt-2 d-flex align-items-center">
                      {Array.from({ length: 5 }, (_, i) => {
                        const roundedRating = Math.round(product.rating * 2) / 2;
                        if (i + 1 <= roundedRating) {
                          return <i key={i} className="fa-solid fa-star text-warning me-1"></i>;
                        } else if (i + 0.5 === roundedRating) {
                          return <i key={i} className="fa-solid fa-star-half-stroke text-warning me-1"></i>;
                        } else {
                          return <i key={i} className="fa-regular fa-star text-warning me-1"></i>;
                        }
                      })}
                      <span className="ms-2 text-dark">({product.rating.toFixed(1)})</span>
                    </li>
                    <li><h5>${product.price.toFixed(2)}</h5></li>
                  </ul>
                  <p>{product.description}</p>
                </div>

                {/* Quantity Selector & Add to Cart */}
                <div className="product-selection-box">
                  <div className="quantity-wrapper">
                    <div className="quantity-selector">
                      <button className="qty-btn minus" onClick={() => handleQuantityChange('decrease')}>−</button>
                      <span className="qty-value mx-2">{quantity}</span>
                      <button className="qty-btn plus" onClick={() => handleQuantityChange('increase')}>+</button>
                    </div>
                    <div className="add-cart-btn">
                      <button onClick={handleAddToCart} className="btn btn-dark me-3">
                        Add to Cart
                      </button>
                      {cartItem && (
                        <button
                          onClick={handleRemove}
                          className="remove-item text-danger btn btn-link"
                        >
                          Remove item
                        </button>
                      )}
                    </div>
                  </div>

                  <div className="product-categories">
                    <b>Category:</b>{' '}
                    <span>{product.category}</span>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
