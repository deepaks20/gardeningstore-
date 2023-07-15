import React from 'react';
import './Plants.css';

const CustomFertilizersPage = () => {
  const products = [
    {
      id: 1,
      name: 'African Blue Basil Herb',
      image: 'https://www.growjoy.com/store/pc/catalog/african_blue_basil_herb_plant_1727_thumb.jpg',
      price: '$12',
      rating: 6,
    },
    {
      id: 2,
      name: 'Lime Basil Herb',
      image: 'https://www.growjoy.com/store/pc/catalog/chives_herb_plant_2077_thumb.jpg',
      price: '$13',
      rating: 7,
    },
    {
      id: 3,
      name: 'Chive Herb',
      image: 'https://images.ctfassets.net/3s5io6mnxfqz/53B1UR91DuvVI7nzVjyPGa/e1366049326c7ba55623dc9d69d57f6f/AdobeStock_26946499.jpeg',
      price: '$14',
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
        Plants
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

export default CustomFertilizersPage;
