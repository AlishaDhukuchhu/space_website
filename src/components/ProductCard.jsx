import React, { useState } from 'react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="product-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="product-image-container">
        {product.badge && <span className="product-badge">{product.badge}</span>}
        <button className="wishlist-btn" aria-label="Add to wishlist">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>
        </button>
        <img 
          src={isHovered ? product.hoverImage : product.image} 
          alt={product.name} 
          className="product-image"
        />
        <button className={`quick-add-btn ${isHovered ? 'visible' : ''}`}>
          Quick Add
        </button>
      </div>
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">${product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
