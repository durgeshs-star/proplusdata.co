import React from "react";
import "./CmoLeadershipEvent.css"

export default function CmoLeadershipEventComponent() {
  return (
    <section className="ppd-cmo-event-hero">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <span className="ppd-cmo-event-eyebrow">
              CMO LEADERSHIP SUMMIT 2026
            </span>
            <h1 className="ppd-cmo-event-title">
              CMO Leadership Summit 2026: How ProPlus Data is Redefining <span className="ppd-cmo-event-title-accent">Predictable Pipeline</span>
            </h1>
            <div className="ppd-cmo-event-meta">
              Austin, TX | April 12–14, 2026
            </div>
            <div className="ppd-cmo-event-rule"></div>
            <div className="ppd-cmo-event-intro-text">
              <p className="ppd-cmo-event-intro">
                As a sponsor at the CMO Leadership Summit 2026, ProPlus Data engaged with B2B marketing leaders tackling one of the biggest challenges in modern GTM strategy, pipeline predictability.
              </p>
              <p className="ppd-cmo-event-intro">
                Despite increased investments in intent data, AI-driven marketing, and demand generation, most teams still struggle to align execution with actual buyer readiness.
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="ppd-cmo-event-media">
              <div className="ppd-cmo-event-image">
                <img src="/assets/images/cmo-summit-tx.jpg" alt="CMO Leadership Summit event" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
