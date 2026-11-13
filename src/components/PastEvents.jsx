import React from 'react'
import "./EventCards.css"

export default function PastEvents() {
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
        <div className="ppd-event-card">
          <div className="ppd-event-card-media">
            <img src='assets/images/linkedin-banner.webp' alt="linkedin-banner"/>
          </div>
          <div className="ppd-event-card-content">
            <span className="ppd-event-card-label">
              PAST EVENT
            </span>
            <h2 className="ppd-event-card-title">
              Forrester B2B Summit North America
            </h2>
            <p className="ppd-event-card-description">
              Proud Sponsor. Proven Innovator. Future-Driven.
            </p>
            <a href="/forrester-b2b-summit-2025" className="ppd-event-card-link">
              Know More
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
