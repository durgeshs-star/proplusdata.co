import React, { useEffect, useRef, useState } from "react";
import "./BrandSection.css";

const brands = [
  { img: "assets/images/brand/Databricks Logo.svg", link: "", alt: "Databricks logo" },
  { img: "assets/images/brand/Datarade logo.svg", link: "", alt: "Datarade logo" },
  { img: "assets/images/brand/NEUDATA.svg", link: "", alt: "NEUDATA logo" },
  { img: "assets/images/brand/SAP Marketplace.svg", link: "", alt: "SAP Marketplace logo" },
  { img: "assets/images/brand/Google Cloud Analytics Hub Logo.svg", link: "", alt: "Google Cloud Analytics Hub logo" },
];

const BrandSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

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

    if ("IntersectionObserver" in window) {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) revealIfVisible();
        },
        { threshold: 0.15 }
      );
      observer.observe(section);
    }

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
      className={`ppd-marketplace-section${isVisible ? " is-visible" : ""}`}
      aria-labelledby="ppd-marketplace-title"
    >
      <div className="ppd-marketplace-grid" aria-hidden="true" />
      <div className="ppd-marketplace-glow" aria-hidden="true" />

      <div className="ppd-marketplace-container">
        <header className="ppd-marketplace-header">
          <p className="ppd-marketplace-eyebrow">
            <span className="ppd-marketplace-status" aria-hidden="true" />
            Data Ecosystem
          </p>
          <h2 className="ppd-marketplace-title" id="ppd-marketplace-title">
            Available on leading data marketplaces
          </h2>
          <div className="ppd-marketplace-indicator" aria-hidden="true">
            <span />
            <i />
            <span />
          </div>
        </header>

        <div className="ppd-marketplace-logos">
          {brands.map((brand, index) => (
            <div
              key={brand.img}
              className="ppd-marketplace-item"
              style={{ "--marketplace-index": index }}
            >
              <img src={brand.img} alt={brand.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandSection;

