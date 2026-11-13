import React from "react";
import { Link } from "react-router-dom";

export default function CareerSection() {
  return (
    <section id="career-openings" className="ppd-careers-openings" aria-labelledby="career-openings-title">
      <div className="ppd-careers-openings__grid" aria-hidden="true" />
      <div className="ppd-careers-shell">
        <header className="ppd-careers-openings__header">
          <p className="ppd-careers-eyebrow">Careers</p>
          <h2 id="career-openings-title">Career Openings</h2>
        </header>

        <div className="ppd-careers-cards">
          <article className="ppd-careers-card">
            <span className="ppd-careers-card__number">01</span>
            <h3>Voice Specialist</h3>
            <Link to="/voice-specialist" className="ppd-careers-card__link">
              Read More
            </Link>
          </article>

          <article className="ppd-careers-card">
            <span className="ppd-careers-card__number">02</span>
            <h3>Web / Tech Researcher</h3>
            <Link to="/web-tech-researcher" className="ppd-careers-card__link">
              Read More
            </Link>
          </article>

          <article className="ppd-careers-card">
            <span className="ppd-careers-card__number">03</span>
            <h3>Email Marketing Specialist</h3>
            <Link to="/email-marketing-specialist" className="ppd-careers-card__link">
              Read More
            </Link>
          </article>
        </div>

        {/* <article className="ppd-careers-card">
          <span className="ppd-careers-card__number">04</span>
          <h3>Admin Executive</h3>
          <Link to="/admin-executive" className="ppd-careers-card__link">
            Read More
          </Link>
        </article> */}
      </div>
    </section>
  );
}
