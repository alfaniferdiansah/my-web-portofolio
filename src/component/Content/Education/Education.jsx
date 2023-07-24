import React, { useState } from "react";

const Education = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="exp" id="experience">
      <div className="exp-content">
        <div className="section-edu">
        <p className="exp-subtitle">My Qualification</p>
        <h2 className="h3 exp-title">See About My Journey Education and Experience!</h2>
        <p className="section-text">
          This is my qualification about my education journey and work experience which i have completed
        </p>
        </div>
      </div>

      <div className="edu-container container">
        <div className="edu-tabs">
          <div
            className={
              toggleState === 1
                ? "edu-button edu-active"
                : "edu-button"
            }
            onClick={() => toggleTab(1)}
          >
            Education
          </div>

          <div
            className={
              toggleState === 2
                ? "edu-button edu-active"
                : "edu-button"
            }
            onClick={() => toggleTab(2)}
          >
            Experience
          </div>
        </div>

        <div className="edu-sections">
          <div
            className={
              toggleState === 1
                ? "edu-content edu-content-active"
                : "edu-content"
            }
          >
            <div className="edu-data">
              <div>
                <h3 className="edu-title">College School</h3>
                <span className="edu-subtitle">
                  Merdeka Malang University
                </span>
                <div className="edu-calender">
                  <i className="uil uil-calendar-alt"></i> 2018 - 2022
                </div>
              </div>

              <div>
                <span className="edu-rounder"></span>
                <span className="edu-line"></span>
              </div>
            </div>

            <div className="edu-data">
              <div></div>
              <div>
                <span className="edu-rounder"></span>
                <span className="edu-line"></span>
              </div>

              <div>
                <h3 className="edu-title">Senior High School</h3>
                <span className="edu-subtitle">
                  SMKN 5 Jember
                </span>
                <div className="edu-calender">
                  <i className="uil uil-calendar-alt"></i> 2015 - 2018
                </div>
              </div>
            </div>

            <div className="edu-data">
              <div>
                <h3 className="edu-title">Junior High School</h3>
                <span className="edu-subtitle">
                  SMPN 1 Rambipuji
                </span>
                <div className="edu-calender">
                  <i className="uil uil-calendar-alt"></i> 2012 - 2015
                </div>
              </div>

              <div>
                <span className="edu-rounder"></span>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? "edu-content edu-content-active"
                : "edu-content"
            }
          >
            <div className="edu-data">
              <div>
                <h3 className="edu-title">Eduwork.ID</h3>
                <span className="edu-subtitle">
                  Full Stack Developer
                </span>
                <div className="edu-calender">
                  <i className="uil uil-calendar-alt"></i> 2022 - 2023
                </div>
              </div>

              <div>
                <span className="edu-rounder"></span>
                <span className="edu-line"></span>
              </div>
            </div>

            <div className="edu-data">
              <div></div>
              <div>
                <span className="edu-rounder"></span>
              </div>

              <div>
                <h3 className="edu-title">Icon Technology</h3>
                <span className="edu-subtitle">
                  Technician
                </span>
                <div className="edu-calender">
                  <i className="uil uil-calendar-alt"></i> 2017 - 2018
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Education;
