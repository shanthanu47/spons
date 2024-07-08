import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">TITLE AND LOGO</div>
      <nav>
        <ul>
          <li><a href="#">HOME</a></li>
          <li><a href="#">ABOUT</a></li>
          <li><a href="#">EVENTS</a></li>
          <li><a href="#">SPONSORS</a></li>
          <li><a href="#">CONTACT</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
