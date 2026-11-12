import React from "react";
import "./WinterEvent.css"

export default function WinterEventComponent() {
  return (
    <section className="ppd-winter-event-hero">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <span className="ppd-winter-event-eyebrow">
              NEUDATA SUMMIT 2025
            </span>
            <h1 className="ppd-winter-event-title">
              Neudata Summit 2025: Where Alternative Data Becomes <span className="ppd-winter-event-title-accent">Predictive</span>
            </h1>
            <div className="ppd-winter-event-rule"></div>
            <div className="ppd-winter-event-intro-text">
              <p className="ppd-winter-event-intro">
                Most alternative data conversations still revolve around observation. What people consume. What markets react to. What signals appear after momentum has already formed?
              </p>
              <p className="ppd-winter-event-intro">
                At <a href="https://www.neudata.co/">Neudata</a> Summit 2025, ProPlus Data made a clear case for something more actionable.
              </p>
              <p className="ppd-winter-event-intro">
                Technology decisions are not background noise. They are one of the strongest alternative data signals available today.
              </p>
              <p className="ppd-winter-event-intro">
                And when captured correctly, they tell you what buyers will do next.
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="ppd-winter-event-media">
              <div className="ppd-winter-event-image">
                <img src="/assets/images/new-york-winter-data-summit.png" alt="Winter Data Summit event" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
