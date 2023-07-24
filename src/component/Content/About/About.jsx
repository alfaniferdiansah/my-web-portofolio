import React from "react";
import aboutbanner from "../../../assets/pro_photo-2.jpeg";
const About = () => {
  return (
    <section className="about" id="about">
      <figure className="about-banner">
        <img
          src={aboutbanner}
          alt="A man in a alice blue shirt with a thinking expression"
          className="img-about"
        />
      </figure>

      <div className="about-content section-content">
        <p className="section-subtitle">About me</p>

        <h2 className="h3 section-title">Need a Creative Product? I can Help You!</h2>

        <p className="section-text">
        Highly skilled and motivated Information Systems graduate with a strong passion and talent for software
        development and information technology. Proficient in programming and designing websites using various
        programming languages, frameworks, and libraries. Experienced in analyzing and designing efficient and
        effective information systems. Excellent teamwork and collaboration skills. I am ready to work according to
        procedures and contribute concretely.
        </p>

        <div className="btn-group">
        <a href="https://www.linkedin.com/in/alfani-ferdiansah/">
          <button className="btn btn-secondary">Hire me</button>
          </a>

        <a href="https://drive.google.com/file/d/181fIdF39eauYZKDwtAkiZC_e51SC0h80/view?usp=sharing">
          <button className="btn btn-primary">Download cv</button>
        </a>
        </div>
      </div>
    </section>
  );
};

export default About;