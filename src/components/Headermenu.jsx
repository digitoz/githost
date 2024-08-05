import React, { useState } from 'react';
import './Headermenu.css';

function Headermenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="App">
      <header className="Header">
        <div className="Logo">MyLogo</div>
        <button className="MenuToggle" onClick={toggleMenu}>
          ☰
        </button>
        <nav className={`NavMenu ${isMenuOpen ? 'open' : ''}`}>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Headermenu;
