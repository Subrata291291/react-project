import React, { useContext } from 'react';
import Slider from 'react-slick';
import { CartContext } from '../components/AddToCart';
import { toast } from 'react-toastify';
import products from '../assets/products'; // <-- import your full product list

const SpecialOffers = () => {
  const { addToCart } = useContext(CartContext);

  // Get first 6 products to display as special offers (or any logic you prefer)
  const specialOffers = products.slice(0, 12); // first 12 items
  const leftOffers = specialOffers.slice(0, 4); // 4 for left static list
  const rightOffers = specialOffers.slice(4);  // 8 for slider

  const sliderSettings = {
    dots: false,
    infinite: true,
    arrows: false,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const handleAddToCart = (item) => {
    addToCart(item);
    toast.success(`${item.title} added to cart`, {
      position: 'top-right',
      autoClose: 2000,
      pauseOnHover: true,
    });
  };

  return (
    <section className="offer_area">
      <div className="container">
        <h3 className="title1 text-center">Special Offers</h3>
        <div className="row">
          {/* LEFT STATIC OFFERS */}
          <div className="col-lg-4 col-md-5 col-12">
            <div className="offer_left" data-aos="fade-right">
              <h4>Top Picks</h4>
              {leftOffers.map((item) => (
                <div className="offer_box" key={item.id}>
                  <ul className="d-flex align-items-center">
                    <li className="off-pro">
                      <img src={item.img} alt={item.title} />
                    </li>
                    <li className="off_content text-truncate">
                      <a href="#" className="text-truncate">{item.title}</a>
                      <p className="pro-price">${item.price.toFixed(2)}</p>
                      <div className="rating-box">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star-o"></i>
                      </div>
                    </li>
                  </ul>
                  <ul className="cart-details position-absolute">
                    <li><a href="#"><i className="fa fa-heart-o"></i></a></li>
                    <li>
                      <button className="add-cart btn p-0 border-0 bg-transparent"
                        onClick={() => handleAddToCart(item)}>
                        <i className="fa-solid fa-bag-shopping"></i>
                      </button>
                    </li>
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SLIDER OFFERS */}
          <div className="col-lg-8 col-md-7 col-12">
            <div className="offer_right" data-aos="fade-left">
              <div className="offer_slider p-0 container">
                <Slider {...sliderSettings}>
                  {rightOffers.map((item) => (
                    <div key={item.id} className="slider position-relative">
                      <div className="container">
                        <div className="product_box">
                          <div className="pro-pic position-relative">
                            <img src={item.img} alt={item.title} className="product-pic" />
                            <ul className="d-flex justify-content-center align-items-center">
                              <li>
                                <button className="add-cart btn p-0 border-0 bg-transparent"
                                  onClick={() => handleAddToCart(item)}>
                                  <i className="fa-solid fa-bag-shopping"></i>
                                </button>
                              </li>
                            </ul>
                          </div>
                          <div className="pro-details">
                            <h4 className="product-title text-truncate">{item.title}</h4>
                            <p className="pro-descrip text-truncate">
                              {item.description}
                            </p>
                            <p className="pro-price">${item.price.toFixed(2)}</p>
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
