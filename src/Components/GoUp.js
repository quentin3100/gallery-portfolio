import React, { useState, useEffect } from 'react';
import './GoUp.css';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const GoUp = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 0) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className={`go-up ${isVisible ? 'visible' : ''}`} onClick={scrollToTop}>
      <ArrowUpwardIcon />
    </div>
  );
};

export default GoUp;
