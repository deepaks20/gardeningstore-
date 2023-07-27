import React from "react";
import "./assets/css/Button.css";
import { Link } from "react-router-dom";

const Button = () => {
    return (
      <div className="button-container">
        <Link to="/ProductsList">
          <button className="get-button">GetProducts</button>
        </Link>
        <Link to="/AddProductForm">
          <button className="post-button">PostProducts</button>
        </Link>
        <Link to="/UpdateProductForm">
          <button className="put-button">UpdateProducts</button>
        </Link>
        <Link to="/DeleteProduct">
          <button className="delete-button">DeleteProducts</button>
        </Link>
        <Link to="/UserFeed">
          <button className="delete-button">ViewFeedback</button>
        </Link>
      </div>
    );
  };
  
  export default Button;