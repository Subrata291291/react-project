import React, { useState } from 'react';

const IntroducingVideo = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openVideo = () => setIsOpen(true);
  const closeVideo = () => setIsOpen(false);

  return (
    <section className="introducing_area">
      <div className="container">
        <div className="introducing_box text-center">
          <h5>FIND A LOCAL STORE</h5>
          <h3>INTRODUCING PERFECT SOUND</h3>
          <button id="video_icon" onClick={openVideo}>
            <i className="fa fa-play"></i>
          </button>
        </div>

        {isOpen && (
          <div id="video-overlay" style={{ display: 'flex' }}>
            <div id="video-container">
              <span id="close-btn" onClick={closeVideo}>&times;</span>
              <iframe
                id="videoIfra"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/k7Qod1fIEBM?autoplay=1"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default IntroducingVideo;
