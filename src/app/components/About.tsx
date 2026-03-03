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
           

        </ul>

        <div className="tab-content active" data-tab-content="about">
          <div className="grid-list">
            <figure
              className="about-banner img-holder"
              style={{ width: 570, height: 420 }}
              data-tilt
            >
              <img
                src="/images/me1.jpeg"
                width={570}
                height={420}
                loading="lazy"
                alt="about banner"
                className="img-cover"
              />
            </figure>
   {/* ABOUT CONTENT */}
            <div className="about-content">
              <h2 className="h4 title section-title">
                Multidisciplinary Software Engineer 
              </h2>

              <p className="section-text">
              I am a software engineer with strong experience in backend and full stack development. I specialize in Python, Django, and REST APIs. I enjoy building scalable applications, solving real world problems, and delivering clean, reliable solutions that users can depend on.
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

                  <span className="span title h6">hamzaawaseemm@gmail.com</span>
                </li>

                <li className="about-item">
                  <p className="list-title">Social Network</p>

                  <div className="social-list">
                    <a href="https://www.linkedin.com/in/hamzaawaseem/" className="social-link h6" title="LinkedIn">
                      <IoLogoLinkedin aria-hidden="true" />
                    </a>
                    {/* <a href="https://www.instagram.com/hmmmza._/" className="social-link h6" title="Instagram">
                      <IoLogoInstagram aria-hidden="true" />
                    </a> */}
                    <a href="https://github.com/Humza-Waseem" className="social-link h6" title="Github">
                      <IoLogoGithub aria-hidden="true" />
                    </a>
                    {/* <a href="https://x.com/vaxmerstappen01" className="social-link h6" title="X">
                      <IoLogoTwitter aria-hidden="true" />
                    </a> */}
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
  
  {/* SKILLSET CONTENT */}
        <div className="tab-content" data-tab-content="skillset">
          <div className="grid-list">
            <div className="skill-content">
              <h3 className="h4 title section-title">
                I build scalable and impactful software solutions.
              </h3>

              <p className="section-text">
               From designing backend systems to developing full stack applications, I focus on writing clean code and creating products that solve real problems.
              </p>

              <ul className="skill-list">
                <li>
                  <div className="skill-wrapper">
                    <span className="span">Backend Development</span>

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
                    <span className="span">Full-Stack Development</span>

                    <span className="value">85%</span>
                  </div>

                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{ width: "85%" }}
                    ></div>
                  </div>
                </li>
                <li>
                  <div className="skill-wrapper">
                    <span className="span">API Design & Database Management</span>

                    <span className="value">90%</span>
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
                src="/images/cat.jpg"
                width={570}
                height={420}
                loading="lazy"
                alt="skill banner"
                className="img-cover"
              />
            </figure>
          </div>
        </div>
    




        {/* <div className="tab-content" data-tab-content="interview">
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
        </div> */}

      
{/* CERTIFICATIONS */}
        <div className="tab-content" data-tab-content="exhibition">
          <ul className="grid-list">
            <li>
              <div className="exhibition-card">
                <figure
                  className="card-banner img-holder"
                  style={{ width: 376, height: 200 }}
                  data-tilt
                >
                  <a 
                  href="https://www.linkedin.com/posts/hamzaawaseem_beta-microsoft-learn-student-ambassador-activity-7115273743060377601-v6-d?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD0hTyEBe2QJZOfOZ9dl34D4aJweHNPfviA" target="__blank">
                  <img
                    src="/images/certs/beta.jpg"
                    width={376}
                    height={200}
                    loading="lazy"
                    alt="image"
                    className="img-cover"
                  />
                  </a>
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
                  <a 
                  href="https://www.linkedin.com/posts/hamzaawaseem_hi-everyone-a-quick-update-recently-i-activity-7096842300718276608-Ifc4?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD0hTyEBe2QJZOfOZ9dl34D4aJweHNPfviA" target="__blank">
                  <img
                    src="/images/certs/ai-skill.jpg"
                    width={376}
                    height={200}
                    loading="lazy"
                    alt="video"
                    className="img-cover"
                  />
                  </a>
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
                  <a href="https://coursera.org/share/4586fae03b75d2fa6846be3d290ef875" target="__blank">
                  <img
                    src="/images/certs/image.png"
                    width={376}
                    height={200}
                    loading="lazy"
                    alt="music"
                    className="img-cover"
                  />
                  </a>
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
                  <a 
                  href="https://www.linkedin.com/posts/hamzaawaseem_django-sql-coursera-activity-7169313380514623488-qAwk?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD0hTyEBe2QJZOfOZ9dl34D4aJweHNPfviA" target="__blank">
                  <img
                    src="/images/certs/django.jpg"
                    width={376}
                    height={200}
                    loading="lazy"
                    alt="image"
                    className="img-cover"
                  />
                  </a>
                </figure>
                <div className="card-icon">
                  <IoImageOutline aria-hidden="true" />
                </div>
              </div>
            </li>

            {/* <li>
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
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default About;
