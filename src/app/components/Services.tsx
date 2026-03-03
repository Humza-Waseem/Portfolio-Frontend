import React from "react";

const Services: React.FC = () => (
 

      <section className="service text-center" aria-label="my services" id="service">
        <div className="container">

          <ul className="service-list">

            <li className="service-item">
              <div className="service-card">

                <div className="card-icon">
                  <img src="/images/service-icon-1.svg" width="80" height="80" loading="lazy"
                    alt="service icon"/>
                </div>

                <h3 className="card-title">
                  <a href="#">
                    Python<br/>
                    Django
                  </a>
                </h3>

              </div>
            </li>

            <li className="service-item">
              <div className="service-card">

                <div className="card-icon">
                  <img src="/images/service-icon-2.svg" width="80" height="80" loading="lazy"
                    alt="service icon"/>
                </div>

                <h3 className="card-title">
                  <a href="#">
                    Backend <br/>
                    Development
                  </a>
                </h3>

              </div>
            </li>

            <li className="service-item">
              <div className="service-card">

                <div className="card-icon">
                  <img src="/images/service-icon-3.svg" width="80" height="80" loading="lazy"
                    alt="service icon"/>
                </div>

                <h3 className="card-title">
                  <a href="#">
                    Artificial Intelligence <br/>
                    
                  </a>
                </h3>

              </div>
            </li>

            {/* <li className="service-item">
              <div className="service-card">

                <div className="card-icon">
                  <img src="/images/service-icon-4.svg" width="80" height="80" loading="lazy"
                    alt="service icon"/>
                </div>

                <h3 className="card-title">
                  <a href="#">
                    Mobile <br/>
                    Application
                  </a>
                </h3>

              </div>
            </li> */}

          </ul>

        </div>
      </section>

);

export default Services;
