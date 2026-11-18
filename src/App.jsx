import React, { useEffect, useState } from 'react'
import HeroCanvas from './components/HeroCanvas'
import Navigation from './components/Navigation'
import FeaturedCategories from './components/Sections/FeaturedCategories'
import NewArrivals from './components/Sections/NewArrivals'
import FeaturedCollection from './components/Sections/FeaturedCollection'
import FindYourPiece from './components/Sections/FindYourPiece'
import ParallaxBanner from './components/Sections/ParallaxBanner'
import InstagramGallery from './components/Sections/InstagramGallery'
import Footer from './components/Sections/Footer'
import CollectionsPage from './components/CollectionsPage'

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  const navigateTo = (path) => {
    if (path === currentPath) return;
    window.history.pushState({}, '', path);
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [currentPath]);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const isCollectionsPage = currentPath === '/collections';

  return (
    <>
      <Navigation navigateTo={navigateTo} />
      {isCollectionsPage ? (
        <CollectionsPage />
      ) : (
        <>
          <HeroCanvas navigateTo={navigateTo} />
          <div className="reveal-on-scroll"><FeaturedCategories /></div>
          <div className="reveal-on-scroll"><NewArrivals /></div>
          <ParallaxBanner />
          <div className="reveal-on-scroll"><FeaturedCollection navigateTo={navigateTo} /></div>
          <div className="reveal-on-scroll"><FindYourPiece /></div>
          <div className="reveal-on-scroll"><InstagramGallery /></div>
        </>
      )}
      <Footer />
    </>
  )
}

export default App
