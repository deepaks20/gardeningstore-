import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './assets/css/Admin.css';

const Login = () => {
  const [isSignUpMode, setIsSignUpMode] = useState(false);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    setIsFormValid(validateEmail(email) && password.length >= 6);
  }, [email, password]);

  const toggleMode = () => {
    setIsSignUpMode(!isSignUpMode);
    setEmail('');
    setEmailError('');
    setPassword('');
    setPasswordError('');
    setIsFormValid(false);
  };

  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
    setEmailError(validateEmail(newEmail) ? '' : 'Please enter a valid email address.');
  };

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
    setPasswordError(newPassword.length >= 6 ? '' : 'Password must be at least 6 characters long.');
  };

  const history = useNavigate(); // Initialize useNavigate

  const handleSubmit = (event) => {
    event.preventDefault();
    const data={
      email: email,
      password: password
    };
     axios.post('http://127.0.0.1:8080/addDetails',data);
    const isEmailValid = validateEmail(email);
    const isPasswordValid = password.length >= 6;

    setEmailError(isEmailValid ? '' : 'Please enter a valid email address.');
    setPasswordError(isPasswordValid ? '' : 'Password must be at least 6 characters long.');

    if (isEmailValid && isPasswordValid) {
      // Perform form submission logic here
      console.log('Form submitted!');
      // Navigate to the other page upon successful login
      history('/home'); // Use useNavigate to navigate
    }
  };

  const validateEmail = (email) => {
    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div className="rvs">
    <div className={`container ${isSignUpMode ? 'sign-up-mode' : ''}`}>
   
      <div className="forms-container">
        <div className="signin-signup">
          <form onSubmit={handleSubmit} className="sign-in-form">
            <h2 className="title">Sign in</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input
                type="text"
                placeholder="Username"
                required
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            {emailError && <p className="error">{emailError}</p>}
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input
                type="password"
                placeholder="Password"
                required
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
            {passwordError && <p className="error">{passwordError}</p>}
         <Link to="/Button" > <input
              type="submit"
              value="Login"
              className={`btn solid ${isFormValid ? '' : 'disabled'}`}
              disabled={!isFormValid}
            /></Link>
          </form>
          <form className="sign-up-form">
            <h2 className="title">Sign up</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Username" required />
            </div>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input type="email" placeholder="Email" required />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" required />
            </div>
            <input type="submit" className="btn" value="Sign up" />
          </form>
        </div>
      </div>
      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here?</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Debitis, ex ratione. Aliquid!
            </p>
            <button className="btn transparent" onClick={toggleMode}>
              Sign up
            </button>
          </div>
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>One of us?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              laboriosam ad deleniti.
            </p>
            <button className="btn transparent" onClick={toggleMode}>
              Sign in
            </button>
          </div>
          <img src="img/register.svg" className="image" alt="" />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Login;
