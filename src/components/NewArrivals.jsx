import React, { useContext } from 'react';
import Slider from 'react-slick';
import { CartContext } from '../components/AddToCart';
import { toast } from 'react-toastify';
import productsData from '../assets/products'; // Adjust path if needed
import { Link } from 'react-router-dom';

const settings = {
  dots: false,
  infinite: true,
  arrows: false,
  autoplay: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

const NewArrivals = () => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="product_area" data-aos="fade-up">
      <div className="container">
        <h4 className="title text-center">New Arrivals</h4>
      </div>

      <div className="product_slider container">
        <Slider {...settings}>
          {productsData.map(product => (
            <div key={product.id} className="px-2">
              <div className="product_box">
                <div className="pro-pic position-relative">
                  <img
                    src={product.img}
                    alt={product.title}
                    className="product-pic w-100"
                    style={{ height: '250px', objectFit: 'cover' }}
                  />
                  <ul className="d-flex justify-content-center align-items-center position-absolute">
                    <li className="mx-2">
                      <button className="bg-transparent border-0">
                        <i className="fa fa-heart-o" />
                      </button>
                    </li>
                    <li className="mx-2">
                      <button
                        className="add-cart btn p-0 border-0 bg-transparent"
                        onClick={() => {
                          addToCart(product);
                          toast.success(`${product.title} added to cart`);
                        }}
                      >
                        <i className="fa-solid fa-bag-shopping"></i>
                      </button>
                    </li>
                    <li className="mx-2">
                      <Link to={`/product/${product.id}`}>
                        <i className="fa fa-eye"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="pro-details text-center mt-2">
                  <h4 className="product-title text-truncate">
                  <Link to={`/product/${product.id}`} className="text-dark">
                    {product.title}
                  </Link>
                  </h4>
                  <p className="pro-descrip text-truncate">{product.description}</p>
                  <p className="pro-price">${product.price.toFixed(2)}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default NewArrivals;
