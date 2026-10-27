import React from 'react'
import "./EventCards.css"

export default function Dmwf2025() {
  return (
    <div className="ppd-event-section">
      <div className="container">
        <div className="ppd-event-card">
          <div className="ppd-event-card-media">
            <img src='assets/images/dmwf-summit.jpg' alt="Winter Data Summit"/>
          </div>
          <div className="ppd-event-card-content">
            <span className="ppd-event-card-label">
              PAST EVENT
            </span>
            <h2 className="ppd-event-card-title">
              DMWF Europe - Amsterdam 2025.
            </h2>
            <div className="ppd-event-meta">
              <div className="ppd-event-meta-item">
                <span className="ppd-event-meta-label">DATE</span>
                <span className="ppd-event-meta-value">
                  25 - 26 Nov 2025
                </span>
              </div>
              <div className="ppd-event-meta-item">
                <span className="ppd-event-meta-label">VENUE</span>
                <span className="ppd-event-meta-value">
                  Rai, Amsterdam
                </span>
              </div>
            </div>
            <a href="/dmwf-europe-amsterdam-2025" className="ppd-event-card-link">
              Know More
              <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
