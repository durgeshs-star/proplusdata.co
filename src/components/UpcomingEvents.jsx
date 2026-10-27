import React from 'react'
import "./EventCards.css"

export default function UpcomingEvents() {
  return (
    <div className="ppd-event-section">
      <div className="container">
        <div className="ppd-event-section-header">
          <span className="ppd-event-section-eyebrow">
            UPCOMING EVENTS
          </span>
          <h2 className="ppd-event-section-title">
            Upcoming Events
          </h2>
          <div className="ppd-event-section-rule"></div>
        </div>
        <div className="ppd-event-featured">
          <div className="ppd-event-featured-media">
            <img src='assets/images/Gartner.webp' alt="Gartner Marketing Xpo"/>
          </div>
          <div className="ppd-event-featured-content">
            <span className="ppd-event-card-label">
              UPCOMING EVENT
            </span>
            <h2 className="ppd-event-card-title">
              Gartner Marketing Symposium | Xpo 2025.
            </h2>
            <div className="ppd-event-meta">
              <div className="ppd-event-meta-item">
                <span className="ppd-event-meta-label">BOOTH</span>
                <span className="ppd-event-meta-value">
                  Meet us at booth #116
                </span>
              </div>
              <div className="ppd-event-meta-item">
                <span className="ppd-event-meta-label">DATE</span>
                <span className="ppd-event-meta-value">
                  Dates - 2nd to 4th June 2025
                </span>
              </div>
              <div className="ppd-event-meta-item">
                <span className="ppd-event-meta-label">VENUE</span>
                <span className="ppd-event-meta-value">
                  Venue - Gaylord Rockies Resort & Convention Center, Denver, Co.
                </span>
              </div>
            </div>
            <a href="/gartner-marketing-symposium-xpo-2025" className="ppd-event-card-link">
              Know More
              <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
