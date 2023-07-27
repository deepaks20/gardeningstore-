import React from 'react';
import { Link } from 'react-router-dom';
import './assets/css/ProductPage.css';

const ProductPage = () => {
  const products = [
    {
      id: 1,
      name: 'Shovel',
      image: 'https://media.istockphoto.com/id/864742360/photo/small-shovel-isolated-on-white.jpg?b=1&s=170667a&w=0&k=20&c=jkjLU3LO_XvW8YBHrGCIVaY6f8IT-yk9JcCOzi1efRY=',
      price: '$19.99',
      rating: 4.5,
    },
    {
      id: 2,
      name: 'Garden Shears',
      image: 'https://m.media-amazon.com/images/I/61PkDxD7QxL._AC_UL600_FMwebp_QL65_.jpg',
      price: '$12.99',
      rating: 3.8,
    },
    {
      id: 3,
      name: 'Rake',
      image: 'https://m.media-amazon.com/images/I/51mqkOw3JnL._AC_UL600_FMwebp_QL65_.jpg',
      price: '$9.99',
      rating: 4.2,
    },
    {
      id: 3,
      name: 'Spade',
      image: 'data:image/jpeg;base64,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',
      price: '$10.89',
      rating: 4.1,
    },
    {
      id: 3,
      name: 'Garden Trowel',
      image: 'data:image/jpeg;base64,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yvMVOwyyDcD+7j6yP2HoglVE4aCSQAOJ2C8UNBNU6tvFEf4pH4jx/wANvAfMVaYb2dAIkqHCWQbC34Mf5G8fUq+TYiYdh0cDcsbbX3du5x5uduVLRFAIiICIiAiIgIiICIiAiIgIiICIiAiIgi1pvZv1P02/X9lW1tayLQm5OzB7xUetxJz3uZALm5BkI8LbaeH4joem6hYMzxy94x3eMIuTqHAi4Idax2PppoLqRjhaKmZ5fZrogAWC4cA7UA/EPW7d9DoVObhzGSiVji05crm7tkHlLr8R/wCcb1OMVjRM4OfCwOYB3hLu9dqDks14de4B0GoFlJp6id7Wtgp5ZLADvZB3TDYWuS+zj9GlBOrmMkbleLi97XIB9bHVQKzFmMcIxd8h2hYM0p/lG31UyLs1NJrU1GUf5UF2/R0p8R+garzDcKgp25YYmsB3IHid+Zx1d9SoGtU/Z6oqdal3cRn+Aw3meOUkmw9AtpoKCKBgjhYGNHAfuTuT1KkogIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiCqf2fhJJBlbmJJDZpmtueQDtPovn/1umPvRl/55JXg+oc4hWyIItHhsMX91DHH+RjW3+wUpEQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREArwx10RQPaIikEREH/9k=',
      price: '$12.09',
      rating: 4.2,
    },
    {
      id: 3,
      name: 'weeder tools',
      image: 'data:image/jpeg;base64,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',
      price: '$16.99',
      rating: 4.2,
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
      <h2 className='head'>
       <Link to="/home"><img className="homepage-icon" src="https://cdn.icon-icons.com/icons2/2248/PNG/512/home_circle_icon_137496.png" alt="Homepage Icon" /></Link>
        Garden Tools
      </h2>
      <div className="product-grid">
        {products.map((product) => (
          <div className="product" key={product.id}>
            <img src={product.image} alt={product.name} className="product-image" />
            <p className="name">{product.name}</p>
            <p className="price">{product.price}</p>
            <p className="rating">Rating: {renderRatings(product.rating)}</p>
            <Link to="/PaymentPage">   <button className="add-to-cart-button" onClick={() => handleAddToCart(product.id)}>
              Add to cart
            </button></Link>
             
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;