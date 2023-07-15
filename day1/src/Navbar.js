import React, { useState } from 'react';
import './Navbar.css';
const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav>
      <ul className="nav-menu">
        <li><a href="#">Home</a></li>
        <li>
          <a href="#" onClick={toggleDropdown}>Services</a>
          {isDropdownOpen && (
            <ul className="dropdown-menu">
              <li><a href="#">Web Design</a></li>
              <li><a href="#">Graphic Design</a></li>
              <li><a href="#">SEO</a></li>
            </ul>
          )}
        </li>
        <li><a href="#">Portfolio</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;