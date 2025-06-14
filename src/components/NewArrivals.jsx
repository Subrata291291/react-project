import React, { useContext } from 'react';
import Slider from 'react-slick';
import { CartContext } from '../components/AddToCart';
import { toast } from 'react-toastify';
import productsData from '../assets/products'; // Import your product data

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
        slidesToShow: 2,
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
            <div key={product.id} className="slider container">
              <div className="product_box">
                <div className="pro-pic position-relative">
                  <img src={product.img} alt={product.title} className="product-pic" />
                  <ul className="d-flex justify-content-center align-items-center">
                    <li>
                      <button className="bg-transparent border-0">
                        <i className="fa fa-heart-o" />
                      </button>
                    </li>
                    <li>
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
                  </ul>
                </div>
                <div className="pro-details">
                  <h4 className="product-title text-truncate">{product.title}</h4>
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
