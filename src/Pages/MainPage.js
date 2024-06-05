import React, { useEffect } from 'react';

import './MainPage.css'; 

const MainPage = () => {
  useEffect(() => {
    // Handle parallax effect
    const handleScroll = () => {
      const bigImage = document.querySelector('.page-header[data-parallax="true"]');
      if (bigImage) {
        const oVal = (window.scrollY / 3);
        bigImage.style.transform = `translate3d(0, ${oVal}px, 0)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handlePortfolioButtonClick = () => {
    window.location.href = '/portfolio'; 
  };

  const handleAboutButtonClick = () => {
    window.location.href = '/about'; 
  };

  return (
    <div className="wrapper">
      <div className="page-header section-dark" style={{ backgroundImage: "url('http://demos.creative-tim.com/paper-kit-2/assets/img/antoine-barres.jpg')" }} data-parallax="true">
        <div className="filter"></div>
        <div className="content-center">
          <div className="container">
            <div className="title-brand">
              <h1 className="presentation-title">PORTFOLIO</h1>
              <div className="fog-low">
                <img src="http://demos.creative-tim.com/paper-kit-2/assets/img/fog-low.png" alt="fog" />
              </div>
              <div className="fog-low right">
                <img src="http://demos.creative-tim.com/paper-kit-2/assets/img/fog-low.png" alt="fog" />
              </div>
            </div>
            <h2 className="presentation-subtitle text-center">BIENVENUE SUR LE PORTFOLIO</h2>
            <div className='Button-page'>
            <button type='button' className='styled-button' onClick={handlePortfolioButtonClick}>PORTFOLIO</button>
            <button type='button' className='styled-button' onClick={handleAboutButtonClick}>A PROPOS</button>
            </div>
          </div>
        </div>
        <div className="moving-clouds" style={{ backgroundImage: "url('http://demos.creative-tim.com/paper-kit-2/assets/img/clouds.png')" }}></div>
      </div>
    </div>
  );
};

export default MainPage;
