import React from "react";
import "./Forrester.css"

export default function PastEventComponent() {
  return (
    <section className="ppd-forrester-event ppd-forrester-hero">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <span className="ppd-forrester-hero-eyebrow">
              FORRESTER B2B SUMMIT 2025
            </span>
            <h1 className="ppd-forrester-hero-title">
              Proud Sponsor.<br/>
              Proven Innovator.<br/>
              <span className="ppd-forrester-hero-highlight">Future-Driven.</span>
            </h1>
            <div className="ppd-forrester-hero-rule"></div>
            <div className="ppd-forrester-hero-description">
              <p>At ProPlus Data, we believe in the power of intelligent data to drive transformative outcomes. As a proud sponsor of the Forrester B2B Summit 2025, Denver - North America, we had the opportunity to engage with the brightest minds in B2B, showcase our cutting-edge solutions, and spark conversations that shape the future of data-driven decision-making.</p>
              <p>Held amidst a vibrant confluence of global B2B leaders, the summit provided a powerful platform for us to demonstrate how our intelligence-first approach empowers enterprises to unlock the full potential of their data ecosystems. From real-time customer intelligence to performance-focused analytics, our technology resonated with one consistent theme: precision that drives business impact.</p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="ppd-forrester-hero-media">
              <div className="ppd-forrester-hero-image">
                <img src="/assets/images/forrester.webp" alt="forrester event" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
