import React from 'react';
import './styles.css';
import '../css/all.min.css';

function Contact() {
  return (
    <div className="section-container">
      <div className="contact-div">
        <i className="contact-title" className="fas fa-mobile-alt"></i>
        <p className="with-icon">015120218393</p>
      </div>

      <div className="contact-div">
        <i className="contact-title" className="far fa-envelope-open"></i>
        <p className="with-icon">yfukuzawa318@gmail.com</p>
      </div>

      <div className="contact-div">
        <p className="contact-title">Martial status</p>
        <p id="married" className="married-nation">Married</p>
      </div>

      <div className="contact-div">
        <p className="contact-title">Nationality</p>
        <p className="married-nation">Japanese</p>
      </div>
    </div>
  )
}

export default Contact
