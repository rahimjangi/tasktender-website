import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"; // Make sure to create a corresponding CSS file for styling

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">TaskTender</Link>
      </div>
      <nav className="navigation">
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        {/* Include other navigation links here */}
      </nav>
      <div className="auth-links">
        <Link to="/login">Log In</Link>
        <Link to="/signup" className="signup-button">
          Sign Up
        </Link>
      </div>
    </header>
  );
};

export default Header;
