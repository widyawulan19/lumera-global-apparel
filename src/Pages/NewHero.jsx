
import React from "react";
import "../Style/NewHero.css";

import {
  IoLogoWhatsapp,
  IoMdArrowRoundForward,
} from "react-icons/io";
import { FaCircle } from "react-icons/fa6";


function NewHero() {
  return (
    <section className="hero-container" id="hero">

      {/* BACKGROUND GLOW */}
      <div className="hero-glow glow-left"></div>
      <div className="hero-glow glow-right"></div>

      <div className="hero-wrapper">

        {/* LEFT CONTENT */}
        <div className="hc-left">

          <div
            className="hero-mini-label"
            data-aos="fade-up"
          >
            Singapore Registered Apparel Sourcing Hub
          </div>

          <div
            className="hc-left-text"
            data-aos="fade-up"
            data-aos-delay="100"
          >

            <h1>
              Connecting Factories in Asia
              <span>
                {" "}with Buyers Worldwide
              </span>
            </h1>

            <p>
              Lumera Global helps brands, retailers,
              and distributors source high-quality
              apparel with scalable supply chain
              solutions.
              <br />
              Based in Singapore, we connect reliable
              factories across Asia with global buyers
              seeking competitive pricing, flexible
              production, and end-to-end coordination.
            </p>

          </div>

          {/* CTA */}
          <div
            className="hc-left-btn"
            data-aos="fade-up"
            data-aos-delay="200"
          >

            <a href="#contact">
              <button className="btn-active">
                Work With Us
                <IoMdArrowRoundForward />
              </button>
            </a>

            <a
              href="https://wa.me/6281115599002"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn-primary">
                <IoLogoWhatsapp />
                Become Partner
              </button>
            </a>

          </div>

          {/* TALK BUTTON */}
          <div
            className="semi-btn"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <button>
              Talk to Our Team
              <IoMdArrowRoundForward />
            </button>
          </div>

          {/* BADGES */}
          <div
            className="hero-badges"
            data-aos="fade-up"
            data-aos-delay="200"
          >

            <p> <FaCircle className="badge-icon" /> Singapore Registered Company</p>

            <p > <FaCircle className="badge-icon" /> Asia Factory Network</p>

            <p> <FaCircle className="badge-icon" /> OEM & Private Label Specialist</p>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div
          className="hc-right"
          data-aos="fade-left"
          data-aos-delay="300"
        >

          <div className="hero-visual">

            <div className="floating-card card-1">
              <span>20+</span>
              <p>Years Experience</p>
            </div>

            <div className="floating-card card-2">
              <span>Asia</span>
              <p>Factory Network</p>
            </div>

            <div className="floating-card card-3">
              <span>Global</span>
              <p>Logistics Support</p>
            </div>

            <div className="hero-circle"></div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default NewHero;
