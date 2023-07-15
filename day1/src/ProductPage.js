import React from 'react';
import './ProductPage.css';

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
        <img className="homepage-icon" src="https://cdn.icon-icons.com/icons2/2248/PNG/512/home_circle_icon_137496.png" alt="Homepage Icon" />
        Garden Tools
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

export default ProductPage;
