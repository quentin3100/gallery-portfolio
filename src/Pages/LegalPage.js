import React from 'react';
import './LegalPage.css';

const LegalPage = () => {
  return (
    <div className="legal-container">
      <h1>Mentions Légales</h1>

      <h2>Politique des Cookies</h2>
      <p>
        Notre site utilise des cookies pour améliorer votre expérience utilisateur. Les cookies sont de petits fichiers texte qui sont stockés sur votre appareil lorsque vous visitez notre site. Ils nous aident à :
      </p>
      <ul>
        <li>Analyser le trafic et les comportements des utilisateurs</li>
        <li>Personnaliser le contenu et les publicités</li>
        <li>Fournir des fonctionnalités de réseaux sociaux</li>
      </ul>
      <p>
        En utilisant notre site, vous acceptez l'utilisation de cookies conformément à cette politique. Vous pouvez à tout moment refuser ou supprimer les cookies en modifiant les paramètres de votre navigateur.
      </p>

      <h2>Copyright</h2>
      <p>
        Le contenu de ce site, y compris mais sans s'y limiter, les textes, les graphiques, les images, les vidéos et les logos, est la propriété de Fragnière Quentin et est protégé par les lois sur le droit d'auteur. Toute reproduction, distribution, modification ou utilisation du contenu de ce site sans autorisation écrite préalable est strictement interdite.
      </p>
    </div>
  );
};

export default LegalPage;
