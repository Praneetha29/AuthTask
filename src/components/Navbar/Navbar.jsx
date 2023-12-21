import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots, faBell, faUser } from '@fortawesome/free-regular-svg-icons';
import './Navbar.css';
import navlogo from './navlogo.png';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={navlogo} alt="Logo" />
      </div>

      <div className={`icons ${isMenuOpen ? 'open' : ''}`}>
        <FontAwesomeIcon icon={faCommentDots} className="icon" />
        <FontAwesomeIcon icon={faBell} className="icon" />
        <FontAwesomeIcon icon={faUser} className="icon" />
      </div>

      <div className="menu-toggle" onClick={toggleMenu}>
        ☰
      </div>
    </nav>
  );
};

export default Navbar;
