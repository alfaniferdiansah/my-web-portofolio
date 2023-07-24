import React from "react";
import Hero from "../component/Content/Hero/Hero.jsx";
import About from "../component/Content/About/About.jsx";
import Skill from "../component/Content/Skill/Skill.jsx";
import Portfolio from "../component/Content/Portfolio/Portfolio.jsx";
import Contact from "../component/Content/Contact/Contact.jsx";
import Stats from "../component/Content/Stats/Stats.jsx";
import Education from "../component/Content/Education/Education.jsx";

const Content = () => {
  return (
    <main>
      <article className="container">
        <Hero />
        <Stats />
        <About />
        <Skill />
        <Education />
        <Portfolio />
        <Contact />
      </article>
    </main>
  );
};

export default Content;
