import React, { useState, useEffect } from 'react';
import './CookieBanner.css'; 

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [, setCookiesAccepted] = useState(localStorage.getItem('cookiesAccepted'));

  useEffect(() => {
    const storedCookiesAccepted = localStorage.getItem('cookiesAccepted');
    if (!storedCookiesAccepted) {
      setShowBanner(true);
    } else {
      setCookiesAccepted(storedCookiesAccepted === 'true');
    }
  }, []);

  const handleAcceptCookies = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setCookiesAccepted(true);
    setShowBanner(false);
  };

  const handleRejectCookies = () => {
    localStorage.setItem('cookiesAccepted', 'false');
    setCookiesAccepted(false);
    setShowBanner(false);
  };

  if (!showBanner) {
    return null;
  }

  return (
    <div className="cookie-banner">
      <div className="cookie-banner-content">
        <p>Nous utilisons des cookies pour améliorer votre expérience sur notre site. En poursuivant votre navigation, vous acceptez notre politique de cookies.</p>
        <div className="cookie-banner-buttons">
          <button onClick={handleAcceptCookies} className="cookie-banner-button">Accepter</button>
          <button onClick={handleRejectCookies} className="cookie-banner-button">Refuser</button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
