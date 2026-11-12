import React from 'react'
import "./EventCards.css"

export default function WinterDataSummit() {
  return (
    <div className="ppd-event-section">
      <div className="container">
        <div className="ppd-event-card">
          <div className="ppd-event-card-media">
            <img src='assets/images/winter-data-summit.png' alt="Winter Data Summit"/>
          </div>
          <div className="ppd-event-card-content">
            <span className="ppd-event-card-label">
              PAST EVENT
            </span>
            <h2 className="ppd-event-card-title">
              New York Winter Data Summit 2025.
            </h2>
            <div className="ppd-event-meta">
              <div className="ppd-event-meta-item">
                <span className="ppd-event-meta-label">DATE</span>
                <span className="ppd-event-meta-value">
                  4th December 2025
                </span>
              </div>
              <div className="ppd-event-meta-item">
                <span className="ppd-event-meta-label">VENUE</span>
                <span className="ppd-event-meta-value">
                  Convene, Brookfield Place, 225 Liberty St, New York, NY 10281
                </span>
              </div>
            </div>
            <a href="/new-york-winter-data-summit-2025" className="ppd-event-card-link">
              Know More
              <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
