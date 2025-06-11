import React from 'react';
import Slider from 'react-slick';

import pro1 from '../assets/images/pro-1.png';
import pro2 from '../assets/images/pro-2.png';
import pro3 from '../assets/images/pro-3.png';
import pro4 from '../assets/images/pro-4.png';
import pro5 from '../assets/images/pro-5.png';
import pro6 from '../assets/images/pro-6.png';

const leftOffers = [
  { id: 1, title: 'Noise Isolated', image: pro1, price: '900.00' },
  { id: 2, title: 'Lightweight Headphones', image: pro5, price: '500.00' },
  { id: 3, title: 'Kids Headphones', image: pro3, price: '560.00' },
  { id: 4, title: 'Commando Headset', image: pro4, price: '670.00' },
];

const rightOffers = [
  { id: 1, title: 'Noise Isolated', image: pro1, price: '670.00' },
  { id: 2, title: 'Lightweight Headphones', image: pro2, price: '500.00'},
  { id: 3, title: 'Leather Headset', image: pro3, price: '499.00' },
  { id: 4, title: 'Kids Headphones', image: pro4, price: '799.00' },
  { id: 5, title: 'Noise Isolated', image: pro5, price: '1299.00' },
  { id: 6, title: 'Noise Isolated', image: pro6, price: '999.00' },
];

const SpecialOffers = () => {
  const sliderSettings = {
    dots: false,
    infinite: true,
    arrows: false,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="offer_area">
      <div className="container">
        <h3 className="title1 text-center">Special Offers</h3>
        <div className="row">
          {/* LEFT SECTION */}
          <div className="col-lg-4 col-md-5 col-12">
            <div className="offer_left" data-aos="fade-right">
              <h4>Boat Headphones</h4>
              {leftOffers.map((item) => (
                <div className="offer_box" key={item.id}>
                  <ul className="d-flex align-items-center">
                    <li className="off-pro">
                      <img src={item.image} alt={item.title} />
                    </li>
                    <li className="off_content text-truncate">
                      <a href="#" className="text-truncate">{item.title}</a>
                      <p className="pro-price">{item.price}</p>
                      <div className="rating-box">
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star-o" aria-hidden="true"></i>
                      </div>
                    </li>
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SECTION - SLIDER */}
          <div className="col-lg-8 col-md-7 col-12">
            <div className="offer_right" data-aos="fade-left">
              <div className="offer_slider p-0 container">
                <Slider {...sliderSettings}>
                  {rightOffers.map((item) => (
                    <div key={item.id} className="slider position-relative">
                      <div className="container">
                        <div className="product_box">
                          <div className="pro-pic position-relative">
                            <img src={item.image} alt={item.title} className="product-pic" />
                            <ul className="d-flex justify-content-center align-items-center">
                              <li><a href="#"><i className="fa fa-heart-o" aria-hidden="true"></i></a></li>
                              <li><a href="#"><i className="fa fa-shopping-basket" /></a></li>
                            </ul>
                          </div>
                          <div className="pro-details">
                            <h4 className="product-title text-truncate">{item.title}</h4>
                            <p className="pro-descrip text-truncate">
                              Diam donec adipiscing tristique risus. Praesent tristique magna sit amet purus gravida quis blandit. In dictum non consectetur a erat nam at lectus.
                            </p>
                            <p className="pro-price">{item.price}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
