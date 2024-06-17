import React from 'react';
import { IonIcon } from '@ionic/react';
import {  logoFacebook, logoInstagram, logoLinkedin} from 'ionicons/icons';
import {useNavigate} from "react-router-dom";
import './ContactPage.css';

const ContactPage = () => {
  const navigate = useNavigate()

  const goToPortfolioPage=()=>{
    navigate("/portfolio");
  }

  const openLink = (url) => {
    window.open(url, '_blank');
  }

  return (
    <section className="profile-card">
      <div className="box1 box">
        <div className="content">
          <div className="image">
            <img src="https://i.postimg.cc/bryMmCQB/profile-image.jpg" alt="Profile Image" />
          </div>
          <div className="level">
            <p>AMATEUR</p>
          </div>
          <div className="text">
            <p className="name">Quentin Fragnière</p>
            <p className="job_title">Photographe amateur</p>
            <p className="job_discription">Passionné par la photographie, je pratique principalement la photographie de paysages et la photographie sportive</p>
          </div>
          <div className="icons">
            <button>
              <IonIcon icon={logoInstagram} onClick={() => openLink('https://www.instagram.com/quentin_fra12')} />
            </button>
            <button>
              <IonIcon icon={logoLinkedin} onClick={()=> openLink('https://www.linkedin.com/in/quentin-fragni%C3%A8re-426842204/')} />
            </button>
            <button>
              <IonIcon icon={logoFacebook} onClick={()=>openLink('https://www.facebook.com/queque.fragn/')} />
            </button>
          </div>
          <div className="button">
            <div>
              <button className="connect" type="button" onClick={()=>goToPortfolioPage()}>PORTFOLIO</button>
            </div>
          </div>
          
        </div>
      </div>

    </section>
  );
};

export default ContactPage;
