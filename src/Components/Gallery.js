import React, { useState } from 'react';
import './Gallery.css';

const Gallery = ({ images }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
  };

  const handleClose = () => {
    setSelectedImageIndex(null);
  };

  const showPreviousImage = (e) => {
    e.stopPropagation();
    setSelectedImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const showNextImage = (e) => {
    e.stopPropagation();
    setSelectedImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="photo-gallery">
      <div className="gallery-grid">
        {images.map((image, index) => (
          // eslint-disable-next-line 
          <img
            key={index}
            src={image}
            alt={`Gallery image ${index + 1}`}
            onClick={() => handleImageClick(index)}
            className="gallery-image"
          />
        ))}
      </div>
      {selectedImageIndex !== null && (
        <div className="modal" onClick={handleClose}>
          <span className="close" onClick={handleClose}>&times;</span>
          <span className="previous" onClick={showPreviousImage}>&#10094;</span>
          <img className="modal-content" src={images[selectedImageIndex]} alt="Selected" />
          <span className="next" onClick={showNextImage}>&#10095;</span>
        </div>
      )}
    </div>
  );
};

export default Gallery;