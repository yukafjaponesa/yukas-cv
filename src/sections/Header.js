import React from 'react';
import './styles.css';
import picture1 from './CROPPED-yukafukuzawa.jpg';

function Header() {
  return (
    <div className="section-container">
      <div className="header-column">
        <div>
          <h2>Yuka Börner</h2>
          <p className="birthday">Date of birth 18.03.1993</p>
          <p >in Nagano, Japan</p>
          <p>Rhinstr.7, 10315 Berlin</p>
        </div>

        <img id='profile-pic' src={picture1} alt='profile-pic' />
      </div>
    </div>
  )
}

export default Header
