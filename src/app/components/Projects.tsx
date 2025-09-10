import React from "react";
import {
  IoArrowForward,
  IoImageOutline,
} from "react-icons/io5";

const Projects: React.FC = () => (
  <section className="section project" aria-label="my latest projects" id="project">

        <ul className="slider-list">

          <li className="slider-item">
            <div className="project-card text-center">

              <div className="card-banner img-holder has-before" 
              style={{width: 1000, height: 763}}>
                 
                <img src="/images/project-1.jpg" width="1000" height="763" loading="lazy"
                  alt="Project poster: Creative & experienced digital design studio" className="img-cover"/>

                <a href="#" className="btn btn:hover">
                  <span className="span">Project Details</span>

                  <IoArrowForward aria-hidden="true" />
                </a>
              </div>

              <div className="card-content">
                <p className="card-subtitle">Web, Product</p>

                <h3 className="title h3">
                  <a href="#" className="card-title">Creative & experienced digital design studio</a>
                </h3>
              </div>

            </div>
          </li>

          <li className="slider-item">
            <div className="project-card text-center">

              <div className="card-banner img-holder has-before" 
              style={{width: 1000, height: 763}}>
                <img src="/images/project-2.jpg" width="1000" height="763" loading="lazy"
                  alt="Project poster: Front End Development & Maintenance" className="img-cover"/>

                <a href="#" className="btn btn:hover">
                  <span className="span">Project Details</span>

                  <IoArrowForward aria-hidden="true" />
                </a>
              </div>

              <div className="card-content">
                <p className="card-subtitle">Web, Product</p>

                <h3 className="title h3">
                  <a href="#" className="card-title">Front End Development & Maintenance</a>
                </h3>
              </div>

            </div>
          </li>

          <li className="slider-item">
            <div className="project-card text-center">

              <div className="card-banner img-holder has-before" 
              style={{width: 1000, height: 763}}
              >
                <img src="/images/project-3.jpg" width="1000" height="763" loading="lazy"
                  alt="Project poster: Flutter Framework & Warframe Design" className="img-cover"/>

                <a href="#" className="btn btn:hover">
                  <span className="span">Project Details</span>

                  <IoArrowForward aria-hidden="true" />
                </a>
              </div>

              <div className="card-content">
                <p className="card-subtitle">Web, Product</p>

                <h3 className="title h3">
                  <a href="#" className="card-title">Flutter Framework & Warframe Design</a>
                </h3>
              </div>

            </div>
          </li>

          <li className="slider-item">
            <div className="project-card text-center">

              <div className="card-banner img-holder has-before" style={{width: 1000, height: 763}}>
                <img src="/images/project-4.jpg" width="1000" height="763" loading="lazy"
                  alt="Project poster: Full Web Development Project With JavaScript" className="img-cover"/>

                

                <a href="#" className="btn btn:hover">
                  <span className="span">Project Details</span>

                  <IoArrowForward aria-hidden="true" />
                </a>
              </div>

              <div className="card-content">
                <p className="card-subtitle">Web, Product</p>

                <h3 className="title h3">
                  <a href="#" className="card-title">Full Web Development Project With JavaScript</a>
                </h3>
              </div>

            </div>
          </li>

          <li className="slider-item">
            <div className="project-card text-center">

              <div className="card-banner img-holder has-before" style={{width: 1000, height: 763}}>
                <img src="/images/project-5.jpg" width="1000" height="763" loading="lazy"
                  alt="Project poster: Cloud Migration & AWS Services" className="img-cover"/>

                <a href="#" className="btn btn:hover">
                  <span className="span">Project Details</span>

                  <IoArrowForward aria-hidden="true" />
                </a>
              </div>

              <div className="card-content">
                <p className="card-subtitle">Web, Product</p>

                <h3 className="title h3">
                  <a href="#" className="card-title">Cloud Migration & AWS Services</a>
                </h3>
              </div>

            </div>
          </li>

        </ul>

      </section>
);

export default Projects;
