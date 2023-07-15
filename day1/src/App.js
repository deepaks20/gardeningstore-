import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';
import Login  from "./Login";
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import CartPage from "./CartPage";
import Navbar from "./Navbar";
import home from "./home";
import ProductPage from "./ProductPage";
import Plants from './Plants';
import seeds from './seeds';
import Fertilizers from './Fertilizers';
import pesticide from './pesticide';
import gardendecor from './gardendecor';





function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
      <div className="App">
    <Router>
      <Switch>
        <Route exact path="/" component={Login}></Route>
       
        <Route exact path="/Login" component={Login}></Route>
        <Route exact path="/Navbar" component={Navbar}></Route>
        <Route exact path="/ProductPage" component={ProductPage}></Route>
        <Route exact path="/Plants" component={Plants}></Route>
        <Route exact path="/seeds" component={seeds}></Route>
        <Route exact path="/Fertilizers" component={Fertilizers}></Route>
        <Route exact path="/pesticide" component={pesticide}></Route>
        <Route exact path="/gardendecor" component={gardendecor}></Route>
        <Route exact path="/CartPage" component={CartPage}></Route>
       
              
         <Route exact path="/home" component={home}></Route>
    </Switch>
      </Router>
      
    </div>
  );
}

export default App;