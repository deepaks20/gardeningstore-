import React from 'react';
import './Fertilizers.css';

const CustomSeedsPage = () => {
  const products = [
    {
      id: 1,
      name: 'Urea',
      image: 'https://c8.alamy.com/comp/EE2N46/close-up-of-some-urea-fertilizer-EE2N46.jpg',
      price: '$5',
      rating: 6,
    },
    {
      id: 2,
      name: 'Phosphate',
      image: 'https://rubbermalaysia.com/wp-content/uploads/2023/01/phosphorus-fertilizer-process-equipment-scaled-1.jpg',
      price: '$4',
      rating: 7,
    },
    {
      id: 3,
      name: 'Potassium Fertilizer',
      image: 'https://images.ctfassets.net/3s5io6mnxfqz/53B1UR91DuvVI7nzVjyPGa/e1366049326c7ba55623dc9d69d57f6f/AdobeStock_26946499.jpeg',
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
      <h2 className='head'>
        <img className="homepage-icon" src="https://cdn.icon-icons.com/icons2/2248/PNG/512/home_circle_icon_137496.png" alt="Homepage Icon" />
        Fertilizers
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

export default CustomSeedsPage;
