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
import ContactPage from './Pages/ContactPage';
import LegalPage from './Pages/LegalPage';
import NavBar from './Components/NavBar';
import GoUp from './Components/GoUp';
import CookieBanner from './Components/CookieBanner';


const App = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  

  return (
    
    <div className="App">
      <GoUp/>
     <NavBar toggleMenu={toggleMenu}/>
      
      <Router>
          <Menu showMenu={showMenu} toggleMenu={toggleMenu} />
            <Routes>
                <Route path='/' element={<MainPage/>}/>
                <Route path='/home' element={<MainPage />}/>
                <Route path="/portfolio" element={<PortfolioPage />} />
                <Route path='/about' element={<AboutPage/>}/>
                <Route path='/contact' element={<ContactPage/>}/>
                <Route path='/legal' element={<LegalPage />} />
            </Routes>
        </Router>
        <CookieBanner />
    </div>
  );
};

export default App;
