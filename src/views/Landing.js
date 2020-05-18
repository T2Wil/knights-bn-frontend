import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/landingPage.scss';
import { useTranslation } from 'react-i18next';

const Landing = () => {
  const { t } = useTranslation();
  return (
    <div className="loginContainer">
      <div className="description">
        <h1>Barefoot Nomad</h1>
        <p>
          {t('slogan.1')}
        </p>
        <ul>
          <Link to="/signup" id="getStartedBtn">
            {t('GET STARTED NOW.1')}
          </Link>
        </ul>
      </div>
      <div className="imageSide">
        <img
          className="landingPageImage"
          src={require('../assets/images/frontend image.png')}
        />
      </div>
    </div>
  );
};

export default Landing;
