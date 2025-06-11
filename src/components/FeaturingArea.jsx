import React from 'react';
import homeImage1 from '../assets/images/home-image-1.png';
import keepImage from '../assets/images/keep.avif';
import homeImage2 from '../assets/images/home-image-2.jpg';
import homeImage3 from '../assets/images/home-image-3.jpg';
import micImage from '../assets/images/mic.avif';

const FeaturingArea = () => {
  return (
    <section className="featuring_area position-relative">
      <div className="container">
        <div className="home-image-1">
          <img src={homeImage1} alt="home-image-1" />
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-4 col-12">
            <div className="feature_left" data-aos="fade-right">
              <img src={keepImage} alt="keep" />
              <h3>Keep feeling music</h3>
              <p>
                Posuere ac ut consequat semper viverra nam libero. Euismod quis viverra nibh cras pulvinar mattis. Tellus orci ac auctor augue mauris.
              </p>
              <img src={homeImage2} alt="home-image-2" className="home-image" />
            </div>
          </div>
          <div className="col-lg-8 col-md-8 col-12">
            <div className="feature_right" data-aos="fade-left">
              <img src={homeImage3} alt="home-image-3" className="home-image-3" />
              <h3>
                <span>
                  <img src={micImage} alt="mic" className="mic-image" />
                </span>{' '}
                Keep feeling music
              </h3>
              <p>
                Posuere ac ut consequat semper viverra nam libero. Euismod quis viverra nibh cras pulvinar mattis. Tellus orci ac auctor augue mauris.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturingArea;
