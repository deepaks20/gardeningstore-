import React from 'react';
import './CartPage.css'
const CartPage = ({ cartItems, removeFromCart }) => {
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div>
    <div className='cart'>
      <h1>Cart</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id}>
              <h3>{item.name}</h3>
              <div>
                <img
                  src={item.image}
                  alt={item.name}
                  style={{border:'4px solid black', maxWidth: '300px', maxHeight: '300px' }}
                />
              </div>
              <p className='tt'>Price: {item.price}</p>
              <button className='bt' style={{backgroundColor:'black',color:'white' }} onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))}
          <p className='tt'>Total Price: {getTotalPrice()}</p>
    <button className='button'>
      Proceed for Checkout
    </button>
        </div>
      )}
    </div>
    </div>
  );
};

export default CartPage;