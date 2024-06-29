// src/components/Header.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../assets/Portfolio_logo.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="logo-container">
        <Link to="/"><img src={logo} className="main-logo"/></Link>
      </div>
      <nav className={`nav ${isOpen ? 'open' : ''}`}>
        <ul>
          <li><Link to="/About" onClick={toggleMenu}>About Me</Link></li>
          <li><Link to="/resume" onClick={toggleMenu}>Resume</Link></li>
          <li><Link to="/projects" onClick={toggleMenu}>Projects</Link></li>
          <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
        </ul>
      </nav>
      <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </header>
  );
};

export default Header;
