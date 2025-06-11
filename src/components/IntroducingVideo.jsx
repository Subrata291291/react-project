import React, { useState } from 'react';

export default function IntroducingVideo() {
  const [showVideo, setShowVideo] = useState(false);

  const handleOverlayClick = () => setShowVideo(false);
  const handleVideoContainerClick = (e) => e.stopPropagation();

  return (
    <section className="introducing_area">
      <div className="container">
        <div className="introducing_box text-center">
          <h5>FIND A LOCAL STORE</h5>
          <h3>INTRODUCING PERFECT SOUND</h3>
          <button id="video_icon" onClick={() => setShowVideo(true)}>
            <i className="fa fa-play"></i>
          </button>
        </div>

        {showVideo && (
          <div id="video-overlay" onClick={handleOverlayClick}>
            <div id="video-container" onClick={handleVideoContainerClick}>
              <span id="close-btn" onClick={() => setShowVideo(false)}>&times;</span>
              <iframe
                src="https://www.youtube.com/embed/k7Qod1fIEBM?autoplay=1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" width={600} height={400}
                allowFullScreen
                >
            </iframe>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
