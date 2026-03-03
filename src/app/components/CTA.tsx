import React from "react";
import {
  IoArrowForwardOutline,
} from "react-icons/io5";

const CTA: React.FC = () => (
  <section className="section cta" aria-label="work with me">
        <div className="container">

          <h2 className="title h2 section-title text-center">
            Let&apos;s Work Together On Your Next Project!
          </h2>

          <a href="#" className="btn btn:hover">
            <span className="span">Contact Me!</span>

            <IoArrowForwardOutline aria-hidden="true" />
          </a>

        </div>
      </section>


);

export default CTA;
