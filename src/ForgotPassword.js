import React from 'react';
import './Ecommerce.css';


function ForgotPassword() {
  return (
    <div className="login-page-background">
      <form className ="forget-form-container">
        <h1 className="form-header">
          Find Your Account
        </h1>
        <hr />
        <h2 className="form-subheader">
          Please enter your email address or mobile number to search for your account
        </h2>
        <input 
          className="input-field1" 
          type="text" 
          placeholder="Email address or phone number" 
          />
        <hr />
        <div className="button-container">
          <a className="cancel-button" href="/cancel">Cancel</a>
          <button className="search-button" type="submit">Search</button>
        </div>
      </form>
    </div>
  );
}

export default ForgotPassword;
