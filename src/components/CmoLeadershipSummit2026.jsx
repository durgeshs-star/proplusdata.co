import React from 'react'
import "./EventCards.css"

export default function CmoLeadershipSummit2026() {
  return (
    <div className="ppd-event-section">
      <div className="container">
        <div className="ppd-event-section-header">
          <span className="ppd-event-section-eyebrow">
            PAST EVENTS
          </span>
          <h2 className="ppd-event-section-title">
            Past Events
          </h2>
          <div className="ppd-event-section-rule"></div>
        </div>
        <div className="ppd-event-featured">
          <div className="ppd-event-featured-media">
            <img src='assets/images/cmo-leadership-summit.png' alt="CMO Leadership Summit"/>
          </div>
          <div className="ppd-event-featured-content">
            <span className="ppd-event-card-label">
              PAST EVENT
            </span>
            <h2 className="ppd-event-card-title">
              CMO Leadership Summit 2026
            </h2>
            <div className="ppd-event-meta">
              <div className="ppd-event-meta-item">
                <span className="ppd-event-meta-label">DATE</span>
                <span className="ppd-event-meta-value">
                  12-14 Apr 2026
                </span>
              </div>
              <div className="ppd-event-meta-item">
                <span className="ppd-event-meta-label">VENUE</span>
                <span className="ppd-event-meta-value">
                  Fairmont, Austin TX
                </span>
              </div>
            </div>
            <a href="/cmo-leadership-summit-2026" className="ppd-event-card-link">
              Know More
              <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
