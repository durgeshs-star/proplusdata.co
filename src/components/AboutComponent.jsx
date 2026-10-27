import React, { useEffect, useRef, useState } from "react";
import "./AboutComponent.css";

export default function AboutComponent() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return undefined;

    if (!("IntersectionObserver" in window)) {
      setIsVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`ppd-about-section${isVisible ? " is-visible" : ""}`}
      aria-labelledby="ppd-about-title"
    >
      <div className="ppd-about-grid" aria-hidden="true" />
      <div className="ppd-about-container container">
        <div className="ppd-about-row row align-items-center">
          <article className="ppd-about-copy col-lg-7 col-md-6">
            <div className="ppd-about-eyebrow">
              <span className="ppd-about-eyebrow-dot" aria-hidden="true" />
              <span>PROSPECT INTELLIGENCE</span>
            </div>

            <h1 className="ppd-about-title" id="ppd-about-title">
              About <span>Us</span>
            </h1>

            <div className="ppd-about-accent" aria-hidden="true">
              <span />
            </div>

            <div className="ppd-about-text">
              <p className="ppd-about-lead">
                ProPlus Data is a premier prospect intelligence and insights company, empowering businesses to drive precision in customer acquisition and engagement. Our proprietary, cutting-edge framework leverages advanced analytics to uncover authentic buyer signals, enabling clients to prioritize high-impact opportunities with confidence. By integrating deep domain expertise with unparalleled analytical rigor, ProPlus Data equips marketing &amp; sales teams to navigate complex markets, align GTM strategies, and achieve measurable growth.
              </p>

              <p className="ppd-about-detail">
                ProPlus Data provides <a href="https://proplusdata.co/technographics">Technographics</a> to map your prospects’ tech stack, <a href="https://proplusdata.co/next-tech-purchase">Next Tech Purchase®</a> to forecast their next tech investments, and <a href="https://proplusdata.co/renewal-intelligence">Renewal Intelligence</a> to identify contracts approaching renewal. ProPlus’s <a href="https://proplusdata.co/buying-group">Buying Group</a> is an essential guide for fostering meaningful engagement with high-potential clients, while <a href="https://proplusdata.co/intent-data">Intent Data</a> and <a href="https://proplusdata.co/contact-data">Contact Data</a> equip your teams to engage the right people at the right time. Every solution is designed to turn raw data into decisive action,fast.
              </p>
            </div>

            <a href="/contact-us" className="ppd-about-cta">
              <span>Know More</span>
              <span className="ppd-about-cta-arrow" aria-hidden="true">→</span>
            </a>
          </article>

          <div className="ppd-about-visual-column col-lg-5 col-md-6">
            <div className="ppd-about-visual">
              <div className="ppd-about-visual-glow" aria-hidden="true" />
              <div className="ppd-about-orbit ppd-about-orbit-one" aria-hidden="true" />
              <div className="ppd-about-orbit ppd-about-orbit-two" aria-hidden="true" />
              <div className="ppd-about-connection" aria-hidden="true">
                <span className="ppd-about-connection-pulse" />
              </div>
              <div className="ppd-about-image-frame">
                <img
                  src="/assets/images/about/about.webp"
                  alt="Data Intelligence Company"
                />
              </div>
              <div className="ppd-about-data-tag ppd-about-data-tag-one">
                <span aria-hidden="true" />
                BUYER SIGNALS
              </div>
              <div className="ppd-about-data-tag ppd-about-data-tag-two">
                <span aria-hidden="true" />
                GTM INTELLIGENCE
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
