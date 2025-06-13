import React from 'react'
import Slider from 'react-slick';
import boxPic from '../assets/images/pro-1.png';
import FeaturingArea from '../components/FeaturingArea';
import NewArrivals from '../components/NewArrivals';
import BeatSection from '../components/BeatSection';
import SpecialOffers from '../components/SpecialOffers';
import { useNavigate } from 'react-router-dom';


export default function Home() {
  const navigate = useNavigate();

  const handleOrderNow = () => {
    navigate('/shop');
  };

  const bannerSliderSettings = {
    dots: true,
    infinite: true,
    arrows: false,
    autoplay: true,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1399,
        settings: {
          dots: false,
        }
      },
      {
        breakpoint: 991,
        settings: {
          dots: true
        }
      },
      {
        breakpoint: 767,
        settings: {
          dots: true
        }
      }
    ]
  };

  return (
    <div>
      <div className="banner_area position-relative">
      <Slider {...bannerSliderSettings} className="banner_slider">
        <div className="slider position-relative slider-1">
          <div className="container">
            <div className="banner_box" data-aos="fade-right">
              <h3>feel the music in your bones</h3>
              <h4>Music loud <br />Fulfill your music needs</h4>
              <button className="button btn order-btn" onClick={handleOrderNow}>Order Now</button>
            </div>
          </div>
        </div>

        <div className="slider position-relative slider-2">
          <div className="container">
            <div className="banner_box" data-aos="fade-right">
              <h3>Exhale worries with headphones</h3>
              <h4>Deserve best <br />Interpret your music differently</h4>
              <button className="button btn order-btn" onClick={handleOrderNow}>Order Now</button>
            </div>
          </div>
        </div>

        <div className="slider position-relative slider-3">
          <div className="container">
            <div className="banner_box" data-aos="fade-left">
              <h3>stylish wireless on ear-headphones</h3>
              <h4>Fine quality <br />Wireless headphones to stay inspired</h4>
              <button className="button btn order-btn" onClick={handleOrderNow}>Order Now</button>
            </div>
          </div>
        </div>
      </Slider>
      </div>

      <div className="box_area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-6 col-lg-6 col-md-6 col-12">
              <div className="box_left" data-aos="fade-right">
                <img src={boxPic} alt="headset" />
              </div>
            </div>
            <div className="col-6 col-lg-6 col-md-6 col-12">
              <div className="box_right" data-aos="fade-left">
                <h3 className="title">What’s in the Box</h3>
                <p className="description">Marques ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra.</p>
                <ul>
                  <li>
                    <p>
                      <span>
                        <i className="fa fa-dot-circle-o" aria-hidden="true"></i>
                      </span> Solo Pro wireless headphones
                    </p>
                  </li>
                  <li>
                    <p>
                    <span>
                      <i className="fa fa-dot-circle-o" aria-hidden="true"></i>
                    </span> Carrying Case
                    </p>
                  </li>
                  <li>
                    <p>
                    <span>
                      <i className="fa fa-dot-circle-o" aria-hidden="true"></i>
                    </span> Lightning to USD-A charging cable
                    </p>
                  </li>
                  <li>
                    <p>
                    <span>
                      <i className="fa fa-dot-circle-o" aria-hidden="true"></i>
                    </span> Quick Start Guide
                    </p>
                  </li>
                  <li>
                    <p>
                    <span>
                      <i className="fa fa-dot-circle-o" aria-hidden="true"></i>
                    </span> Warranty Cart
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FeaturingArea/>
      <NewArrivals/>
      <BeatSection/>
      <SpecialOffers/>
      
    </div>
  )
}


