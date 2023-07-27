import React, { useState } from 'react';
import './assets/css/Feed.css';

import { Link } from 'react-router-dom';
import axios from 'axios';

const Feedback = () => {
  const [selectedRating, setSelectedRating] = useState(null);
  const [showMessage, setShowMessage] = useState(false);
  const [comment, setComment] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');

  const handleRatingClick = (rating) => {
    setSelectedRating(rating);
  };

  const handleSendClick = async () => {
    try {
      // Your API endpoint URL for the POST operation
      const API_URL = 'http://localhost:9015/api/v1/feed/post'; // Replace with your API endpoint

      // Prepare the data to be sent in the POST request
      const feedbackData = {
        rating: selectedRating,
        comment,
        name,
        email,
        contact,
      };

      // Make the POST request using Axios
      const response = await axios.post(API_URL, feedbackData);

      // Assuming the API returns a success message or status, you can use it to show a confirmation message
      if (response.status === 200) {
        setShowMessage(true);
      }
    } catch (error) {
      console.error('Error submitting feedback:', error);
      // Handle the error accordingly (e.g., display an error message)
    }
  };

  return (
    <div className='giff'>
      <Link to="/HomePage" className="arrow-top-left">&#8592;</Link>

      <div className="panel-container">
        <strong>How satisfied are you with our customer support performance?</strong>
        <div className="ratings-container">



        <input
          type="text"
          className="custom-input"
          placeholder="Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <input
          type="email"
          className="custom-input"
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="text"
          className="custom-input"
          placeholder="Contact"
          value={contact}
          onChange={(event) => setContact(event.target.value)}
        />

        <textarea
          placeholder="Add comments or suggestions..."
          value={comment}
          onChange={(event) => setComment(event.target.value)}
        />

        <div className="submit-container">
          <button className="btn7" onClick={handleSendClick}>Submit</button>
          {showMessage && <p>Thanks for giving your feedback!</p>}
        </div>
        </div>
        </div>
        </div>
  );
};

export default Feedback;