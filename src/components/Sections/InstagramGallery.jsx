import React from 'react';
import './InstagramGallery.css';

const INSTA_IMAGES = [
  '/images/lifestyle.png',
  '/images/earrings.png',
  '/images/bracelet.png',
  '/images/ring.png',
  '/images/necklace.png',
  '/images/parallax.png'
];

const InstagramGallery = () => {
  return (
    <section className="section" id="journal">
      <div className="container">
        <h2 className="section-title">Wear It Your Way</h2>
        <p className="insta-handle">Follow @lumera</p>
        
        <div className="insta-grid">
          {INSTA_IMAGES.map((img, index) => (
            <a href="#" className="insta-item" key={index}>
              <img src={img} alt="Instagram post" className="insta-image" />
              <div className="insta-overlay">
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramGallery;
