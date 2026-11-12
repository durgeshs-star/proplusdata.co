import React, { useLayoutEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import "./Flipbox.css";

const flipboxData = [
  {
    title: "Technographics",
    description: "Get a time-stamped view of company tech stacks, tracking technology adoption, changes, and usage across accounts.",
    link: "/technographics",
    backgroundColor: "#E66627",
    textColor: "#ffffff",
    label: "01 / ACCOUNT INTELLIGENCE",
    metric: "Technology adoption",
    tags: ["Technology stacks", "Account fit", "Market mapping"],
    visual: "technographics",
  },
  {
    title: "Renewal Intelligence",
    description: "Know what's renewing in 100 days, 6 months, or over multiple years. Turn contract timelines into timely revenue opportunities.",
    link: "/renewal-intelligence",
    backgroundColor: "#FF9500",
    textColor: "#ffffff",
    label: "02 / RETENTION & GROWTH",
    metric: "Renewal opportunities",
    tags: ["Contract timing", "Retention", "Competitive swaps"],
    visual: "renewal",
  },
  {
    title: "Intent",
    description: "Go beyond generic intent signals with product-level intent data that reveals which specific solutions accounts are researching, evaluating, and showing interest in.",
    link: "/intent-data",
    backgroundColor: "#3366FF",
    textColor: "#ffffff",
    label: "03 / BUYING SIGNALS",
    metric: "In-market accounts",
    tags: ["Research activity", "Buying groups", "Prioritized outreach"],
    visual: "intent",
  },
  {
    title: "Buying Group",
    description: "Know who's involved, who influences, and who makes the final call. Get a clearer view of the people behind every buying decision.",
    link: "/buying-group",
    backgroundColor: "#6552a3",
    textColor: "#ffffff",
    label: "04 / BUYING COMMITTEE",
    metric: "Buying stakeholders",
    tags: ["Stakeholders", "Behaviors", "Preferences"],
    visual: "purchase",
  },
  {
    title: <>Next Tech Purchase<sup>&reg;</sup></>,
    description: "See what's next on your prospects' technology roadmap and understand which solutions they're most likely to purchase.",
    link: "/next-tech-purchase",
    backgroundColor: "#176b93",
    textColor: "#133580",
    label: "05 / PREDICTIVE INTELLIGENCE",
    metric: "Technology shifts",
    tags: ["Alternatives", "Replacement", "Emerging needs"],
    visual: "purchase",
  },
];

const IntelligenceVisual = ({ type, color }) => (
  <div className={`proplus-intelligence-visual proplus-intelligence-visual--${type}`} aria-hidden="true">
    <div className="proplus-intelligence-visual__glow" />
    <div className="proplus-intelligence-visual__window">
      <div className="proplus-intelligence-visual__topbar"><i /><i /><i /><span>INTELLIGENCE OVERVIEW</span></div>
      <div className="proplus-intelligence-visual__body">
        <div className="proplus-intelligence-visual__sidebar"><b /><b /><b /><b /></div>
        <div className="proplus-intelligence-visual__chart">
          <div className="proplus-intelligence-visual__chart-title" style={{ color }}>ACCOUNT SIGNALS <span>↗</span></div>
          <div className="proplus-intelligence-visual__bars"><i /><i /><i /><i /><i /><i /><i /></div>
          <div className="proplus-intelligence-visual__baseline" />
          <div className="proplus-intelligence-visual__chips"><i /><i /><i /></div>
        </div>
      </div>
    </div>
    <div className="proplus-intelligence-visual__orbit proplus-intelligence-visual__orbit--one" />
    <div className="proplus-intelligence-visual__orbit proplus-intelligence-visual__orbit--two" />
  </div>
);

const Flipbox = () => {
  const sectionRef = useRef(null);
  const viewportRef = useRef(null);
  const trackRef = useRef(null);
  const [scrollDistance, setScrollDistance] = useState(0);
  const [viewportHeight, setViewportHeight] = useState(0);
  const releaseBuffer = Math.max(scrollDistance * 0.02, viewportHeight * 0.75);

  useLayoutEffect(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!viewport || !track) return undefined;

    const updateScrollDistance = () => {
      setViewportHeight(window.innerHeight);
      if (window.matchMedia("(max-width: 900px)").matches) {
        setScrollDistance(0);
        return;
      }
      setScrollDistance(Math.max(0, track.scrollWidth - viewport.clientWidth));
    };

    updateScrollDistance();
    const resizeObserver = new ResizeObserver(updateScrollDistance);
    resizeObserver.observe(viewport);
    resizeObserver.observe(track);
    window.addEventListener("resize", updateScrollDistance);
    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateScrollDistance);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const cardCompleteAt = scrollDistance > 0 ? scrollDistance / (scrollDistance + releaseBuffer) : 1;
  const exitStartAt = cardCompleteAt + (1 - cardCompleteAt) * 0.4;
  const trackX = useTransform(scrollYProgress, (progress) => (
    scrollDistance > 0 ? -scrollDistance * Math.min(1, progress / cardCompleteAt) : 0
  ));
  const exitY = useTransform(scrollYProgress, (progress) => {
    if (scrollDistance === 0 || progress <= exitStartAt) return 0;
    return -window.innerHeight * ((progress - exitStartAt) / (1 - exitStartAt));
  });

  useLayoutEffect(() => {
    const root = document.documentElement;
    const updatePin = (progress) => {
      if (scrollDistance > 0 && progress > 0.001 && progress < 0.99) {
        root.classList.add("proplus-intelligence-scroll-lock");
      } else {
        root.classList.remove("proplus-intelligence-scroll-lock");
      }
    };

    const handleScroll = () => updatePin(scrollYProgress.get());
    updatePin(scrollYProgress.get());
    const unsubscribe = scrollYProgress.on("change", updatePin);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      unsubscribe();
      window.removeEventListener("scroll", handleScroll);
      root.classList.remove("proplus-intelligence-scroll-lock");
    };
  }, [scrollDistance, scrollYProgress]);

  return (
    <section
      className="proplus-intelligence-section"
      id="flipbox"
      ref={sectionRef}
      style={{
        "--horizontal-scroll-distance": `${scrollDistance}px`,
        "--horizontal-release-buffer": `${releaseBuffer}px`,
      }}
    >
      <motion.div className="proplus-intelligence-sticky" style={{ y: exitY }}>
        <div className="proplus-intelligence-section__inner">
          <header className="proplus-intelligence-section__header">
            <h2 className="proplus-intelligence-section__title">
              <span className="proplus-intelligence-section__title-main">Proven revenue GTM framework for</span>
              <span className="proplus-intelligence-section__title-emphasis">Smarter decisions.</span>
            </h2>
          </header>

          <div className="proplus-intelligence-track-viewport" ref={viewportRef}>
            <motion.div className="proplus-intelligence-grid" ref={trackRef} style={{ x: trackX }}>
              {flipboxData.map((item, index) => (
                <Link
                  to={item.link}
                  className="proplus-intelligence-card"
                  key={item.link}
                  style={{ "--card-color": item.backgroundColor, "--card-ink": item.textColor }}
                >
                  <div className="proplus-intelligence-card__content">
                    <div className="proplus-intelligence-card__label">{item.label}</div>
                    <div className="proplus-intelligence-card__header">
                      <h3 className="proplus-intelligence-card__title">{item.title}</h3>
                      <div className="proplus-intelligence-card__arrow-icon" aria-hidden="true">↗</div>
                    </div>
                    <p className="proplus-intelligence-card__description">{item.description}</p>
                    <div className="proplus-intelligence-card__metric"><span>INSIGHT</span><strong>{item.metric}</strong></div>
                    <ul className="proplus-intelligence-card__tags">
                      {item.tags.map((tag) => <li key={tag}>{tag}</li>)}
                    </ul>
                  </div>
                  <IntelligenceVisual type={item.visual} color={item.textColor} />
                  <span className="proplus-intelligence-card__index">0{index + 1}</span>
                </Link>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Flipbox;
