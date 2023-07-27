import React from 'react';
import './assets/css/profile.css';
const ProfilePage = ({ user }) => {
  return (
    <div className="profile-page">
      <div className="profile-header">
        <h2>Welcome, {user.name}!</h2>
        <p>Email: {user.email}</p>
      </div>
      <div className="profile-details">
        <h3>Profile Information</h3>
        <p>Name: {user.name}</p>
        <p>Address: {user.address}</p>
        <p>Phone Number: {user.phone}</p>
      </div>
      <div className="order-history">
        <h3>Order History</h3>
        <ul>
          {user.orders.map((order) => (
            <li key={order.id}>
              <p>Order ID: {order.id}</p>
              <p>Order Total: {order.total}</p>
              <p>Order Date: {order.date}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProfilePage;
