import React from "react";
import SolutionIllustration from "./solutions/SolutionIllustration";

export default function TechnoComponentNew() {
  return (
    <section className="ppd-techno-hero-new">
      <div className="ppd-techno-hero__background" aria-hidden="true">
        <div className="ppd-techno-hero__grid" />
        <div className="ppd-techno-hero__glow-1" />
        <div className="ppd-techno-hero__glow-2" />
        <div className="ppd-techno-hero__orbit ppd-techno-hero__orbit-1" />
        <div className="ppd-techno-hero__orbit ppd-techno-hero__orbit-2" />
        <div className="ppd-techno-hero__orbit ppd-techno-hero__orbit-3" />
      </div>
      
      <div className="ppd-techno-hero__container">
        <div className="ppd-techno-hero__content">
          <div className="ppd-techno-hero__eyebrow">
            <span className="ppd-techno-hero__status" aria-hidden="true" />
            Technographic Data
          </div>
          <h1 className="ppd-techno-hero__title">
            Revolutionize Outreach with <span>Technographics!</span>
          </h1>
          <div className="ppd-techno-hero__accent-line" aria-hidden="true" />
          <div className="ppd-techno-hero__copy">
            <p>
              <strong>Want to know exactly which technology your ideal customers has adopted or when they're ready to switch?</strong>
            </p>
            <p>
              At <a href="https://proplusdata.co/"> ProPlus Data</a>, we help you uncover deep insights into your prospects' tech stacks, so you can target smarter, sell faster, and close better deals.
            </p>
            <p>
              From cloud platforms and cybersecurity tools to CRM systems and firewalls, Technographics or Technographic Data shows you who's using what and when they might need you next!
            </p>
          </div>
        </div>
        <div className="ppd-techno-hero__visual">
          <div className="ppd-techno-hero__image-frame">
            <SolutionIllustration category="Technographic Data" />
            <div className="ppd-techno-hero__image-glow" />
          </div>
        </div>
      </div>
    </section>
  );
}
