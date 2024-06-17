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
  {
    name: 'Gorillapod',
    image: '../Img/Materiel/gorillapod.png',
    description: 'Petit trépied polyvalent et transportable pour les prise de vues dans terrains accidentés',
  },
  {
    name: 'Adobe lightroom',
    image: '../Img/Materiel/lightroom.png',
    description: 'Logiciel photo pour le traitement des images',
  },
  {
    name: 'Filtre polarisant',
    image: '../Img/Materiel/polarisant.png',
    description: 'Utilisé pour la polarisation des rayons UV',
  },
];

const AboutMe = () => {
  return (
    <div className="about-me">
      <h2>À propos de moi</h2>
      <p>
        Je suis un jeune photographe passionné pratiquant majoritairement la photo de paysage ainsi que la photo sportive. Passionné par la nature de mon plus jeune âge, je m'efforce de capturer les moments éphémères et les paysages somptueux que la vie tend à nous offrir.
      </p>
      <hr />
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


const Interest = () => {
  return (
    <div className="about-me">
      <h2>Centres d'intérêt</h2>
    
      <ul>
        <li>Paysages</li>
        <li>Photographie animalière</li>
        <li>Photographie sportive</li>
        <li>Faune et flore</li>
        <li>Phénomènes météorologiques</li>
      </ul>
   
    </div>
  );
};

const AboutPage = () => {
  return (
    <div className="app">
      <h1>Mon matériel photo</h1>
      <AboutMe />
      <GearList />
      <Interest/>
    </div>
  );
};

export default AboutPage;
