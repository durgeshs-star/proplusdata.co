import React, { useEffect, useState } from "react";

export default function SolutionStoryCarousel({
  items,
  ariaLabel,
  paginationLabel,
  initialIndex = 1,
}) {
  const [activeIndex, setActiveIndex] = useState(
    Math.min(initialIndex, items.length - 1)
  );
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    if (isHovered || isFocused || items.length < 2) return undefined;

    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const timer = window.setInterval(() => {
      if (!document.hidden && !motionPreference.matches) {
        setActiveIndex((currentIndex) => (currentIndex + 1) % items.length);
      }
    }, 5000);

    return () => window.clearInterval(timer);
  }, [activeIndex, isFocused, isHovered, items.length]);

  const visibleSlides = items.length > 2
    ? [
        { index: (activeIndex - 1 + items.length) % items.length, position: "prev" },
        { index: activeIndex, position: "active" },
        { index: (activeIndex + 1) % items.length, position: "next" },
      ]
    : items.map((_, index) => ({
        index,
        position: index === activeIndex ? "active" : "next",
      }));

  return (
    <div
      className="ppd-renewal-strategic-carousel ppd-solution-story-carousel"
      role="region"
      aria-label={ariaLabel}
      aria-roledescription="carousel"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocusCapture={() => setIsFocused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setIsFocused(false);
        }
      }}
    >
      <div className="ppd-renewal-strategic-track" role="group">
        {visibleSlides.map(({ index, position }) => {
          const item = items[index];
          const isActive = index === activeIndex;

          return (
            <article
              className={`ppd-renewal-strategic-slide ppd-solution-story-slide ppd-solution-story-slide--${position}${isActive ? " is-active" : ""}`}
              key={item.title}
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${items.length}: ${item.title}`}
              aria-current={isActive ? "step" : undefined}
            >
              <div className="ppd-renewal-strategic-slide-top">
                <span>{item.label}</span>
              </div>
              <h3>{item.title}</h3>
              <p className="ppd-renewal-strategic-slide-copy">{item.description}</p>
              {item.detail && (
                <p className="ppd-renewal-strategic-slide-copy ppd-solution-story-slide-detail">
                  {item.detail}
                </p>
              )}
              <div
                className={`ppd-renewal-action-visual ppd-renewal-action-visual--${item.visualType || "conversation"}`}
                aria-hidden="true"
              >
                <div className="ppd-renewal-action-visual-heading">
                  <span>{item.visualLabel}</span>
                  <i />
                </div>
                <div className="ppd-renewal-action-visual-rows">
                  {item.visualItems.map((visualItem, visualIndex) => (
                    <div className="ppd-renewal-action-visual-row" key={visualItem.label}>
                      <span className="ppd-renewal-action-visual-mark">
                        {visualIndex === 0 ? "●" : "○"}
                      </span>
                      <b>{visualItem.label}</b>
                      <span className="ppd-renewal-action-visual-value">
                        {visualItem.value}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="ppd-renewal-action-visual-progress">
                  <span style={{ "--renewal-progress": `${48 + (index % 3) * 18}%` }} />
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <div className="ppd-renewal-strategic-controls">
        <div className="ppd-renewal-strategic-pagination" role="group" aria-label={paginationLabel}>
          {items.map((item, index) => (
            <button
              type="button"
              key={item.title}
              aria-label={`Go to slide ${index + 1}: ${item.title}`}
              aria-pressed={index === activeIndex}
              className={index === activeIndex ? "is-active" : ""}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
        <span className="ppd-renewal-strategic-count" aria-live="polite">
          {String(activeIndex + 1).padStart(2, "0")} <i /> {String(items.length).padStart(2, "0")}
        </span>
      </div>
    </div>
  );
}
