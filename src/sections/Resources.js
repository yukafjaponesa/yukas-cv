import React from 'react';
import './styles.css';

function Resources() {
  return (
    <div className="section-container">
      <div className="contact-div">
        <p className="contact-title">Resources</p>

        <div className="all-resouces">
          <div>
            <i className="fab fa-linkedin"></i>
            <a href ="https://www.linkedin.com/in/yuka-fukuzawa-b3a663157/" target="_blank">LinkedIn</a>
          </div>

          <div>
            <i className="fab fa-github"></i>
            <a href="https://github.com/yukafjaponesa" target="_blank">Github</a>
          </div>

          <div>
            <i className="fab fa-product-hunt"></i>
            <a href="https://wonderful-bhaskara-332906.netlify.app" target="_blank">Portfolio</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resources
