import React from 'react';

function Education() {
  return (
    <div className="section-container">
        <h3>Education</h3>

        <div className="each-item">
          <div className="description-up">
            <p><u>HackYourFuture Copenhagen</u></p>
            <p><i>01/2020 – 01/2021</i></p>
            <div className="map-point">
              <i className="fas fa-map-marker-alt"></i>
              <p className="with-icon">Copenhagen, Denmark</p>
            </div> {/*end of map-point*/}
          </div> {/*end of description-up*/}
          <div className="description">
            <p>A non-profitable coding school. The course includes HTML, CSS, JavaScript, Git, MySQL, Node.js, React.js, RestAPI, Swagger, Postman, Storybook and KnexJS.
              <br />
              In the end of all the modules, we had a final project to build an app. In the final project, we used Storybook, KnexJS and Swagger, too. Link is in Portfolio.
            </p>
          </div> {/*end of description*/}
        </div> {/*end of each-item*/}

        <hr></hr>
        <div className="each-item">
          <div className="description-up">
            <p><u>Nagano Prefectural College</u></p>
            <p><i>04/2011 -03/2014</i></p>
            <div className="map-point">
              <i className="fas fa-map-marker-alt"></i>
              <p className="with-icon">Nagano, Japan</p>
            </div> {/*end of map-point*/}
          </div> {/*end of description-up*/}
          <div className="description">
            <p>Majored in English and British literature and English language.
              <br />
              I have stayed in Australia for 1 year (04/2012 - 03/2013) with a Working Holiday visa. Studied English in a language school for the first 4 months.
              Then got a job as a waitress at a local Fish 'n' Chips restaurant and worked with local Australians.
            </p>
          </div> {/*end of description*/}
        </div> {/*end of each-item*/}

    </div>
  )
}

export default Education
