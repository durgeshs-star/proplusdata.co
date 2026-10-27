import React, { useEffect, useRef, useState } from "react";
import "./AboutTab.css";

const tabs = [
  {
    id: "intent",
    number: "01",
    label: "Intent Accounts & Buying Propensity",
    shortLabel: "BUYING PROPENSITY",
    image: "assets/images/portfolio/account-segment.webp",
    alt: "account segment",
  },
  {
    id: "segmentation",
    number: "02",
    label: "Advanced Account Segmentation",
    shortLabel: "ACCOUNT SEGMENTATION",
    image: "assets/images/portfolio/product-level.webp",
    alt: "product level",
  },
  {
    id: "buying-groups",
    number: "03",
    label: "Identifying Buying Groups",
    shortLabel: "BUYING GROUPS",
    image: "assets/images/portfolio/decision-making.webp",
    alt: "decision making",
  },
];

function AboutTabContent({ activeTab }) {
  if (activeTab === 0) {
    return (
      <p>
        We evaluate and assess a broad range of buyer{" "}
        <a href="https://proplusdata.co/intent-data">intent</a> signals to
        precisely categorize accounts into four distinct propensity levels:
        High, Medium, Low, or Greenfield. This meticulous categorization
        enables you to craft highly targeted marketing strategies tailored to
        each segment&apos;s unique needs and characteristics. By leveraging
        these insights, you can engage with the most promising prospects at the
        optimal stage of their buying journey, thereby increasing the chances
        of successful conversion and fostering long-term relationships.
      </p>
    );
  }

  if (activeTab === 1) {
    return (
      <p>
        Our approach to account segmentation goes beyond surface-level
        attributes. We conduct an in-depth analysis at the product level,
        identifying accounts that are currently leveraging competing solutions
        or those that have undergone significant digital transformation but
        have yet to adopt any of the target products. This comprehensive
        profiling helps you uncover untapped opportunities within organizations
        that are in transition. Allowing you to position solutions effectively
        and create tailored engagement strategies for each unique group. By
        understanding where each account stands in its journey, we can deliver
        highly relevant and personalized messaging that resonates deeply with
        decision-makers.
      </p>
    );
  }

  return (
    <p>
      We identify the{" "}
      <a href="https://proplusdata.co/account-intelligence-insights">
        key buyer groups and buying personas
      </a>{" "}
      within target accounts. Through a detailed understanding of the
      organizational structure, we pinpoint the individuals who influence or
      control purchasing decisions. This insight allows you to craft and execute
      highly effective omnichannel campaigns that speak directly to the
      concerned personas. Leveraging the insights gained from this thorough
      identification, you can create campaigns that engage prospects on multiple
      levels, ensuring that the outreach resonates across various touchpoints
      and drives higher engagement and conversions.
    </p>
  );
}

function TabVisualization({ activeTab }) {
  if (activeTab === 0) {
    return (
      <div className="ppd-about-tabs-visual ppd-about-tabs-propensity" aria-hidden="true">
        <span className="ppd-about-tabs-visual-label">PROPENSITY SIGNAL</span>
        <div><span>HIGH</span><i className="is-strong" /></div>
        <div><span>MEDIUM</span><i /></div>
        <div><span>LOW</span><i /></div>
        <div><span>GREENFIELD</span><i /></div>
      </div>
    );
  }

  if (activeTab === 1) {
    return (
      <div className="ppd-about-tabs-visual ppd-about-tabs-segmentation" aria-hidden="true">
        <span>COMPETING SOLUTION</span>
        <i />
        <span>DIGITAL TRANSFORMATION</span>
        <i />
        <span>TARGET OPPORTUNITY</span>
      </div>
    );
  }

  return (
    <div className="ppd-about-tabs-network" aria-hidden="true">
      <span className="ppd-about-tabs-network-line ppd-about-tabs-network-line-top" />
      <span className="ppd-about-tabs-network-line ppd-about-tabs-network-line-bottom" />
      <span className="ppd-about-tabs-network-line ppd-about-tabs-network-line-left" />
      <span className="ppd-about-tabs-network-line ppd-about-tabs-network-line-right" />
      <i className="ppd-about-tabs-network-node ppd-about-tabs-network-node-top" />
      <i className="ppd-about-tabs-network-node ppd-about-tabs-network-node-bottom" />
      <i className="ppd-about-tabs-network-node ppd-about-tabs-network-node-left" />
      <i className="ppd-about-tabs-network-node ppd-about-tabs-network-node-right" />
      <i className="ppd-about-tabs-network-node ppd-about-tabs-network-node-center" />
    </div>
  );
}

export default function AboutTab() {
  const [activeTab, setActiveTab] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const sectionRef = useRef(null);
  const tabRefs = useRef([]);

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
      { threshold: 0.12 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotionPreference = () => setReducedMotion(motionQuery.matches);

    updateMotionPreference();
    motionQuery.addEventListener("change", updateMotionPreference);
    return () => motionQuery.removeEventListener("change", updateMotionPreference);
  }, []);

  useEffect(() => {
    if (!isVisible || reducedMotion || isPaused) return undefined;

    const intervalId = window.setInterval(() => {
      setActiveTab((currentTab) => (currentTab + 1) % tabs.length);
    }, 6000);

    return () => window.clearInterval(intervalId);
  }, [activeTab, isPaused, isVisible, reducedMotion]);

  const selectTab = (index) => setActiveTab(index);

  const handleTabKeyDown = (event, index) => {
    let nextIndex;
    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      nextIndex = (index + 1) % tabs.length;
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      nextIndex = (index - 1 + tabs.length) % tabs.length;
    } else if (event.key === "Home") {
      nextIndex = 0;
    } else if (event.key === "End") {
      nextIndex = tabs.length - 1;
    } else {
      return;
    }

    event.preventDefault();
    selectTab(nextIndex);
    tabRefs.current[nextIndex]?.focus();
  };

  const currentTab = tabs[activeTab];

  return (
    <section
      ref={sectionRef}
      className={`ppd-about-tabs-section${isVisible ? " is-visible" : ""}`}
      aria-labelledby="ppd-about-tabs-title"
      style={{ "--active-progress": `${(activeTab / (tabs.length - 1)) * 100}%` }}
    >
      <div className="ppd-about-tabs-grid" aria-hidden="true" />
      <div className="ppd-about-tabs-container container">
        <header className="ppd-about-tabs-header">
          <div className="ppd-about-tabs-eyebrow">
            <span className="ppd-about-tabs-eyebrow-dot" aria-hidden="true" />
            GTM INTELLIGENCE
          </div>
          <h2 id="ppd-about-tabs-title">
            Identifying High Propensity Accounts for
            <span> GTM | ABM</span>
          </h2>
          <div className="ppd-about-tabs-accent" aria-hidden="true">
            <span />
          </div>
        </header>

        <div
          className="ppd-about-tabs-navigation"
          role="tablist"
          aria-label="GTM intelligence stages"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) {
              setIsPaused(false);
            }
          }}
        >
          <div className="ppd-about-tabs-track" aria-hidden="true">
            <span className="ppd-about-tabs-track-progress" />
            <span className="ppd-about-tabs-track-pulse" />
          </div>
          {tabs.map((tab, index) => (
            <button
              key={tab.id}
              ref={(element) => { tabRefs.current[index] = element; }}
              type="button"
              id={`ppd-about-tabs-tab-${tab.id}`}
              className={`ppd-about-tabs-nav-item${activeTab === index ? " is-active" : ""}`}
              role="tab"
              aria-selected={activeTab === index}
              aria-controls="ppd-about-tabs-panel"
              tabIndex={activeTab === index ? 0 : -1}
              onClick={() => selectTab(index)}
              onKeyDown={(event) => handleTabKeyDown(event, index)}
            >
              <span className="ppd-about-tabs-nav-top">
                <span className="ppd-about-tabs-number">{tab.number}</span>
                <span className="ppd-about-tabs-node" />
              </span>
              <span className="ppd-about-tabs-short-label">{tab.shortLabel}</span>
              <span className="ppd-about-tabs-full-label">{tab.label}</span>
            </button>
          ))}
        </div>

        <div
          className="ppd-about-tabs-panel"
          role="tabpanel"
          id="ppd-about-tabs-panel"
          aria-labelledby={`ppd-about-tabs-tab-${currentTab.id}`}
          tabIndex={0}
          key={currentTab.id}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) {
              setIsPaused(false);
            }
          }}
        >
          <div className="ppd-about-tabs-image">
            <div className="ppd-about-tabs-image-grid" aria-hidden="true" />
            <img src={currentTab.image} alt={currentTab.alt} />
            <div className="ppd-about-tabs-image-status">
              <span />
              INTELLIGENCE ACTIVE
            </div>
          </div>

          <div className="ppd-about-tabs-content">
            <div className="ppd-about-tabs-active-label">
              <span aria-hidden="true" />
              ACTIVE INTELLIGENCE
            </div>
            <span className="ppd-about-tabs-content-number">{currentTab.number}</span>
            <h3>{currentTab.label}</h3>
            <div className="ppd-about-tabs-content-accent" aria-hidden="true" />
            <div className="ppd-about-tabs-description">
              <AboutTabContent activeTab={activeTab} />
            </div>
            <TabVisualization activeTab={activeTab} />
          </div>
        </div>
      </div>
    </section>
  );
}
