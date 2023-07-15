import React, { useState } from 'react';
import './Search.css';

function Home() {
  const [searchValue, setSearchValue] = useState('');//1
  const [filteredItems, setFilteredItems] = useState([]);

  const handleSearchInputChange = (event) => {//full
    const value = event.target.value;
    setSearchValue(value);
    filterItems(value);
  };

  const filterItems = (value) => {
    const filtered = [
      "Tools",
      "Equipment",
      "Plants",
      "Seeds",
      "Fertilizers",
      "Pesticides",
      "Garden Decor",
      "Offers"
    ].filter(item => item.toLowerCase().includes(value.toLowerCase()));
    setFilteredItems(filtered);
  };

  return (
    <div>
      <header className="header">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search..."
            value={searchValue}
            onChange={handleSearchInputChange}
          />
          <button type="submit">Search</button>
        </div>
        <a href="#" className="logo">Garden</a>
        {/* Rest of the code */}
      </header>
      <main>
        {filteredItems.length > 0 && (
          <div className="search-results">
            <h2>Search Results:</h2>
            <ul>
              {filteredItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}
        {/* Rest of the code */}
      </main>
      {/* Rest of the code */}
    </div>
  );
}

export default Home;
