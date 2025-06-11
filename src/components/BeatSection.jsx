import React from 'react';
import beatpic from '../assets/images/beat-pic.png';
import beatGirl from '../assets/images/beat1-pic.png';

export default function BeatSection() {
  return (
    <section className="beat_area">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-6 col-12 order-lg-1 order-md-1 order-2">
            <div className="beat_left" data-aos="fade-right">
              <h3 className="title">Lightweight Headphones</h3>
              <p>
                Diam donec adipiscing tristique risus. Praesent tristique magna sit amet
                purus gravida quis blandit. In dictum non consectetur a erat nam at
                lectus. Proin fermentum leo vel orci porta non pulvinar. Non enim
                praesent elementum facilisis leo vel. Volutpat diam ut venenatis tellus in
                metus.
              </p>
              <button className="button btn order-btn1">Order Now</button>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-12 order-lg-2 order-md-2 order-1">
            <div className="beat_right" data-aos="fade-left">
              <img src={beatpic} alt="beat-pic" />
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-6 col-12 p-0">
            <div className="beat1_left" data-aos="fade-right">
              <img src={beatGirl} alt="beat1-pic" />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-12">
            <div className="beat1_right" data-aos="fade-left">
              <h3 className="title">Listen the sound of quality</h3>
              <p>
                Diam donec adipiscing tristique risus. Praesent tristique magna sit amet
                purus gravida quis blandit. In dictum non consectetur a erat nam at
                lectus. Proin fermentum leo vel orci porta non pulvinar. Non enim
                praesent elementum facilisis leo vel. Volutpat diam ut venenatis tellus in
                metus.
              </p>
              <button className="button btn order-btn1">Order Now</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
