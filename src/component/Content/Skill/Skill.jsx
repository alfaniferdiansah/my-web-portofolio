import React, { useState } from "react";
import htmlLogo from "../../../assets/html5.png";
import cssLogo from "../../../assets/css3.png";
import tailswindLogo from "../../../assets/Tailwind.png";
import bootstrapLogo from "../../../assets/bootstrap.png";
import javascriptLogo from "../../../assets/javascript.png";
import reactLogo from "../../../assets/react.png";
import nodeLogo from "../../../assets/nodejs.png";
import expressLogo from "../../../assets/express.png";
import mysqlLogo from "../../../assets/mysql.png";
import mongoLogo from "../../../assets/mongodb.png";
import postmanLogo from "../../../assets/postman.png";
import gitLogo from "../../../assets/git.png";
import githubLogo from "../../../assets/github.png";
import vsLogo from "../../../assets/vs-code.png";
import cmdLogo from "../../../assets/command.png";

const Skill = () => {
  const [toggleSkills, setToggleSkills] = useState(true);

  const toggleSkillsBox = () => {
    setToggleSkills(!toggleSkills);
  };

  return (
    <>
      <section className="skills" id="skills">
        <div className="skills-content section-content">
          <p className="section-subtitle">My skills</p>
          <h2 className="h3 section-title">
            What My Programming Skills Included?
          </h2>
          <p className="section-text">
            I develop simple, intuitive and responsive user interface that helps
            users get things done with less effort and time with those
            technologies.
          </p>
          <div className={`skills-toggle ${toggleSkills ? "active" : ""}`}>
            <button className={`toggle-btn`} onClick={toggleSkillsBox}>
              Skills
            </button>
            <button className={`toggle-btn`} onClick={toggleSkillsBox}>
              Tools
            </button>
          </div>
        </div>
        <div className={`skills-box ${toggleSkills ? "active" : ""}`}>
          <ul className="skills-list">
            <li>
              <div className="skill-card">
                <div className="tooltip">HTML5</div>

                <div className="card-icon">
                  <img src={htmlLogo} alt="HTML5 logo" />
                </div>
              </div>
            </li>

            <li>
              <div className="skill-card">
                <div className="tooltip">CSS3</div>

                <div className="card-icon">
                  <img src={cssLogo} alt="CSS3 logo" />
                </div>
              </div>
            </li>

            <li>
              <div className="skill-card">
                <div className="tooltip">JavaScript</div>

                <div className="card-icon">
                  <img src={javascriptLogo} alt="JavaScript logo" />
                </div>
              </div>
            </li>

            <li>
              <div className="skill-card">
                <div className="tooltip">Tailswind</div>

                <div className="card-icon">
                  <img
                    src={tailswindLogo}
                    alt="Tailswind"
                    style={{ width: "48px", height: "48px" }}
                  />
                </div>
              </div>
            </li>

            <li>
              <div className="skill-card">
                <div className="tooltip">Bootstrap</div>

                <div className="card-icon">
                  <img src={bootstrapLogo} alt="Bootstrap logo" />
                </div>
              </div>
            </li>

            <li>
              <div className="skill-card">
                <div className="tooltip">React</div>

                <div className="card-icon">
                  <img src={reactLogo} alt="React" />
                </div>
              </div>
            </li>

            <li>
              <div className="skill-card">
                <div className="tooltip">nodeJS</div>

                <div className="card-icon">
                  <img src={nodeLogo} alt="nodeJS" />
                </div>
              </div>
            </li>

            <li>
              <div className="skill-card">
                <div className="tooltip">ExpressJS</div>

                <div className="card-icon">
                  <img src={expressLogo} alt="ExpressJS" />
                </div>
              </div>
            </li>

            <li>
              <div className="skill-card">
                <div className="tooltip">MySQL</div>

                <div className="card-icon">
                  <img src={mysqlLogo} alt="mysql" />
                </div>
              </div>
            </li>

            <li>
              <div className="skill-card">
                <div className="tooltip">MongoDB</div>

                <div className="card-icon">
                  <img src={mongoLogo} alt="MongoDB" />
                </div>
              </div>
            </li>
          </ul>
          <ul className="tools-list">
            <li>
              <div className="skill-card">
                <div className="tooltip">Command</div>

                <div className="card-icon">
                  <img src={cmdLogo} alt="Command" />
                </div>
              </div>
            </li>

            <li>
              <div className="skill-card">
                <div className="tooltip">Git</div>

                <div className="card-icon">
                  <img src={gitLogo} alt="Git" />
                </div>
              </div>
            </li>

            <li>
              <div className="skill-card">
                <div className="tooltip">Github</div>

                <div className="card-icon">
                  <img src={githubLogo} alt="Github" />
                </div>
              </div>
            </li>

            <li>
              <div className="skill-card">
                <div className="tooltip">Postman</div>

                <div className="card-icon">
                  <img src={postmanLogo} alt="Postman" />
                </div>
              </div>
            </li>

            <li>
              <div className="skill-card">
                <div className="tooltip">VS Code</div>

                <div className="card-icon">
                  <img src={vsLogo} alt="VSCode" />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Skill;
