import React from "react";
import {
  IoImageOutline,
  IoLogoYoutube,
  IoLogoSoundcloud,
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoGithub,
  IoLogoTwitter,
} from "react-icons/io5";

const About: React.FC = () => (
  <section className="section about" id="about" aria-label="about-me">
    <div className="container">
      <div className="tab-container">
        <ul className="tab-btn-list">
          <li className="tab-btn-item">
            <button className="tab-btn title h6 active" data-tab-btn="about">
              About Me
            </button>
          </li>

          <li className="tab-btn-item">
            <button className="tab-btn title h6" data-tab-btn="skillset">
              Skillset
            </button>
          </li>

          <li className="tab-btn-item">
            <button className="tab-btn title h6" data-tab-btn="exhibition">
              Certification
            </button>
          </li>
           {/* <li className="tab-btn-item">
            <button className="tab-btn title h6" data-tab-btn="interview">
              Interview
            </button>
          </li> */}

          {/* <li className="tab-btn-item">
            <button className="tab-btn title h6" data-tab-btn="awward">
              Awwards
            </button>
          </li> */}

        </ul>

        <div className="tab-content active" data-tab-content="about">
          <div className="grid-list">
            <figure
              className="about-banner img-holder"
              style={{ width: 570, height: 420 }}
              data-tilt
            >
              <img
                src="/images/about-banner.jpg"
                width={570}
                height={420}
                loading="lazy"
                alt="about banner"
                className="img-cover"
              />
            </figure>

            <div className="about-content">
              <h2 className="h4 title section-title">
                Multidisciplinary Software Engineer 
              </h2>

              <p className="section-text">
                I am a multidisciplinary software engineer with a passion for
                creating innovative solutions. My expertise spans across web
                development, UI/UX, and ServiceNow Development, allowing me to
                deliver comprehensive and effective products.
              </p>

              <ul className="about-list">
                <li className="about-item">
                  <p className="list-title">Name</p>

                  <span className="span title h5">Hamza Waseem</span>
                </li>

                <li className="about-item">
                  <p className="list-title">Phone Number</p>

                  <span className="span title h5">+92 3208425362</span>
                </li>

                <li className="about-item">
                  <p className="list-title">Email Address</p>

                  <span className="span title h6">hamza.wasym99@gmail.com</span>
                </li>

                <li className="about-item">
                  <p className="list-title">Social Network</p>

                  <div className="social-list">
                    <a href="https://www.linkedin.com/in/hamzaawaseem/" className="social-link h6" title="LinkedIn">
                      <IoLogoLinkedin aria-hidden="true" />
                    </a>
                    <a href="https://www.instagram.com/hmmmza._/" className="social-link h6" title="Instagram">
                      <IoLogoInstagram aria-hidden="true" />
                    </a>
                    <a href="https://github.com/Humza-Waseem" className="social-link h6" title="Github">
                      <IoLogoGithub aria-hidden="true" />
                    </a>
                    <a href="https://x.com/vaxmerstappen01" className="social-link h6" title="X">
                      <IoLogoTwitter aria-hidden="true" />
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="tab-content" data-tab-content="skillset">
          <div className="grid-list">
            <div className="skill-content">
              <h3 className="h4 title section-title">
                We help to create visual strategies.
              </h3>

              <p className="section-text">
                A very small stage in a vast cosmic arena great turbuslent
                clouds encyclo-paedia galactica star stuff harvesting star light
              </p>

              <ul className="skill-list">
                <li>
                  <div className="skill-wrapper">
                    <span className="span">Website Development</span>

                    <span className="value">95%</span>
                  </div>

                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{ width: "95%" }}
                    ></div>
                  </div>
                </li>

                <li>
                  <div className="skill-wrapper">
                    <span className="span">Design UI & UX</span>

                    <span className="value">85%</span>
                  </div>

                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{ width: "85%" }}
                    ></div>
                  </div>
                </li>
              </ul>
            </div>








            <figure
              className="skill-banner img-holder"
              style={{ width: 570, height: 420 }}
              data-tilt
            >
              <img
                src="/images/skill-banner.jpg"
                width={570}
                height={420}
                loading="lazy"
                alt="skill banner"
                className="img-cover"
              />
            </figure>
          </div>
        </div>
    









        <div className="tab-content" data-tab-content="interview">
          <div className="grid-list">
            <div
              className="interview-card img-holder"
              style={{ width: 376, height: 420 }}
              data-tilt
            >
              <img
                src="/images/interview-1.jpg"
                width={376}
                height={420}
                loading="lazy"
                alt="interview 1"
                className="img-cover"
              />
              <button className="btn btn:hover">Play</button>
            </div>

            <div
              className="interview-card img-holder"
              style={{ width: 376, height: 420 }}
              data-tilt
            >
              <img
                src="/images/interview-2.jpg"
                width={376}
                height={420}
                loading="lazy"
                alt="interview 2"
                className="img-cover"
              />
              <button className="btn btn:hover">Play</button>
            </div>

            <div
              className="interview-card img-holder"
              style={{ width: 376, height: 420 }}
              data-tilt
            >
              <img
                src="/images/interview-3.jpg"
                width={376}
                height={420}
                loading="lazy"
                alt="interview 3"
                className="img-cover"
              />
              <button className="btn btn:hover">Play</button>
            </div>
          </div>
        </div>

        <div className="tab-content" data-tab-content="awward">
          <h3 className="h4 title section-title">
            We’re a team of creatives who are excited about unique ideas and
            help IT-tech companies to make identity by crafting UI/UX.
          </h3>

          <ul className="grid-list">
            <li>
              <div className="award-card">
                <figure
                  className="card-banner img-holder"
                  style={{ width: 534, height: 383 }}
                  data-tilt
                >
                  <img
                    src="/images/awward-1.jpg"
                    width={534}
                    height={383}
                    loading="lazy"
                    alt="certificate"
                    className="img-cover"
                  />
                </figure>
              </div>
            </li>

            <li>
              <div className="award-card">
                <figure
                  className="card-banner img-holder"
                  style={{ width: 534, height: 383 }}
                  data-tilt
                >
                  <img
                    src="/images/awward-2.jpg"
                    width={534}
                    height={383}
                    loading="lazy"
                    alt="certificate"
                    className="img-cover"
                  />
                </figure>
              </div>
            </li>

            <li>
              <div className="award-card">
                <figure
                  className="card-banner img-holder"
                  style={{ width: 534, height: 383 }}
                  data-tilt
                >
                  <img
                    src="/images/awward-3.jpg"
                    width={534}
                    height={383}
                    loading="lazy"
                    alt="certificate"
                    className="img-cover"
                  />
                </figure>
              </div>
            </li>
          </ul>
        </div>

        <div className="tab-content" data-tab-content="exhibition">
          <ul className="grid-list">
            <li>
              <div className="exhibition-card">
                <figure
                  className="card-banner img-holder"
                  style={{ width: 376, height: 200 }}
                  data-tilt
                >
                  <img
                    src="/images/exhibition-1.jpg"
                    width={376}
                    height={200}
                    loading="lazy"
                    alt="image"
                    className="img-cover"
                  />
                </figure>
                {/* <div className="card-icon">
                  <IoImageOutline aria-hidden="true" />
                </div> */}
              </div>
            </li>

            <li>
              <div className="exhibition-card">
                <figure
                  className="card-banner img-holder"
                  style={{ width: 376, height: 200 }}
                  data-tilt
                >
                  <img
                    src="/images/exhibition-2.jpg"
                    width={376}
                    height={200}
                    loading="lazy"
                    alt="video"
                    className="img-cover"
                  />
                </figure>
                <div className="card-icon">
                  <IoLogoYoutube aria-hidden="true" />
                </div>
              </div>
            </li>

            <li>
              <div className="exhibition-card">
                <figure
                  className="card-banner img-holder"
                  style={{ width: 376, height: 200 }}
                  data-tilt
                >
                  <img
                    src="/images/exhibition-3.jpg"
                    width={376}
                    height={200}
                    loading="lazy"
                    alt="music"
                    className="img-cover"
                  />
                </figure>
                <div className="card-icon">
                  <IoLogoSoundcloud aria-hidden="true" />
                </div>
              </div>
            </li>

            <li>
              <div className="exhibition-card">
                <figure
                  className="card-banner img-holder"
                  style={{ width: 376, height: 200 }}
                  data-tilt
                >
                  <img
                    src="/images/exhibition-4.jpg"
                    width={376}
                    height={200}
                    loading="lazy"
                    alt="image"
                    className="img-cover"
                  />
                </figure>
                <div className="card-icon">
                  <IoImageOutline aria-hidden="true" />
                </div>
              </div>
            </li>

            <li>
              <div className="exhibition-card">
                <figure
                  className="card-banner img-holder"
                  style={{ width: 376, height: 200 }}
                  data-tilt
                >
                  <img
                    src="/images/exhibition-5.jpg"
                    width={376}
                    height={200}
                    loading="lazy"
                    alt="image"
                    className="img-cover"
                  />
                </figure>
                <div className="card-icon">
                  <IoImageOutline aria-hidden="true" />
                </div>
              </div>
            </li>

            <li>
              <div className="exhibition-card">
                <figure
                  className="card-banner img-holder"
                  style={{ width: 376, height: 200 }}
                  data-tilt
                >
                  <img
                    src="/images/exhibition-6.jpg"
                    width={376}
                    height={200}
                    loading="lazy"
                    alt="image" 
                    className="img-cover"
                  />
                </figure>
                <div className="card-icon">
                  <IoImageOutline aria-hidden="true" />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default About;
