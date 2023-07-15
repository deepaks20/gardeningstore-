import React, { useState } from 'react';

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [profileData, setProfileData] = useState(null);

  const handleSearch = () => {
    // Simulating an API call to fetch profile data based on the search term
    // Replace this with your own API call or data fetching logic
    fetch(`https://api.example.com/profiles?search=${searchTerm}`)
      .then(response => response.json())
      .then(data => setProfileData(data));
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={event => setSearchTerm(event.target.value)}
        placeholder="Search profiles"
      />
      <button onClick={handleSearch}>Search</button>

      {profileData ? (
        <div>
          <h2>Profile</h2>
          <p>Name: {profileData.name}</p>
          <p>Email: {profileData.email}</p>
          {/* Render additional profile details as needed */}
        </div>
      ) : (
        <p>No profile found.</p>
      )}
    </div>
  );
};

export default HomePage;
  