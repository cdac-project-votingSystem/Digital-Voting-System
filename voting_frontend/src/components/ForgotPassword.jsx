import React, { useState } from "react";
import { Link } from "react-router-dom"; 
import Header from "./Header";
import "./ForgotPassword.css"; 

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Password reset email sent to:", email);
    alert("If this email exists, you will receive a reset link.");
  };

  return (
    <div className="forgot-password-page">
      <Header />
      <div className="forgot-password-container">
        <h1>Forgot Password?</h1>
        <p>Enter your email to receive a password reset link.</p>
        <form onSubmit={handleSubmit} className="forgot-password-form">
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              placeholder="Enter your email"
              required
            />
          </div>
          <button type="submit" className="reset-button">
            Send Reset Link
          </button>
        </form>
        <div className="back-to-login">
          <Link to="/login">Back to Login</Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
