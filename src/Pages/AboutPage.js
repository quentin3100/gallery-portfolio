import React from 'react';
import './AboutPage.css'; 

const gearList = [
  {
    name: 'Canon eos 700d',
    
    image: '../Img/Materiel/700d.png',
    description: 'Appareil photo canon EOS 700d',
  },
  {
    name: 'Sigma 18-35mm',
    image: '../Img/Materiel/sigma.png',
    description: 'Objectif Sigma à ouverture constante f2.8 utilisé pour la photo de paysage et en basse luminosité',
  },
  {
    name: 'Tamron 18-270mm',
    image: '../Img/Materiel/tamron.png',
    description: 'Objectif Tamron polyvalent autant pour la photo de paysage que pour la photo sportive',
  },
];

const AboutMe = () => {
  return (
    <div className="about-me">
      <h2>À propos de moi</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod rutrum tellus, a fringilla nulla cursus id.
        Fusce nec ex eget felis laoreet pharetra. Vivamus interdum magna vel urna maximus, sed volutpat libero ultrices.
        Phasellus in odio eu magna feugiat eleifend. Nulla convallis congue libero, vel fringilla nulla dictum sit amet.
        Maecenas consectetur felis sed augue dapibus ultricies. Morbi accumsan massa in velit facilisis fermentum.
      </p>
    </div>
  );
};

const GearItem = ({ name, image, description }) => {
  return (
    <div className="gear-item">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
};

const GearList = () => {
  return (
    <div className="gear-list">
      <h2>Mon équipement photo</h2>
      <div className="gear-items">
        {gearList.map((gear, index) => (
          <GearItem key={index} name={gear.name} image={gear.image} description={gear.description} />
        ))}
      </div>
    </div>
  );
};

const AboutPage = () => {
  return (
    <div className="app">
      <h1>Ma page photo</h1>
      <AboutMe />
      <GearList />
    </div>
  );
};

export default AboutPage;
