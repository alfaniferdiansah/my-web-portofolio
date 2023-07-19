import React from "react";
import project1 from "../../../assets/project_portfolio.png";
import project2 from "../../../assets/project2.png";
import project3 from "../../../assets/project3.png";
import project4 from "../../../assets/project4.png";

const Portfolio = () => {
    return (
      <section className="project" id="portfolio">
        <ul className="project-list">
          <li>
            <div className="project-content section-content">
              <p className="section-subtitle">My Works</p>
              <h2 className="h3 section-title">See My Works Which Will Amaze You!</h2>
              <p className="section-text">
                We develop the best quality website that serves for the long-term. Well-documented, clean, easy and elegant
                interface helps any non-technical clients.
              </p>
            </div>
          </li>
  
          <li>
            <a href="https://github.com/alfaniferdiansah/my-web-portofolio" className="project-card">
              <figure className="card-banner">
                <img src={project1} className="w-100" alt="My Portfolio responsive" />
              </figure>
              <div className="card-content">
                <h3 className="h4 card-title">
                This is my portfolio responsive made with reactJS, 
                show more info about my personal life and job skills
                </h3>
                <time className="publish-date" dateTime="2023-7">
                  July 2023
                </time>
              </div>
            </a>
          </li>
  
          <li>
            <a href="https://github.com/alfaniferdiansah/MERN-CRUD-Product" className="project-card">
              <figure className="card-banner">
                <img src={project2} className="w-100" alt="CRUD Product" />
              </figure>
              <div className="card-content">
                <h3 className="h4 card-title">This is my first mini project with Fullstack with CRUD method about product data sample</h3>
                <time className="publish-date" dateTime="2023-7">
                  April 2023
                </time>
              </div>
            </a>
          </li>
  
          <li>
            <a href="https://github.com/alfaniferdiansah/MERN-Ecommerce" className="project-card">
              <figure className="card-banner">
                <img src={project3} className="w-100" alt="Ecommerce build website" />
              </figure>
              <div className="card-content">
                <h3 className="h4 card-title">This is a fullstack-based online shop project with a complex crud system about product data to invoice orders</h3>
                <time className="publish-date" dateTime="2023-7">
                  Juny 2023
                </time>
              </div>
            </a>
          </li>

          <li>
            <a href="https://github.com/alfaniferdiansah/quiz-website.git" className="project-card">
              <figure className="card-banner">
                <img src={project4} className="w-100" alt="Quiz website" />
              </figure>
              <div className="card-content">
                <h3 className="h4 card-title">This is a simple website with quiz content build with html css and js native</h3>
                <time className="publish-date" dateTime="2023-7">
                  Juny 2023
                </time>
              </div>
            </a>
          </li>
  
        </ul>
      </section>
    );
  };
  
  export default Portfolio;