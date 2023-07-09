import React from "react";
import aboutbanner from "../../../assets/hero-banner.png";
const About = () => {
  return (
    <section className="about" id="about">
      <figure className="about-banner">
        <img
          src={aboutbanner}
          alt="A man in a alice blue shirt with a thinking expression"
          className="w-100"
        />
      </figure>

      <div className="about-content section-content">
        <p className="section-subtitle">About me</p>

        <h2 className="h3 section-title">Need a Creative Product? I can Help You!</h2>

        <p className="section-text">
          Hi! I’m Ferdiansah, and I’m a developer who has passion for building clean web applications with intuitive
          functionalities. I enjoy the process of turning ideas into reality using creative solutions. I’m always curious
          about learning new skills, tools, and concepts. In addition to working on various solo full stack projects, I
          have worked with creative teams, which involves daily stand-ups and communications, source control, and project
          management.
        </p>

        <div className="btn-group">
        <a href="https://wa.link/syazdj">
          <button className="btn btn-secondary">Hire me</button>
          </a>

        <a href="https://wa.link/syazdj">
          <button className="btn btn-primary">Download cv</button>
        </a>
        </div>
      </div>
    </section>
  );
};

export default About;