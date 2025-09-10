import React from "react";
import { IoCloseOutline } from "react-icons/io5";
import { IoCloudDownloadOutline } from 'react-icons/io5';


const Hero: React.FC = () => (
  <section id="hero">
    <div className="hero text-center" id="home">
      <div className="container">

        <div className="banner-outline has-after">

          <div className="hero-banner img-holder has-after" style={{ "--width": 500, "--height": 680 } as React.CSSProperties} data-tilt>
            <img src="/images/hero-banner.jpg" width="500" height="680" alt="Hamza Waseem" className="img-cover" />
          </div>

          <span className="span title">Hamza Waseem</span>

        </div>

        <div className="hero-content">

          <h1 className="h1 title">Get Your Product Identity From Me.</h1>

          <div className="wrapper">
            <a
              href="/HamzaCV.pdf"          // exact filename from /public
              download="Hamza-Waseem-CV"    // suggested filename
              className="btn"
            >
              <span className="span">Download CV</span>
              <IoCloudDownloadOutline aria-hidden="true" />
            </a>



            <p className="hero-text">
               From AI Solutions to Backend 
            </p>
          </div>

        </div>

        <img src="/images/hero-shape-1.png" width="559" height="232" alt="shape" className="shape shape-1" />

        <img src="/images/hero-shape-2.png" width="1358" height="497" alt="shape" className="shape shape-2" />

      </div>
    </div>
  </section>
);

export default Hero;
