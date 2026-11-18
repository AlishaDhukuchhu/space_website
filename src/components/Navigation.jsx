import React, { useState, useEffect } from 'react';
import './Navigation.css';

const Navigation = ({ navigateTo }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navigation ${scrolled ? 'nav-scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-left">
          <button className="logo logo-button" onClick={() => navigateTo('/')}>LUMÉRA</button>
        </div>
        
        <div className="nav-center">
          <a href="#new-arrivals">New Arrivals</a>
          <a href="#jewelry">Jewelry</a>
          <button className="nav-link-button" onClick={() => navigateTo('/collections')}>Collections</button>
          <a href="#about">About</a>
          <a href="#journal">Journal</a>
        </div>

        <div className="nav-right">
          <button aria-label="Search" className="icon-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
          </button>
          <button aria-label="Account" className="icon-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
          </button>
          <button aria-label="Wishlist" className="icon-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>
          </button>
          <button aria-label="Shopping Bag" className="icon-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 01-8 0"/></svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
