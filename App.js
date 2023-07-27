import React, { useState } from "react";
import './assets/css/App.css';
import Login  from "./Login";
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Admin from "./Admin";
import Navbar from "./Navbar";
import Home from "./home";
import ProductPage from "./ProductPage";
import Plants from './Plants';
import CustomProductPage from './seeds';
import Fertilizers from './Fertilizers';
import Gardendecor from './Gardendecor';
import About from "./About";
import profile from "./profile";
import OfferPage from "./OfferPage";
import ProfilePage from "./ProfilePage";
import Feed from "./Feed";
import CustomSeedsPage from "./pesticide";
import CartPage from "./CartPage";
import Feedback from "./Feedback";
import ProductsList from "./ProductsList";
import Button from "./Button";
import AddProductForm from "./AddProductForm";
import UpdateProductForm from "./UpdateProductForm";
import DeleteProduct from "./DeleteProduct";
//import FeedbackDisplayPage from "./FeedbackDisplayPage ";
import UserFeed from "./UserFeed";
import PaymentPage from "./PaymentPage";


function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }
  

  return (
      <div className="App">
    <Router>
      <Routes>
        <Route exact path="/" element={<Login/>}></Route>
       
        <Route exact path="/Login" element={<Login/>}></Route>
        <Route exact path="/Navbar" element={<Navbar/>}></Route>
        <Route exact path="/ProductPage" element={<ProductPage/>}></Route>
        <Route exact path="/Plants" element={<Plants/>}></Route>
        <Route exact path="/seeds" element={<CustomProductPage/>}></Route>
        <Route exact path="/Fertilizers" element={<Fertilizers/>}></Route>
        <Route exact path="/pesticide" element={<CustomSeedsPage  />}></Route>
        <Route exact path="/Gardendecor" element={<Gardendecor/>}></Route>
        <Route exact path="/About" element={<About/>}></Route>
        <Route exact path="/profile" element={<profile/>}></Route> 
        <Route exact path="/OfferPage" element={<OfferPage/>}></Route> 
        <Route exact path="/ProfilePage" element={<ProfilePage/>}></Route> 
        <Route exact path="/Admin" element={<Admin/>}></Route> 
        <Route exact path="/Feed" element={<Feed/>}></Route> 
        <Route exact path="/ProductsList" element={<ProductsList/>}></Route> 
        <Route exact path="/Button" element={<Button/>}></Route> 
        <Route exact path="/home" element={<Home/>}></Route>    
       <Route exact path="/CartPage" element={<CartPage/>}></Route>
       <Route exact path="/Feedback" element={<Feedback/>}></Route>
       <Route exact path="/AddProductForm" element={<AddProductForm/>}></Route>
       <Route exact path="/UpdateProductForm" element={<UpdateProductForm/>}></Route>
       <Route exact path="/DeleteProduct" element={<DeleteProduct/>}></Route>

       <Route exact path="/UserFeed" element={<UserFeed/>}></Route>
       
   
    </Routes>
      </Router>
      
    </div>
  );
}

export default App;