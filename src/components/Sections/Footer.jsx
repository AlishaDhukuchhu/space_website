import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <h2 className="footer-logo">LUMÉRA</h2>
            <p className="footer-tagline">Timeless pieces. Personal stories.</p>
          </div>
          
          <div className="footer-links-grid">
            <div className="footer-column">
              <h3>Shop</h3>
              <a href="#">New Arrivals</a>
              <a href="#">Jewelry</a>
              <a href="#">Collections</a>
              <a href="#">Gifts</a>
            </div>
            
            <div className="footer-column">
              <h3>About</h3>
              <a href="#">Our Story</a>
              <a href="#">Materials</a>
              <a href="#">Journal</a>
            </div>
            
            <div className="footer-column">
              <h3>Customer Care</h3>
              <a href="#">Contact</a>
              <a href="#">Shipping & Returns</a>
              <a href="#">FAQs</a>
              <a href="#">Care Guide</a>
            </div>
            
            <div className="footer-column">
              <h3>Follow Us</h3>
              <a href="#">Instagram</a>
              <a href="#">Pinterest</a>
              <a href="#">TikTok</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-newsletter">
             <p>A Little Sparkle, Delivered.</p>
             <form className="newsletter-form">
               <input type="email" placeholder="Your email address" aria-label="Email address" />
               <button type="submit" className="btn btn-primary">Subscribe</button>
             </form>
          </div>
          
          <div className="footer-legal">
            <span>&copy; {new Date().getFullYear()} Luméra. All rights reserved.</span>
            <div className="legal-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms & Conditions</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
