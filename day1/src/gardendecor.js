import React from 'react';
import './gardendecor.css';

const CustomSeedsPage = () => {
  const products = [
    {
      id: 1,
      name: 'Chocozone pack',
      image: 'https://m.media-amazon.com/images/I/71XLbNnfFjL._AC_UL600_FMwebp_QL65_.jpg',
      price: '$5',
      rating: 6,
    },
    {
      id: 2,
      name: 'Epyz Solar sakura flower spring Light',
      image: 'https://m.media-amazon.com/images/I/71B9bPpCwzL._AC_UL600_FMwebp_QL65_.jpg',
      price: '$4',
      rating: 7,
    },
    {
      id: 3,
      name: 'Tied Ribbon',
      image: 'https://m.media-amazon.com/images/I/71WBIhxYlZL._AC_UL600_FMwebp_QL65_.jpg',
      price: '$6',
      rating: 8,
    },
  ];

  const renderRatings = (rating) => {
    return rating.toFixed(1);
  };

  const handleAddToCart = (productId) => {
    // Handle adding the product to the cart
    console.log(`Product ${productId} added to cart`);
  };

  return (
    <div className="product-page-container">
      <h2 className="head">
        <img className="homepage-icon" src="https://cdn.icon-icons.com/icons2/2248/PNG/512/home_circle_icon_137496.png" alt="Homepage Icon" />
       Garden Decoratives
      </h2>
      <div className="product-grid">
        {products.map((product) => (
          <div className="product" key={product.id}>
            <img src={product.image} alt={product.name} className="product-image" />
            <p className="name">{product.name}</p>
            <p className="price">{product.price}</p>
            <p className="rating">Rating: {renderRatings(product.rating)}</p>
            <button className="add-to-cart-button" onClick={() => handleAddToCart(product.id)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomSeedsPage
