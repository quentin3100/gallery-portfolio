import React from 'react';
import Tabs from '../Components/Tabs';


const PortfolioPage = () => {
  const images = {
    'radio-1': [
      
    ],
    'radio-2': [
      '../Img/Instagram/IMG_4772.jpg',
      '../Img/Instagram/IMG_4826.jpg',
      '../Img/Instagram/IMG_4682.jpg',
      '../Img/Instagram/IMG_4764.jpg',
      '../Img/Instagram/IMG_4769.jpg',
      '../Img/Instagram/IMG_4865.jpg',
      '../Img/Instagram/IMG_4952.jpg',
      '../Img/Instagram/IMG_4966.jpg',

    ],
    'radio-3': [
      
    ],
    'radio-4': [
      
    ],
  };

  return (
    <div>
      <h1>Photo Gallery</h1>
      <Tabs images={images} />
    </div>
  );
};

export default PortfolioPage;
