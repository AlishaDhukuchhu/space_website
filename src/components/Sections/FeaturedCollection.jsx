import React from 'react';
import './FeaturedCollection.css';

const FeaturedCollection = ({ navigateTo }) => {
  return (
    <section className="section featured-collection-section" id="collections">
      <div className="container">
        <div className="featured-collection-content">
          <div className="collection-text">
            <h2 className="collection-headline">Made to Be Remembered</h2>
            <p className="collection-description">
              Jewelry designed around the moments, people, and stories that stay with you.
            </p>
            <button className="btn btn-primary" onClick={() => navigateTo('/collections')}>Explore the Collection</button>
          </div>
          <div className="collection-image-wrapper">
             <img src="/images/lifestyle.png" alt="Featured Collection" className="collection-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollection;
