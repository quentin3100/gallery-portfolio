import React, { useState } from 'react';
import './Navbar.css';


const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

const Navbar = ({ toggleMenu }) => {
  return (
    <div id="navbar">
      <div className="nav-wrapper">
        <div className="brand">Mon portfolio</div>
        <div className="menu-button" onClick={toggleMenu}>
          <span />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
