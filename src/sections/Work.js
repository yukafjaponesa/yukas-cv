import React from 'react';
import './styles.css';

function Work() {
  return (
    <div className="section-container">
      <h3>Work Experience</h3>

      <div className="each-item">
        <div className="description-up">
          <p><u>Kitchen chef</u></p>
          <p><i>02/2019 - 09/2019</i></p>
          <div className="map-point">
            <i className="fas fa-map-marker-alt"></i>
            <p className="with-icon">MyPoke / Copenhagen, Denmark</p>
          </div> {/*end of map-point*/}
        </div> {/*end of description-up*/}
        <div className="description">
          <p>Worked as a kitchen chef at a Hawaiian Poke Bowl restaurant. Served customers as a cashier too.</p>
        </div> {/*end of description*/}
      </div> {/*end of each-item*/}

      <hr></hr>
      <div className="each-item">
        <div className="description-up">
          <p><u>Customer support</u></p>
          <p><i>05/2017 -05/2018</i></p>
          <div className="map-point">
            <i className="fas fa-map-marker-alt"></i>
            <p className="with-icon">Aegis BPO / Selangor, Malaysia</p>
          </div> {/*end of map-point*/}
        </div> {/*end of description-up*/}
        <div className="description">
          <p>Supported Expedia Japan(online travel agency) users via phone and email. Contacted hotels and airline companies all over the world dependes on customers demands.
            Used Amadeus(A1) system to handle flight tickets.
          </p>
        </div> {/*end of description*/}
      </div> {/*end of each-item*/}

      <hr></hr>
      <div className="each-item">
        <div className="description-up">
          <p><u>Tour conductor</u></p>
          <p><i>04/2016 -12/2016</i></p>
          <div className="map-point">
            <i className="fas fa-map-marker-alt"></i>
            <p className="with-icon">Nagano International Tours / Nagano, Japan</p>
          </div> {/*end of map-point*/}
        </div> {/*end of description-up*/}
        <div className="description">
          <p>Attended group tours in Japan. Contacted hotels and places to visit on the tour to check the appointment.
            Carried on tours as scheduled time. Also, attended school trips for hight school and junior high school.
          </p>
        </div> {/*end of description*/}
      </div> {/*end of each-item*/}

      <hr></hr>
      <div className="each-item">
        <div className="description-up">
          <p><u>Receptionist</u></p>
          <p><i>04/2014 -03/2016</i></p>
          <div className="map-point">
            <i className="fas fa-map-marker-alt"></i>
            <p className="with-icon">Hotel Tangram / Nagano, Japan</p>
          </div> {/*end of map-point*/}
        </div> {/*end of description-up*/}
        <div className="description">
          <p>Served hotel guests for check-in/out. Helped foreighn guests in English.</p>
        </div> {/*end of description*/}
      </div> {/*end of each-item*/}
    </div>
  )
}

export default Work
