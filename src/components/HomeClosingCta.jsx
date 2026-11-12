import React from "react";
import { Link } from "react-router-dom";
import "./HomeClosingCta.css";

export default function HomeClosingCta() {
  return (
    <section className="ppd-closing-cta">
      <div className="ppd-closing-cta__glow" aria-hidden="true" />
      <div className="ppd-closing-cta__container">
        <div className="ppd-closing-cta__card">
          <div className="ppd-closing-cta__eyebrow">
            <span className="ppd-closing-cta__dot" />
            <span>ACCELERATE YOUR GO-TO-MARKET</span>
          </div>

          <h2 className="ppd-closing-cta__title">
            Ready to make your revenue <span>predictable?</span>
          </h2>

          <p className="ppd-closing-cta__subtitle">
            Join 500+ global B2B revenue and marketing teams using ProPlus Data to uncover hidden buying signals, predict competitor renewals, and engage verified stakeholders.
          </p>

          <div className="ppd-closing-cta__actions">
            <a href="#flipbox" className="ppd-closing-cta__btn-primary">
              Explore Platform
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
            <Link to="/contact-us" className="ppd-closing-cta__btn-secondary">
              Book a Strategy Call
            </Link>
          </div>

          <div className="ppd-closing-cta__stats">
            <div className="ppd-closing-stat">
              <span className="ppd-closing-stat__num">98.6%</span>
              <span className="ppd-closing-stat__label">Data Accuracy SLA</span>
            </div>
            <div className="ppd-closing-stat-divider" />
            <div className="ppd-closing-stat">
              <span className="ppd-closing-stat__num">150+</span>
              <span className="ppd-closing-stat__label">Countries Covered</span>
            </div>
            <div className="ppd-closing-stat-divider" />
            <div className="ppd-closing-stat">
              <span className="ppd-closing-stat__num">3.4x</span>
              <span className="ppd-closing-stat__label">Pipeline Velocity</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
