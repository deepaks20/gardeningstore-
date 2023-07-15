import React from 'react';
import './seeds.css';

const CustomProductPage = () => {
  const products = [
    {
      id: 1,
      name: 'Brown Mustard Seeds',
      image: 'https://www.amar-khamar.com/cdn/shop/products/BlackMustard2_575x.jpg?v=1637861957',
      price: '$3',
      rating: 4.5,
    },
    {
      id: 2,
      name: 'Lotus Seeds',
      image: 'https://mangalorespice.com/cdn/shop/products/SP_22-02_2048x.jpg?v=1540659087',
      price: '$4',
      rating: 3.8,
    },
    {
      id: 3,
      name: 'Brown Rice Paddy Seeds',
      image: 'https://gonefarmers.com/cdn/shop/products/image_0bef0c27-a579-49da-90f2-b1fe09ac2ba0_1024x1024@2x.jpg?v=1658638294',
      price: '$6',
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
        Garden Seeds
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

export default CustomProductPage;
