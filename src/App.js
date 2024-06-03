import React, { useState } from 'react';
import './App.css';

import Tabs from './Components/Tabs';
import Menu from './Components/Menu';

const App = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const images = {
    'radio-1': [
      '../Img/Instagram/IMG_4682.jpg',
      '../Img/Instagram/IMG_4764.jpg',
      '../Img/Instagram/IMG_4769.jpg',
    ],
    'radio-2': [
      '../Img/Instagram/IMG_4772.jpg',
      '../Img/Instagram/IMG_4826.jpg',
    ],
    'radio-3': [
      '../Img/Instagram/IMG_4865.jpg',
      '../Img/Instagram/IMG_4952.jpg',
      '../Img/Instagram/IMG_4966.jpg',
    ],
  };

  return (
    <div className="App">
      <div id="navbar">
        <div className="nav-wrapper">
          <div className="brand">Mon portfolio</div>
          <div className="menu-button" onClick={toggleMenu}>
            <span />
          </div>
        </div>
      </div>
      <Menu showMenu={showMenu} toggleMenu={toggleMenu} />
      <h1>Photo Gallery</h1>
      <Tabs images={images} />
    </div>
  );
};

export default App;
