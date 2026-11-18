import React, { useMemo, useState } from 'react';
import ProductCard from './ProductCard';
import './CollectionsPage.css';

const COLLECTIONS = [
  {
    id: 'signature',
    name: 'Signature Edit',
    eyebrow: 'Everyday icons',
    description: 'Quiet, polished pieces designed to become part of a daily ritual.',
    image: '/images/lifestyle.png',
    palette: 'Warm gold, pearl, ivory',
    pieces: '12 pieces',
    mood: 'Minimal, refined, effortless'
  },
  {
    id: 'celestial',
    name: 'Celestial Light',
    eyebrow: 'Evening shimmer',
    description: 'Radiant settings, soft curves, and luminous finishes for memorable nights.',
    image: '/images/necklace.png',
    palette: 'Champagne, silver, moonstone',
    pieces: '9 pieces',
    mood: 'Romantic, luminous, graceful'
  },
  {
    id: 'heirloom',
    name: 'Modern Heirlooms',
    eyebrow: 'Future classics',
    description: 'Sculptural keepsakes made for milestones, gifting, and long-loved stories.',
    image: '/images/ring.png',
    palette: 'Gold, diamond, rose gold',
    pieces: '15 pieces',
    mood: 'Classic, meaningful, enduring'
  }
];

const PRODUCTS = [
  {
    id: 1,
    collection: 'signature',
    name: 'Aurelia Gold Ring',
    price: 129,
    badge: 'NEW',
    image: '/images/ring.png',
    hoverImage: '/images/lifestyle.png'
  },
  {
    id: 2,
    collection: 'signature',
    name: 'Lumina Pendant',
    price: 119,
    image: '/images/necklace.png',
    hoverImage: '/images/lifestyle.png'
  },
  {
    id: 3,
    collection: 'signature',
    name: 'Élan Gold Bracelet',
    price: 169,
    image: '/images/bracelet.png',
    hoverImage: '/images/lifestyle.png'
  },
  {
    id: 4,
    collection: 'celestial',
    name: 'Celeste Pearl Necklace',
    price: 189,
    badge: 'BESTSELLER',
    image: '/images/necklace.png',
    hoverImage: '/images/lifestyle.png'
  },
  {
    id: 5,
    collection: 'celestial',
    name: 'Solara Drop Earrings',
    price: 149,
    image: '/images/earrings.png',
    hoverImage: '/images/lifestyle.png'
  },
  {
    id: 6,
    collection: 'heirloom',
    name: 'Nova Diamond Ring',
    price: 249,
    badge: 'LIMITED',
    image: '/images/ring.png',
    hoverImage: '/images/lifestyle.png'
  },
  {
    id: 7,
    collection: 'heirloom',
    name: 'Amara Keepsake Bracelet',
    price: 215,
    image: '/images/bracelet.png',
    hoverImage: '/images/lifestyle.png'
  },
  {
    id: 8,
    collection: 'heirloom',
    name: 'Mira Stud Earrings',
    price: 98,
    image: '/images/earrings.png',
    hoverImage: '/images/lifestyle.png'
  }
];

const CollectionsPage = () => {
  const [activeCollection, setActiveCollection] = useState(COLLECTIONS[0].id);

  const selectedCollection = useMemo(
    () => COLLECTIONS.find(collection => collection.id === activeCollection),
    [activeCollection]
  );

  const selectedProducts = PRODUCTS.filter(product => product.collection === activeCollection);

  return (
    <main className="collections-page">
      <section className="collections-hero">
        <div className="container collections-hero-inner">
          <div className="collections-hero-copy">
            <p className="collections-eyebrow">Curated by mood, moment, and meaning</p>
            <h1>Collections made to be remembered.</h1>
            <p>
              Explore refined edits of rings, necklaces, earrings, and bracelets arranged
              around how each piece should feel when it becomes yours.
            </p>
          </div>
          <div className="collections-hero-image">
            <img src="/images/parallax.png" alt="Lumera jewelry collection" />
          </div>
        </div>
      </section>

      <section className="collections-browser">
        <div className="container">
          <div className="collections-header">
            <div>
              <p className="collections-eyebrow">Shop the edits</p>
              <h2>Choose your collection</h2>
            </div>
            <p>
              Each collection is built around a different kind of intention, from everyday
              polish to heirloom-worthy celebration.
            </p>
          </div>

          <div className="collection-tabs" role="tablist" aria-label="Collections">
            {COLLECTIONS.map(collection => (
              <button
                key={collection.id}
                className={`collection-tab ${activeCollection === collection.id ? 'is-active' : ''}`}
                onClick={() => setActiveCollection(collection.id)}
                role="tab"
                aria-selected={activeCollection === collection.id}
              >
                {collection.name}
              </button>
            ))}
          </div>

          <div className="collection-feature">
            <div className="collection-feature-image">
              <img src={selectedCollection.image} alt={selectedCollection.name} />
            </div>
            <div className="collection-feature-copy">
              <p className="collections-eyebrow">{selectedCollection.eyebrow}</p>
              <h2>{selectedCollection.name}</h2>
              <p>{selectedCollection.description}</p>
              <dl className="collection-details">
                <div>
                  <dt>Palette</dt>
                  <dd>{selectedCollection.palette}</dd>
                </div>
                <div>
                  <dt>Includes</dt>
                  <dd>{selectedCollection.pieces}</dd>
                </div>
                <div>
                  <dt>Mood</dt>
                  <dd>{selectedCollection.mood}</dd>
                </div>
              </dl>
            </div>
          </div>

          <div className="collection-product-header">
            <h2>{selectedCollection.name} Pieces</h2>
            <span>{selectedProducts.length} featured pieces</span>
          </div>

          <div className="collection-products-grid">
            {selectedProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default CollectionsPage;
