import React, { useEffect, useState } from 'react';
import './PaymentPage.css';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh');

const PaymentPage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [addressLine1, setAddressLine1] = useState('');
  const [addressLine2, setAddressLine2] = useState('');
  const [addressCity, setAddressCity] = useState('');
  const [addressState, setAddressState] = useState('');
  const [addressZip, setAddressZip] = useState('');
  const [addressCountry, setAddressCountry] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successToken, setSuccessToken] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const stripe = await stripePromise;
      const elements = stripe.elements();
      const cardElement = elements.getElement('card');

      const { token, error } = await stripe.createToken(cardElement, {
        name: `${firstName} ${lastName}`,
        address_line1: addressLine1,
        address_line2: addressLine2,
        address_city: addressCity,
        address_state: addressState,
        address_zip: addressZip,
        address_country: addressCountry,
      });

      if (error) {
        setErrorMessage(error.message);
        setSuccessToken('');
      } else {
        setErrorMessage('');
        setSuccessToken(token.id);

        // In a real integration, you'd submit the form with the token to your backend server
        // form.querySelector('input[name="token"]').setAttribute('value', token.id);
        // form.submit();
      }
    } catch (err) {
      console.error('Error:', err);
    }
  };

  useEffect(() => {
    const stripe = stripePromise.then((res) => res);
    const elements = stripe.elements();

    const card = elements.create('card', {
      hidePostalCode: true,
      style: {
        base: {
          iconColor: '#666EE8',
          color: '#31325F',
          lineHeight: '40px',
          fontWeight: 300,
          fontFamily: 'Helvetica Neue',
          fontSize: '15px',
          '::placeholder': {
            color: '#CFD7E0',
          },
        },
      },
    });

    card.mount('#card-element');

    card.on('change', (event) => {
      if (event.error) {
        setErrorMessage(event.error.message);
        setSuccessToken('');
      } else {
        setErrorMessage('');
      }
    });
  }, []);

  return (
    <div className="payment-page-container">
      <form onSubmit={handleSubmit}>
        <div className="group">
          <label>
            <span>Card</span>
            <div id="card-element" className="field"></div>
          </label>
        </div>
        <div className="group">
          <label>
            <span>First name</span>
            <input
              id="first-name"
              name="first-name"
              className="field"
              placeholder="Manoj"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </label>
          <label>
            <span>Last name</span>
            <input
              id="last-name"
              name="last-name"
              className="field"
              placeholder="Halugona"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </label>
        </div>
        <div className="group">
          <label>
            <span>Address</span>
            <input
              id="address-line1"
              name="address_line1"
              className="field"
              placeholder="77 Winchester Lane"
              value={addressLine1}
              onChange={(e) => setAddressLine1(e.target.value)}
            />
          </label>
          <label>
            <span>Address (cont.)</span>
            <input
              id="address-line2"
              name="address_line2"
              className="field"
              placeholder=""
              value={addressLine2}
              onChange={(e) => setAddressLine2(e.target.value)}
            />
          </label>
          <label>
            <span>City</span>
            <input
              id="address-city"
              name="address_city"
              className="field"
              placeholder="Coachella"
              value={addressCity}
              onChange={(e) => setAddressCity(e.target.value)}
            />
          </label>
          <label>
            <span>State</span>
            <input
              id="address-state"
              name="address_state"
              className="field"
              placeholder="SA"
              value={addressState}
              onChange={(e) => setAddressState(e.target.value)}
            />
          </label>
          <label>
            <span>ZIP</span>
            <input
              id="address-zip"
              name="address_zip"
              className="field"
              placeholder="92236"
              value={addressZip}
              onChange={(e) => setAddressZip(e.target.value)}
            />
          </label>
          <label>
            <span>Country</span>
            <select
              name="address_country"
              id="address-country"
              className="field"
              value={addressCountry}
              onChange={(e) => setAddressCountry(e.target.value)}
            >
              <option value="IN">India</option>
              <option value="SG">Singapore</option>
            </select>
          </label>
        </div>
        <button type="submit">Pay $25</button>
        <div className="outcome">
          <div className={`error ${errorMessage ? 'visible' : ''}`}>{errorMessage}</div>
          <div className={`success ${successToken ? 'visible' : ''}`}>
            Success! Your Stripe token is <span className="token">{successToken}</span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PaymentPage;
