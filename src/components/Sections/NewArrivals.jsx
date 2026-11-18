import React, { useRef, useEffect } from 'react';
import ProductCard from '../ProductCard';
import './Sections.css';

const MOCK_PRODUCTS = [
  {
    id: 1,
    name: 'Aurelia Gold Ring',
    price: 129,
    badge: 'NEW',
    image: '/images/ring.png',
    hoverImage: '/images/lifestyle.png'
  },
  {
    id: 2,
    name: 'Celeste Pearl Necklace',
    price: 189,
    image: '/images/necklace.png',
    hoverImage: '/images/lifestyle.png'
  },
  {
    id: 3,
    name: 'Solara Drop Earrings',
    price: 149,
    badge: 'BESTSELLER',
    image: '/images/earrings.png',
    hoverImage: '/images/lifestyle.png'
  },
  {
    id: 4,
    name: 'Élan Gold Bracelet',
    price: 169,
    image: '/images/bracelet.png',
    hoverImage: '/images/lifestyle.png'
  },
  {
    id: 5,
    name: 'Nova Diamond Ring',
    price: 249,
    badge: 'NEW',
    image: '/images/ring.png',
    hoverImage: '/images/lifestyle.png'
  },
  {
    id: 6,
    name: 'Lumina Pendant',
    price: 119,
    image: '/images/necklace.png',
    hoverImage: '/images/lifestyle.png'
  }
];

const NewArrivals = () => {
  const containerRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !trackRef.current) return;
      
      const container = containerRef.current;
      const track = trackRef.current;
      
      const rect = container.getBoundingClientRect();
      const containerTop = rect.top;
      const containerHeight = rect.height;
      const windowHeight = window.innerHeight;
      
      // Calculate max horizontal translation
      const maxTranslate = track.scrollWidth - window.innerWidth + (window.innerWidth * 0.1);
      
      if (containerTop <= 0 && containerTop > -(containerHeight - windowHeight)) {
        // Pinned state: Calculate scroll progress (0 to 1)
        const progress = Math.abs(containerTop) / (containerHeight - windowHeight);
        track.style.transform = `translateX(-${progress * maxTranslate}px)`;
      } else if (containerTop > 0) {
        // Before pinned state
        track.style.transform = `translateX(0px)`;
      } else {
        // After pinned state
        track.style.transform = `translateX(-${maxTranslate}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Trigger once on mount
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="pin-container" ref={containerRef} id="new-arrivals">
      <div className="sticky-container">
        <section className="section new-arrivals-section">
          <div className="container" style={{ paddingBottom: '60px' }}>
            <h2 className="section-title">New Arrivals</h2>
          </div>
          <div className="horizontal-track-wrapper">
            <div className="horizontal-track" ref={trackRef}>
              {MOCK_PRODUCTS.map(product => (
                <div className="scroll-item" key={product.id}>
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default NewArrivals;
