import React, { useState } from 'react';
import Gallery from './Gallery'; 
import './Tabs.css'; 

const Tabs = ({ images }) => {
  const [activeTab, setActiveTab] = useState('radio-1');

  return (
    <div>
      <div className="container">
        <div className="tabs">
          <input
            type="radio"
            id="radio-1"
            name="tabs"
            checked={activeTab === 'radio-1'}
            onChange={() => setActiveTab('radio-1')}
          />
          <label className="tab" htmlFor="radio-1">
            Paysages
          </label>
          
          <input
            type="radio"
            id="radio-2"
            name="tabs"
            checked={activeTab === 'radio-2'}
            onChange={() => setActiveTab('radio-2')}
          />
          <label className="tab" htmlFor="radio-2">Sport</label>
          
          <input
            type="radio"
            id="radio-3"
            name="tabs"
            checked={activeTab === 'radio-3'}
            onChange={() => setActiveTab('radio-3')}
          />
          <label className="tab" htmlFor="radio-3">Perso</label>
          
          <span className="glider" />
        </div>
      </div>
      <Gallery images={images[activeTab]} /> 
    </div>
  );
};

export default Tabs;
