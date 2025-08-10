import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>About Us</h4>
          <p>Your one-stop shop for fashion, tech, and deals. Quality products, great prices.</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/mens">Men's</a></li>
            <li><a href="/womens">Women's</a></li>
            <li><a href="/watches">Watches</a></li>
            <li><a href="/footwear">Footwear</a></li>
            <li><a href="/cart">Cart</a></li>
            <li><a href="/checkout">Checkout</a></li>
            <li><a href="/login">Login</a></li>
            <li><a href="/register">Register</a></li>
            <li><a href="/profile">Profile</a></li>
            <li><a href="/deals">Deals</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact</h4>
          <p>Email: support@ecommerc.com</p>
          <p>Phone: +1 234 567 890</p>
        </div>
      </div>
      {/* Removed extra footer copyright line as requested */}
    </footer>
  );
};

export default Footer;
