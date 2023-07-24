import React, { useEffect, useState } from "react";
import { projectsData, navProject } from "./Data";
import WorkItems from "./Workitems";

const Portfolio = () => {
  const [item, setItem] = useState({ name: "all" });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
      const newProjects = projectsData.filter((project) => {
        return project.category === item.name;
      });
      setProjects(newProjects);
  }, [item]);

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent });
    setActive(index);
  };
  return (
    <section className="project" id="portfolio">
      <div className="project-content">
        <div className="section-project">
        <p className="port-subtitle">My Works</p>
        <h2 className="h3 port-title">See My Works Which Will Amaze You!</h2>
        <p className="section-text">
          I develop the best quality website that serves for the long-term.
          Well-documented, clean, easy and elegant interface helps any
          non-technical clients.
        </p>
        </div>
      </div>
      <div>
        <div className="project-filters">
          {navProject.map((item, index) => {
            return (
              <span
                onClick={(e) => {
                  handleClick(e, index);
                }}
                className={`${
                  active === index ? "active-work" : ""
                } project-item `}
                key={index}
              >
                {item.name}
              </span>
            );
          })}
        </div>

        <div className="project-container container grid">
          {projects.map((item) => {
            return <WorkItems item={item} key={item.id} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
