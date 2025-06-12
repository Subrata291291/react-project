import React, { useContext } from 'react';
import Slider from 'react-slick';
import { CartContext } from '../components/AddToCart';

import pro1 from '../assets/images/pro-1.png';
import pro2 from '../assets/images/pro-2.png';
import pro3 from '../assets/images/pro-3.png';
import pro4 from '../assets/images/pro-4.png';
import pro5 from '../assets/images/pro-5.png';
import pro6 from '../assets/images/pro-6.png';

const products = [
  {
    id: 1,
    title: 'Noise Isolated',
    description: 'Diam donec adipiscing tristique risus. Praesent tristique magna sit amet purus gravida.',
    price: 899.00,
    image: pro1
  },
  {
    id: 2,
    title: 'Lightweight Headphones',
    description: 'Praesent tristique magna sit amet purus gravida quis blandit.',
    price: 900.00,
    image: pro2
  },
  {
    id: 3,
    title: 'Leather Headset',
    description: 'In dictum non consectetur a erat nam at lectus.',
    price: 599.00,
    image: pro3
  },
  {
    id: 4,
    title: 'Kids Headphones',
    description: 'Safe for young listeners with volume control.',
    price: 799.00,
    image: pro4
  },
  {
    id: 5,
    title: 'Studio Headphones',
    description: 'Great for music production with noise isolation.',
    price: 1299.00,
    image: pro5
  },
  {
    id: 6,
    title: 'Bass Boost Headset',
    description: 'Experience deeper bass and clearer sound.',
    price: 1399.00,
    image: pro6
  }
];

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
          {products.map(product => (
            <div key={product.id} className="slider container">
              <div className="product_box">
                <div className="pro-pic position-relative">
                  <img src={product.image} alt={product.title} className="product-pic" />
                  <ul className="d-flex justify-content-center align-items-center">
                    <li><button className="bg-transparent border-0"><i className="fa fa-heart-o" /></button></li>
                    <li>
                      <button
                        onClick={() => addToCart(product)}
                        className="bg-transparent border-0 add-cart btn"
                        title="Add to Cart"
                      >
                        <i className="fa fa-shopping-basket" />
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
