import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo Section */}
        <div className="navbar-logo">
          <div className="logo-icon">
            <span className="airtel-logo">airtel</span>
          </div>
          <span className="logo-tagline">Recharge</span>
        </div>

        {/* Desktop Navigation Links */}
        <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="navbar-item">
            <a href="#home" className="navbar-link active">Home</a>
          </li>
          <li className="navbar-item">
            <a href="#prepaid" className="navbar-link">Prepaid</a>
          </li>
          <li className="navbar-item">
            <a href="#postpaid" className="navbar-link">Postpaid</a>
          </li>
          <li className="navbar-item">
            <a href="#dth" className="navbar-link">DTH</a>
          </li>
          <li className="navbar-item">
            <a href="#broadband" className="navbar-link">Broadband</a>
          </li>
          <li className="navbar-item">
            <a href="#offers" className="navbar-link">
              <span className="offer-badge">Hot</span>
              Offers
            </a>
          </li>
        </ul>

        {/* Action Buttons */}
        <div className="navbar-actions">
          <button className="btn-track">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.35-4.35"></path>
            </svg>
            Track Order
          </button>
          <button className="btn-login">Login</button>
          <button className="btn-signup">Sign Up</button>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="navbar-toggle" onClick={toggleMenu} aria-label="Toggle navigation">
          <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
