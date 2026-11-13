import React, { useEffect, useRef, useState } from "react";
import "./ProvenIndustries.css";
import cloudCommunicationsImage from "../assets/images/cloud-communications.svg";

const industries = [
  { name: "Cloud", image: "photo-1451187580459-43490279c0fa" },
  { name: "Logistics", image: "photo-1553413077-190dd305871c" },
  { name: "IT Services & Consulting", image: "photo-1522071820081-009f0129c71c" },
  { name: "Telecommunications", image: "photo-1516321318423-f06f85e504b3" },
  { name: "SaaS", image: "photo-1460925895917-afdab827c52f" },
  { name: "FinTech & FinServe", image: "photo-1563013544-824ae1b704d3" },
  { name: "Endpoint Security", image: "photo-1550751827-4bd374c3f58b" },
  { name: "Computer Hardware", image: "photo-1591488320449-011701bb6704" },
  { name: "Computer Networking", image: "photo-1518770660439-4636190af475" },
  { name: "Data Center", image: "photo-1544197150-b99a580bb7a8" },
  { name: "CAD", image: "photo-1581092921461-eab62e97a780" },
  { name: "Cloud Communications", image: cloudCommunicationsImage },
];

export default function ProvenIndustries() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [atEnd, setAtEnd] = useState(false);
  const [progress, setProgress] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return undefined;
    if (!("IntersectionObserver" in window)) {
      setVisible(true);
      return undefined;
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.12 });
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible || paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    const timer = window.setInterval(() => {
      const track = trackRef.current;
      if (!track) return;
      const isAtEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 2;
      track.scrollTo({ left: isAtEnd ? 0 : track.scrollLeft + track.clientWidth * .82, behavior: "smooth" });
    }, 4500);
    return () => window.clearInterval(timer);
  }, [visible, paused]);

  const handleSliderScroll = () => {
    const track = trackRef.current;
    const firstCard = track?.querySelector(".ppd-proven-industries__card");
    if (!track || !firstCard) return;
    const gap = Number.parseFloat(getComputedStyle(track).columnGap) || 0;
    setActiveSlide(Math.min(industries.length - 1, Math.round(track.scrollLeft / (firstCard.getBoundingClientRect().width + gap))));
    setAtEnd(track.scrollLeft + track.clientWidth >= track.scrollWidth - 2);
    setProgress(track.scrollWidth > track.clientWidth ? (track.scrollLeft / (track.scrollWidth - track.clientWidth)) * 100 : 100);
  };

  const moveSlider = (direction) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({ left: direction * track.clientWidth * .82, behavior: "smooth" });
  };

  return (
    <section
      ref={sectionRef}
      className={`ppd-proven-industries${visible ? " is-visible" : ""}`}
      aria-label="Industries served"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={(event) => {
        if (!event.currentTarget.contains(document.activeElement)) setPaused(false);
      }}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false);
      }}
      onTouchStart={() => setPaused(true)}
      onTouchEnd={() => setPaused(false)}
    >
      <div className="ppd-proven-industries__grid" aria-hidden="true" />
      <div className="ppd-proven-industries__viewport">
      <div className="ppd-proven-industries__list" ref={trackRef} onScroll={handleSliderScroll} role="region" aria-label="Industries we serve" aria-roledescription="carousel" tabIndex={0}>
        {industries.map((industry, index) => (
          <article className="ppd-proven-industries__card" key={industry.name} role="group" aria-roledescription="slide" aria-label={`${index + 1} of ${industries.length}: ${industry.name}`} style={{ "--industry-index": index }}>
            <div className="ppd-proven-industries__art">
              <img src={industry.image.startsWith("photo-") ? `https://images.unsplash.com/${industry.image}?auto=format&fit=crop&w=900&q=82` : industry.image} alt={`${industry.name} industry`} loading={index < 4 ? "eager" : "lazy"} />
              <span className="ppd-proven-industries__image-shade" />
            </div>
            <h3>{industry.name}</h3>
          </article>
        ))}
      </div>
      </div>
      <div className="ppd-proven-industries__controls">
        <span className="ppd-proven-industries__count">{String(activeSlide + 1).padStart(2, "0")} <i /> {String(industries.length).padStart(2, "0")}</span>
        <div className="ppd-proven-industries__progress" aria-hidden="true"><span style={{ width: `${progress}%` }} /></div>
        <div className="ppd-proven-industries__buttons">
          <button className="ppd-proven-industries__previous" type="button" onClick={() => moveSlider(-1)} disabled={activeSlide === 0} aria-label="Previous industries">
            <svg viewBox="0 0 20 20" aria-hidden="true"><path d="m12.5 4.5-5.5 5.5 5.5 5.5" /></svg><span>Previous</span>
          </button>
          <button className="ppd-proven-industries__next" type="button" onClick={() => moveSlider(1)} disabled={atEnd} aria-label="Next industries">
            <span>Next</span><svg viewBox="0 0 20 20" aria-hidden="true"><path d="m7.5 4.5 5.5 5.5-5.5 5.5" /></svg>
          </button>
        </div>
      </div>
    </section>
  );
}
