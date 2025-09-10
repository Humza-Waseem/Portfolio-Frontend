import React from "react";
import { IoArrowForward, IoArrowUp, IoImageOutline } from "react-icons/io5";

const Footer: React.FC = () => (
  <footer className="footer">
    <div className="container">

      <p className="copyright">
        Copyright & Design By @Hamza Waseem - 2025
      </p>

      <a href="#top" className="back-top-btn">
        <span className="span">Back To Top</span>

        <IoArrowUp aria-hidden="true" />
        
      </a>

    </div>
  </footer>
);

export default Footer;
