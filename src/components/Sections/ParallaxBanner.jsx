import React from 'react';
import './ParallaxBanner.css';

const ParallaxBanner = () => {
  return (
    <section className="parallax-banner" id="brand-story">
      <div className="parallax-bg"></div>
      <div className="parallax-content animate-fade-in">
        <h2 className="parallax-headline">Designed With Intention</h2>
        <p className="parallax-text">
          Our pieces are crafted to be worn, loved, and passed down. 
          Discover the timeless artistry behind every Luméra design.
        </p>
        <button className="btn btn-primary">Our Story</button>
      </div>
    </section>
  );
};

export default ParallaxBanner;
