import React from 'react'
import stats_1 from "../../../assets/stats-card_icon-1.png";
import stats_2 from "../../../assets/stats-card_icon-2.png";
import stats_3 from "../../../assets/stats-card_icon-3.png";

const Stats = () => {
  return (
    <>
    <section className="stats" id="stats">
        <ul className="stats-list">

          <li>
            <a href="#" className="stats-card">

              <div className="card-icon">
                <img src={stats_1} alt="Badge icon"/>
              </div>

              <h2 className="h2 card-title">
                1+ <strong>Years of Experience</strong>
              </h2>

            </a>
          </li>

          <li>
            <a href="#" className="stats-card">

              <div className="card-icon">
                <img src={stats_2} alt="Checkmark icon"/>
              </div>

              <h2 className="h2 card-title">
                10+ <strong>Completed Projects</strong>
              </h2>

            </a>
          </li>

          <li>
            <a href="#" className="stats-card">

              <div className="card-icon">
                <img src={stats_3} alt="Peoples rating icon"/>
              </div>

              <h2 className="h2 card-title">
                50+<strong>Happy Clients</strong>
              </h2>

            </a>
          </li>

        </ul>
      </section>
      </>
  )
}

export default Stats
