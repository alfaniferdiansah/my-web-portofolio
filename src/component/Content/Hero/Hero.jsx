import React from "react";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div class="body-part-1">
        <div className="hero-content">
          <h2 className="hero-title">
            Fullstack Developer<span>Web Design & Build Creative Products</span>
          </h2>
          <a href="#contact" className="btn btn-primary">
            Contact Me
          </a>
        </div>
      </div>
      <div class="hero-banner">
        <div class="background-circle"></div>
      </div>
      <ul className="hero-social-list">
        <li>
          <a href="https://wa.link/syazdj" className="hero-social-link">
            <ion-icon name="logo-whatsapp"></ion-icon>
            <div className="tooltip">Whatsapp</div>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/alfaniferdiansah"
            className="hero-social-link"
          >
            <ion-icon name="logo-github"></ion-icon>
            <div className="tooltip">Github</div>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/alfani-ferdiansah/"
            className="hero-social-link"
          >
            <ion-icon name="logo-linkedin"></ion-icon>
            <div className="tooltip">Linkedin</div>
          </a>
        </li>
      </ul>
      <a href="#about" className="scroll-down">
        Scroll
      </a>
    </section>
  );
};

export default Hero;
