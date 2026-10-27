import React from "react";
import "./AboutSection.css";

const AboutSection = () => {
  return (
    <section className="proplus-about">
      <div className="proplus-about__glow" aria-hidden="true" />
      <div className="proplus-about__inner">
        <div className="proplus-about__visual">
          <div className="proplus-about__visual-frame">
            <img
              src="/assets/images/next-tech-purchase.gif"
              alt="Sample report of Next tech purchase"
            />
          </div>
          <div className="proplus-about__visual-caption">
            <span className="proplus-about__caption-dot" aria-hidden="true" />
            Actionable intelligence. Clearer decisions.
          </div>
        </div>

        <div className="proplus-about__content">
          <header className="proplus-about__header">
            <p className="proplus-about__eyebrow">
              <span className="proplus-about__status" aria-hidden="true" />
              About ProPlus Data
            </p>
            <h2 className="proplus-about__title">
              Empowering your business with
              <span> data-driven intelligence.</span>
            </h2>
            <p className="proplus-about__intro">
              At ProPlus Data, we go beyond delivering insights, we empower businesses with precision-driven intelligence that fuels smarter decision-making.
            </p>
          </header>

          <div className="proplus-about__features">
            <article className="proplus-about__feature">
              <span className="proplus-about__feature-number">01</span>
              <span className="proplus-about__feature-icon">
                <img src="assets/images/icon/Accuracy.svg" alt="accuracy" />
              </span>
              <div className="proplus-about__feature-copy">
                <h3>Accuracy That Drives Results</h3>
                <p>
                  Our cutting edge solutions intelligence ensures 100% accuracy, helping you refine your targeting and maximize impact.
                </p>
              </div>
            </article>

            <article className="proplus-about__feature">
              <span className="proplus-about__feature-number">02</span>
              <span className="proplus-about__feature-icon">
                <img src="assets/images/icon/Global.svg" alt="global reach" />
              </span>
              <div className="proplus-about__feature-copy">
                <h3>Global Impact, Unlimited Potential</h3>
                <p>
                  With a strong presence in <strong>150+</strong> countries across <strong>North America, EMEA and APAC,</strong> we bring deep market insights to fuel your global expansion.
                </p>
              </div>
            </article>

            <article className="proplus-about__feature">
              <span className="proplus-about__feature-number">03</span>
              <span className="proplus-about__feature-icon">
                <img src="assets/images/icon/Comprehensive-data.svg" alt="data-solution" />
              </span>
              <div className="proplus-about__feature-copy">
                <h3>Comprehensive Data Solutions</h3>
                <p>
                  From prospect identification to campaign precision, ProPlus Data's tailored solutions help you reach the right audience at the right time.
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
