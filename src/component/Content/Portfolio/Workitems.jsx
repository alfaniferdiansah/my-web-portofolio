import React from "react";

const WorkItems = ({ item }) => {
  return (
    <div className="project-card">
      <a href={`${item.link}`}>
        <figure className="card-banner">
          <img src={item.image} className="w-100" alt={item.alt} />
        </figure>
        <div className="card-content">
          <h2 className="h4 card-title">{item.desc}</h2>
          <time className="publish-date" dateTime={item.date.number}>
            <h3>{item.date.name}</h3>
          </time>
        </div>
      </a>
      <h3 className="project-title">{item.title}</h3>
      <a href={item.demo} className="project-button">
        Demo
      </a>
      
      <a href={item.link} className="project-button">
        Source
      </a>
    </div>
  );
};

export default WorkItems;
