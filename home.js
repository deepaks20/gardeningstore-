import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './assets/css/home.css';
import '@mdi/font/css/materialdesignicons.min.css';

function Home() {
  const dropdownSections = [
    {
      name: 'Tools',
      subcategories: ['Hand Tools', 'Power Tools', 'Gardening Gloves'],
    },
    {
      name: 'Equipment',
      subcategories: ['Lawn Mowers', 'Pruning Shears', 'Watering Cans'],
    },
    {
      name: 'Plants',
      subcategories: ['Flowering Plants', 'Indoor Plants', 'Herbs'],
    },
    {
      name: 'Seeds',
      subcategories: ['Flower Seeds', 'Vegetable Seeds', 'Grass Seeds'],
    },
    {
      name: 'Fertilizers',
      subcategories: ['Organic Fertilizers', 'Chemical Fertilizers', 'Compost'],
    },
    {
      name: 'Pesticides',
      subcategories: ['Insecticides', 'Herbicides', 'Fungicides'],
    },
    {
      name: 'Feedback',
      subcategories: ['Insecticides', 'Herbicides', 'Fungicides'],
    },
    {
      name: 'Garden Decor',
      subcategories: ['Statues', 'Outdoor Lighting', 'Bird Baths'],
    },
    {
      name: 'Feedback',
      subcategories: ['Super offers', 'Bank offers'],
    },
  ];

  const [searchValue, setSearchValue] = useState('');
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleSearchInputChange = (event) => {
    const value = event.target.value;
    setSearchValue(value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Perform search logic
    const filteredItems = dropdownSections.filter((section) => {
      const matchedCategory = section.name.toLowerCase().includes(searchValue.toLowerCase());
      const matchedSubcategories = section.subcategories.some((subcategory) =>
        subcategory.toLowerCase().includes(searchValue.toLowerCase())
      );
      return matchedCategory || matchedSubcategories;
    });
    setFilteredItems(filteredItems);
    setSearchValue('');
  };

  

  return (
    <div>
      <div className='head'>
        <h2><center>Green House</center></h2>
      </div>

      <div className='prof'>
        <Link to="/CartPage"> <a href="#"><i className="mdi mdi-cart"></i></a>{' '}{' '}</Link>
        <Link to='/ProfilePage'><i className="mdi mdi-account"></i>{' '}</Link>
        <Link to="/"><a href="#"><i className="mdi mdi-logout"></i></a></Link>
      </div>

      <header className="header">
        <nav role="navigation">
          <div id="menuToggle">
            <input type="checkbox" />
            <span></span>
            <span></span>
            <span></span>
            <ul id="menu">
              <a href="#"><li>Home</li></a>
              <Link to='/About'> <a href="#"><li>About</li></a></Link>
              <a href="#"><li>Info</li></a>
              <a href="#"><li>Contact</li></a>
              <a href="https://www.allthatgrows.in/blogs/posts/gardening-tips-for-beginners" target="_blank"><li>Gardening Tips</li></a>
            </ul>
          </div>
        </nav>
        <form onSubmit={handleSearchSubmit}>
          <div className="form-group">
            <input
              type="text"
              placeholder="Search"
              value={searchValue}
              onChange={handleSearchInputChange}
            />
            <button type="submit">Search</button>
          </div>
        </form>
        <a href="#" className="logo"></a>
        <nav className="nav-items">
          <Link to='/ProductPage'><a href="#">Tools</a></Link>
          <Link to='/Plants'>Plants</Link>
          <Link to='/seeds'>Seeds</Link>
          <Link to='/Fertilizers'>Fertilizers</Link>
          <Link to='/Pesticide'>Pesticides</Link>
          <Link to='/Feedback'>Feedback</Link>
          <Link to='/Gardendecor'>Garden Decor</Link>
          <Link to='/Feed'>Review</Link>
        </nav>
      </header>
      <main>
        {filteredItems.length > 0 && (
          <div className="search-results">
            <h2>Search Results:</h2>
            <ul>
              {filteredItems.map((item, index) => (
                <li key={index}>{item.name}</li>
              ))}
            </ul>
          </div>
        )}
        <div className="intro">
          <h1>Nature's Haven: Cultivating Beauty and Serenity</h1>
          <p>Floral Haven</p>
        </div>
        <div className="achievements">
          <div className="work">
            <i className="fas fa-atom"></i>
            <p className="work-heading">Wide Selection of Plants</p>
            <p className="work-text"> A gardening store should provide a diverse range of plants, including flowers, vegetables, herbs, shrubs, trees, and indoor plants. The store can offer different varieties, sizes, and seasonal options to cater to various customer preferences.</p>
          </div>
          <div className="work">
            <i className="fas fa-skiing"></i>
            <p className="work-heading">Discounts</p>
            <p className="work-text">Offering loyalty programs or membership benefits, as well as periodic discounts or promotions, can help build customer loyalty and encourage repeat business.</p>
          </div>
          <div className="work">
            <i className="fas fa-ethernet"></i>
            <p className="work-heading">Inspiration and Ideas</p>
            <p className="work-text"> Providing customers with inspiration and ideas for their gardens through displays, demo gardens, or catalogues can help them envision their own garden designs and encourage them to explore different plant options and combinations.</p>
          </div>
        </div>
        <div className="about-me">
          
          <img src="https://www.ugaoo.com/cdn/shop/files/DECOR.jpg?v=1686403513&width=2200" />
          
        </div>
      </main>
      <footer className="footer">
  <div className="footer-links">
    <div className='rowCol'>
    <div className='about'>
    <a>About</a></div>
    </div>
    <div className='about-det'>History</div>
    <div className='about-det1'>Awards</div><br></br>
    <div className='rowCol'>
    <div className='contact'>
    <a>Contact</a></div>
    <div className='contact-det'>Fax: +1(555)123-4567</div>
    <div className='contact-det1'>Whatsapp: 6384318848</div><br></br>
    
    <div className='follow'>
    <a>Follow us</a></div>
    </div>
    <div className='instaIcon'>
    <a href="https://www.instagram.com/"><i className="mdi mdi-instagram"></i></a>
    </div>
    <div className='fbIcon'><a href="https://www.facebook.com/deepak.sidhardh"><i className="mdi mdi-facebook"></i></a>
  </div>
  </div>
  
  <div className="footer-info">
  <div className='rowCol'>
    <p>&copy; 2023 Gardening Store. All rights reserved.</p>
  </div>
  </div>
</footer>
    </div>
  );
}

export default Home;