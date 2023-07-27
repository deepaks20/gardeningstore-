// OfferPage.js
import React from 'react';
import './assets/css/OfferPage.css';

const OfferPage = () => {
  const offers = [
    {
      id: 1,
      title: 'Summer Sale',
      description: 'Get up to 50% off on summer essentials.',
      image: 'https://img.freepik.com/free-vector/end-summer-sale-promotion-illustration_23-2148625157.jpg?w=2000',
    },
    {
      id: 2,
      title: 'Clearance Sale',
      description: 'Clearance sale! All items must go.',
      image: 'https://img.freepik.com/premium-vector/stock-clearance-sale-banner-design_1588-911.jpg?w=2000',
    },
    // Add more offers as needed
  ];

  return (
    <div className="offer-page-container">
      <h2 className="head">Special Offers</h2>
      <div className="offer-grid">
        {offers.map((offer) => (
          <div className="offer" key={offer.id}>
            <img src={offer.image} alt={offer.title} className="offer-image" />
            <h3 className="title">{offer.title}</h3>
            <p className="description">{offer.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OfferPage;
