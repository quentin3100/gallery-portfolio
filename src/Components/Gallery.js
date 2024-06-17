import React, { useState, useEffect } from 'react';
import EXIF from 'exif-js';
import './Gallery.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faAdjust, faEye, faStopwatch } from '@fortawesome/free-solid-svg-icons';

const Gallery = ({ images }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [exifData, setExifData] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedImageIndex !== null) {
        if (e.key === 'ArrowLeft') {
          showPreviousImage(e);
        } else if (e.key === 'ArrowRight') {
          showNextImage(e);
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedImageIndex]);

  useEffect(() => {
    if (selectedImageIndex !== null) {
      fetchExifData(selectedImageIndex);
    }
  }, [selectedImageIndex]);

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
  };

  const handleClose = () => {
    setSelectedImageIndex(null);
    setExifData(null);
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

  const fetchExifData = (index) => {
    if (!images[index]) {
      console.error("Invalid image URL:", images[index]);
      return;
    }
  
    const img = new Image();
    img.onload = function() {
      EXIF.getData(img, function() {
        const exifData = EXIF.getAllTags(this);
        setExifData(exifData);
      });
    };
    img.src = images[index];
  };

  const getFormattedExifData = () => {
    if (!exifData) return null;

    return {
      Camera: exifData.Model,
      Aperture: `f/${exifData.FNumber.toFixed(1)}`,
      ISO: exifData.ISOSpeedRatings,
      ShutterSpeed: `1/${Math.round(1 / exifData.ExposureTime)}s`
    };
  };

  return (
    <div className="photo-gallery">
      <div className="gallery-grid">
        {images.map((image, index) => (
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
          <div className="exif-data">
            {getFormattedExifData() && (
              <ul>
                {Object.entries(getFormattedExifData()).map(([key, value]) => (
                  <li key={key}>
                    <FontAwesomeIcon icon={key === "Camera" ? faCamera : key === "Aperture" ? faAdjust : key === "ISO" ? faEye : faStopwatch} />
                     {value}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
