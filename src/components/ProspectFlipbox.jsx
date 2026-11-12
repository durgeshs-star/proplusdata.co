import React, { useEffect, useRef, useState } from "react";
import "./ProspectFlipbox.css";

const flipboxData = [
  {
    title: "Cutting-Edge Strategies",
    description: "We leverage advanced data intelligence to uncover new business opportunities and maximize ROI."
  },
  {
    title: "Data-Driven Success",
    description: "Transform raw data into a strategic asset, guiding your business toward sustainable growth."
  },
  {
    title: "Unmatched Expertise",
    description: "Our team delivers precision, relevance, and high-value insights tailored to your industry needs."
  },
  {
    title: "Commitment to Excellence",
    description: "With intelligence, accuracy, and innovation at our core, we drive measurable success for our partners."
  }
];

const ProspectFlipbox = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeItem, setActiveItem] = useState(0);
  const [isPointerOverTrack, setIsPointerOverTrack] = useState(false);

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
      { threshold: 0.15 }
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

  useEffect(() => {
    if (!isVisible || isPointerOverTrack || window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return undefined;
    const interval = window.setInterval(() => {
      setActiveItem((current) => (current + 1) % flipboxData.length);
    }, 1375);
    return () => window.clearInterval(interval);
  }, [isVisible, isPointerOverTrack]);

  return (
    <section
      ref={sectionRef}
      className={`ppd-framework${isVisible ? " is-visible" : ""}`}
      aria-labelledby="ppd-framework-title"
    >
      <div className="ppd-framework__grid" aria-hidden="true" />
      <div className="ppd-framework__ambient" aria-hidden="true" />

      <div className="ppd-framework__container">
        <header className="ppd-framework__header">
          <p className="ppd-framework__eyebrow">
            <span className="ppd-framework__status" aria-hidden="true" />
            Our Approach
          </p>
          <h2 className="ppd-framework__title" id="ppd-framework-title">
            <span>Built on intelligence.</span>
            <span>Driven by precision.</span>
          </h2>
        </header>

        <ol
          className="ppd-framework__track"
          aria-label="Four principles in our approach"
          onMouseLeave={() => setIsPointerOverTrack(false)}
        >
          {flipboxData.map((item, index) => (
            <li
              className={`ppd-framework__item${activeItem === index ? " is-active" : ""}`}
              key={item.title}
              onMouseEnter={() => {
                setIsPointerOverTrack(true);
                setActiveItem(index);
              }}
            >
              <span className="ppd-framework__number" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="ppd-framework__node" aria-hidden="true" />
              <div className="ppd-framework__content">
                <h3 className="ppd-framework__item-title">{item.title}</h3>
                <p className="ppd-framework__description">{item.description}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="ppd-framework__flow" aria-hidden="true">
          <span />
          Data
          <i />
          Intelligence
          <i />
          Impact
          <span />
        </div>
      </div>
    </section>
  );
};

export default ProspectFlipbox;
