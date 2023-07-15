import React, { useState } from 'react';
import './DropdownMenu.css'; // Import the CSS file

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    console.log(`Selected item: ${item}`);
    // Perform any action you want based on the selected item
  };

  return (
    <div className="dropdown-container">
      <input
        type="text"
        className="search-bar"
        placeholder="Search"
        onClick={(e) => e.stopPropagation()}
      />
      <button onClick={toggleDropdown} className="dropdown-button">
         Dropdown
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          <li onClick={() => handleItemClick('Option 1')} className="dropdown-item">
            Option 1
          </li>
          <li onClick={() => handleItemClick('Option 2')} className="dropdown-item">
            Option 2
          </li>
          <li onClick={() => handleItemClick('Option 3')} className="dropdown-item">
            Option 3
          </li>
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;