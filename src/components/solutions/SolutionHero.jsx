import React from "react";

export default function SolutionHero({ eyebrow, title, image, imageAlt, visual, children }) {
  return (
    <section className="ppd-solution-hero" aria-label={eyebrow}>
      <div className="ppd-solution-hero__grid" aria-hidden="true" />
      <div className="ppd-solution-shell">
        <div className="ppd-solution-hero__layout">
          <div className="ppd-solution-hero__content">
            <p className="ppd-solution-eyebrow">
              <span aria-hidden="true" />
              {eyebrow}
            </p>
            <h1 className="ppd-solution-title">{title}</h1>
            <div className="ppd-solution-copy">{children}</div>
            <span className="ppd-solution-accent" aria-hidden="true" />
          </div>
          <div className="ppd-solution-visual">
            {image ? (
              <img src={image} alt={imageAlt} />
            ) : (
              visual
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
