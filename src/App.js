import React, { useState } from 'react';
import './App.css';

import PortfolioPage from './Pages/PortfolioPage';
import Menu from './Components/Menu';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import MainPage from './Pages/MainPage';
import AboutPage from './Pages/AboutPage';

const App = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
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
      
      <Router>
          <Menu showMenu={showMenu} toggleMenu={toggleMenu} />
            <Routes>
                <Route path='/' element={<MainPage/>}/>
                <Route path='/home' element={<MainPage />}/>
                <Route path="/portfolio" element={<PortfolioPage />} />
                <Route path='/about' element={<AboutPage/>}/>
                
            </Routes>
        </Router>
    </div>
  );
};

export default App;
