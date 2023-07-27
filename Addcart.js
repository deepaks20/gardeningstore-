// Import necessary modules
import React from 'react';
import { Link } from 'react-router-dom';

// Create a functional component for ProductPage
const Addcart = () => {
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
      id: 4,
      name: 'Spade',
      image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxASERISEhAWFRMSGBUXFRcXGBUVGBYYFxMWFhoXFhgYHSggGBslGxYYITEhJyorOi4uGx8zODUtNyotLisBCgoKDQ0OGhAQFSsdHyUtMC0tKystLS0rLS0tLSstLS0tLS03KysrLS0tLS03KysrKy0rKys3KystKy0tKysrLf/AABEIANoA5wMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABQcDBAYCAQj/xAA9EAACAQIDBgEJBwMDBQAAAAAAAQIDEQQhMQUGEkFRYXEHEyIyQoGRofBSYrHB0eHxFCNDJHKCM1NjksL/xAAYAQEBAQEBAAAAAAAAAAAAAAAAAQMCBP/EAB0RAQEBAQADAQEBAAAAAAAAAAABAhEDITFRQRL/2gAMAwEAAhEDEQA/ALxAAAAAAAAAAAAAAAAAAAAAAAAAAA1dpYxUqbm3pkvFm0Rm8OzHiKLhGXDOLUoN3txJNWlbk02vmS956Wc77R9Dajlnx/Mk8PtFP1viv0K0jjqlGbpVYOFSLs116Ndb9VryJnC7W5N2Z555efW98ffiwITTV07o9HL4TaNs72f4kvhtqReUsu/L9jablY3NiRB8TufTtyAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAid4N36GMhw1I2kk+Ga9aP6rsVdj9i43CVo0Z8U1N2pTiuJS527PnZ9LlzSklmyI2ltBRTk3aKzV/xZl5cZv1r49anxylTZ9ajR4qk4KVs4xu/g2tfca+zdrXSu79+T+vyOe3u3llUbhF2/Jd+5yWzdsSpylC7Vm8paPr4O9/3PNfXxtPf1eOztruOjuun6HRYbExmrxfiuaKa2dt5aXs19fX5HUbO23wtO9n1/X66muPL+s9+P8WGCO2ZtaFVJXtLp18PhoD0SysbOJEAFQAAAAAAAAAAAAAAAAAAAAAAAAPkpJK7Pk5pJtuyWbOK3j235yM+GfDCLS0td5O13k5NPKPLNv1Wc28WTqexm04Z+nF2z4U034tIrLe7eZzbhB5X9za5k5rU+yl91TXb8Pi1w6aPDvbzWzqUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH6nW2TzKc7vl7wTWi47tk8cV/s/TN9QxppGSXIww2rml2b3KVZ3itB0e3y8J/N1+OHek1NXXOLRGYfhdxzlrpz06zrdL5eUgAAAAAAAAAAAAAAAAAAAAA//Z',
      price: '$22.99',
      rating: 4.8,
    },
  ];

  return (
    <div className="product-page">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.name} className="product-image" />
          <h3>{product.name}</h3>
          <p>{product.price}</p>
          <div className="product-rating">{product.rating}</div>
          {/* Optional Link to the product details page */}
          <Link to={`/products/${product.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default Addcart;
