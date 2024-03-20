import React from 'react';
import '../style/home.css';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <div className="header">
      <div className="nav-left">
        
        <h1>Artify</h1>
      </div>
      <div className="nav-right">
        <input type="text" placeholder="Search" className="search" />
        <Link to="/" className="tab">Home</Link>
            <Link to="/about" className="tab">About Us</Link>
            <Link to="/contact" className="tab">Contact</Link>
      </div>
    </div>
  );
}

export default Header;
