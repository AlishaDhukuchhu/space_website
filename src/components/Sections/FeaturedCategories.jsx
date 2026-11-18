import React from 'react';
import './FeaturedCategories.css';

const CATEGORIES = [
  {
    name: 'Rings',
    image: '/images/ring.png'
  },
  {
    name: 'Necklaces',
    image: '/images/necklace.png'
  },
  {
    name: 'Earrings',
    image: '/images/earrings.png'
  },
  {
    name: 'Bracelets',
    image: '/images/bracelet.png'
  }
];

const FeaturedCategories = () => {
  return (
    <section className="section" id="jewelry">
      <div className="container">
        <h2 className="section-title">Find Your Signature Piece</h2>
        <div className="categories-grid">
          {CATEGORIES.map((cat, index) => (
            <div className="category-card" key={index}>
              <div className="category-image-wrapper">
                <img src={cat.image} alt={cat.name} className="category-image" />
              </div>
              <div className="category-overlay">
                <h3 className="category-name">{cat.name}</h3>
                <span className="category-explore">Explore &rarr;</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
