import React from 'react';
import herobanner from "../../../assets/hero-banner.jpg";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <figure className="hero-banner">
        <picture>
          <source srcSet={herobanner} media="(min-width: 768px)" />
          <source srcSet={herobanner} media="(min-width: 500px)" />
          <img src={herobanner} alt="" className="w-100" />
        </picture>
      </figure>
      <div className="hero-content">
        <h2 className="h2 hero-title">Fullstack Developer Web Design & Build Creative Products</h2>
        <a href="#contact" className="btn btn-primary">Contact Me</a>
      </div>
      <ul className="hero-social-list">
        <li>
          <a href="https://wa.link/syazdj" className="hero-social-link">
            <ion-icon name="logo-whatsapp"></ion-icon>
            <div className="tooltip">Whatsapp</div>
          </a>
        </li>
        <li>
          <a href="https://github.com/alfaniferdiansah" className="hero-social-link">
            <ion-icon name="logo-github"></ion-icon>
            <div className="tooltip">Github</div>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/alfani-ferdiansah-331829254/" className="hero-social-link">
            <ion-icon name="logo-linkedin"></ion-icon>
            <div className="tooltip">Linkedin</div>
          </a>
        </li>
      </ul>
      <a href="#about" className="scroll-down">Scroll</a>
    </section>
  );
};

export default Hero;