import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./SolutionSection.css";

const solutionsData = [
  {
    title: "Technographics Data",
    description: "Unlock deep tech insights with precise Technographics data, mapping every layer of a company’s tech stack.",
    image: "assets/images/icon/techno-new.svg",
    backgroundImage: "assets/images/back.png",
    backTitle: "Technographics Data",
    link: "/technographics",
    alt: "technographics data",
  },
  {
    title: null,
    titleWithMark: (
      <>
        Next Tech Purchase<sup>&reg;</sup>
      </>
    ),
    description: "NTP meticulously identifies technology shifts, enabling seamless substitution or discovery of alternative solutions over time.",
    image: "assets/images/icon/ntp-new.svg",
    backgroundImage: "assets/images/Frame 14.png",
    backTitle: null,
    backTitleWithMark: (
      <>
        Next Tech Purchase<sup>&reg;</sup>
      </>
    ),
    link: "/next-tech-purchase",
    alt: "next tech purchase",
  },
  {
    title: "Intent Data",
    description: "Intent Data uncovers buying signals, helping you target high-value accounts poised for their next big tech investment.",
    image: "assets/images/icon/intent-data-new.svg",
    backgroundImage: "assets/images/Frame 14.png",
    backTitle: "Intent Data",
    link: "/intent-data",
    alt: "intent data",
  },
  {
    title: "Renewal Intelligence",
    description: "Real-time Renewal & Subscription insights that help you track the lifecycle of your target accounts.",
    image: "assets/images/icon/Renewal.svg",
    backgroundImage: "assets/images/Frame 14.png",
    backTitle: "Renewal Intelligence",
    link: "/renewal-intelligence",
    alt: "renewal Intelligence",
  },
  {
    title: "Contact Data",
    description: "We deliver precise, relevant & accurate contact data to power meaningful connections and drive business success.",
    image: "assets/images/icon/Contact Data.svg",
    backgroundImage: "assets/images/Frame 14.png",
    backTitle: "Contact Data",
    link: "/contact-data",
    alt: "contact data",
  },
  {
    title: "Demand Gen",
    description: "Talk to Buyers, Not Databases Voice-verified leads, ready to engage.",
    image: "assets/images/icon/mql-new.svg",
    backgroundImage: "assets/images/Frame 14.png",
    backTitle: "Demand Gen",
    link: "/demand-gen",
    alt: "demand gen",
  },
  {
    title: "Buying Group",
    description: "Leverage the power of collective purchasing decisions with ProPlus Data. Get insights into buying behaviors and preferences to enhance your B2B sales and marketing strategies.",
    image: "assets/images/icon/Buyer Persona.svg",
    backgroundImage: "assets/images/Frame 14.png",
    backTitle: "Buying Group",
    link: "/buying-group",
    alt: "Buying Group",
  },
  {
    title: "Event Audience Acquisition",
    description: "Maximize event success with precision-targeted audience acquisition, connecting you with the right attendees effortlessly.",
    image: "assets/images/icon/event-audience-new.svg",
    backgroundImage: "assets/images/Frame 14.png",
    backTitle: "Event Audience Acquisition",
    link: "/event-audience-acquisition",
    alt: "event audience acquisition",
  }
];

const SolutionSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeSolution, setActiveSolution] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return undefined;

    let hasRevealed = false;
    let observer = null;
    const revealIfVisible = () => {
      if (hasRevealed) return;
      const bounds = section.getBoundingClientRect();
      if (bounds.top < window.innerHeight && bounds.bottom > 0) {
        hasRevealed = true;
        setIsVisible(true);
        observer?.disconnect();
        window.removeEventListener("scroll", revealIfVisible);
        window.removeEventListener("resize", revealIfVisible);
      }
    };

    if (!("IntersectionObserver" in window)) {
      revealIfVisible();
      window.addEventListener("scroll", revealIfVisible, { passive: true });
      window.addEventListener("resize", revealIfVisible);
      return () => {
        window.removeEventListener("scroll", revealIfVisible);
        window.removeEventListener("resize", revealIfVisible);
      };
    }

    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) revealIfVisible();
      },
      { threshold: 0.12 }
    );

    observer.observe(section);
    window.addEventListener("scroll", revealIfVisible, { passive: true });
    window.addEventListener("resize", revealIfVisible);
    revealIfVisible();

    return () => {
      observer?.disconnect();
      window.removeEventListener("scroll", revealIfVisible);
      window.removeEventListener("resize", revealIfVisible);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`ppd-daas-section${isVisible ? " is-visible" : ""}`}
      id="daas-solution"
      aria-labelledby="ppd-daas-title"
    >
      <div className="ppd-daas-background" aria-hidden="true">
        <span className="ppd-daas-particle ppd-daas-particle--one" />
        <span className="ppd-daas-particle ppd-daas-particle--two" />
        <span className="ppd-daas-particle ppd-daas-particle--three" />
        <span className="ppd-daas-particle ppd-daas-particle--four" />
        <span className="ppd-daas-particle ppd-daas-particle--five" />
        <span className="ppd-daas-particle ppd-daas-particle--six" />
        <span className="ppd-daas-particle ppd-daas-particle--seven" />
        <span className="ppd-daas-particle ppd-daas-particle--eight" />
      </div>

      <div className="ppd-daas-container">
        <header className="ppd-daas-header">
          <p className="ppd-daas-eyebrow">
            <span className="ppd-daas-status" aria-hidden="true" />
            Unified Data Intelligence
          </p>
          <h2 className="ppd-daas-title" id="ppd-daas-title">
            Unified <span>DaaS</span> Solutions
          </h2>
        </header>

        <div className="ppd-daas-matrix">
          <div className="ppd-daas-core" aria-hidden="true">
            <span className="ppd-daas-core-orbit ppd-daas-core-orbit--outer" />
            <span className="ppd-daas-core-orbit ppd-daas-core-orbit--inner" />
            <span className="ppd-daas-core-center" />
            <span className="ppd-daas-core-label">Data core</span>
          </div>

          <div className="ppd-daas-grid">
            {solutionsData.map((service, index) => {
              const title = service.titleWithMark || service.title;

              return (
                <article
                  key={service.link}
                  className={`ppd-daas-card${activeSolution === index ? " is-active" : ""}`}
                  onMouseEnter={() => setActiveSolution(index)}
                >
                  <div className="ppd-daas-card-top">
                    <span className="ppd-daas-card-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="ppd-daas-card-signal" aria-hidden="true" />
                  </div>

                  <span className="ppd-daas-card-rule" aria-hidden="true" />

                  <div className="ppd-daas-icon">
                    <img src={service.image} alt={service.alt || "solution icon"} />
                  </div>

                  <div className="ppd-daas-content">
                    <h3 className="ppd-daas-card-title">{title}</h3>
                    <p className="ppd-daas-description">{service.description}</p>
                  </div>

                  <Link
                    className="ppd-daas-link"
                    to={service.link}
                    aria-label={`Explore ${typeof title === "string" ? title : "Next Tech Purchase"}`}
                  >
                    <span>Explore</span>
                    <span className="ppd-daas-link-arrow" aria-hidden="true">→</span>
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
