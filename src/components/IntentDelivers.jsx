import React, { useEffect, useState } from "react";

const solutions = [
  {
    label: "01 / Discover",
    title: "See the full technology picture.",
    description:
      "Gain comprehensive visibility into the technology environments of prospects. From software to hardware, understand their tech preferences, integration ecosystems, and deployment cycles to perfectly align your offerings.",
    visualLabel: "TECHNOLOGY CONTEXT",
    visualItems: ["Installed technology", "Adoption patterns"],
    visualType: "timeline",
  },
  {
    label: "02 / Prioritize",
    title: "Focus on accounts ready to invest.",
    description:
      "Forecast technology demand with behavioral insights, identify accounts most likely to buy, and engage proactively as needs emerge.",
    visualLabel: "IN-MARKET ACCOUNTS",
    visualItems: ["Demand forecast", "Account priority"],
    visualType: "conversation",
  },
  {
    label: "03 / Activate",
    title: "Make every GTM conversation relevant.",
    description:
      "Tailor go-to-market and account-based campaigns to each company's actual technology stack, making outreach more relevant.",
    visualLabel: "RELEVANT ENGAGEMENT",
    visualItems: ["Account context", "Campaign alignment"],
    visualType: "growth",
  },
];

const IntentDelivers = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    if (isHovered || isFocused) return undefined;

    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const timer = window.setInterval(() => {
      if (!document.hidden && !motionPreference.matches) {
        setActiveIndex((currentIndex) => (currentIndex + 1) % solutions.length);
      }
    }, 5000);

    return () => window.clearInterval(timer);
  }, [isFocused, isHovered]);

  return (
    <section className="ppd-renewal-strategic ppd-intent-deliver" aria-labelledby="ppd-intent-points-title">
      <div className="ppd-solution-shell">
        <header className="ppd-renewal-strategic-header">
          <p className="ppd-renewal-strategic-eyebrow">Intent data</p>
          <h2 className="ppd-renewal-strategic-heading" id="ppd-intent-points-title">
            What We Deliver Through <span>Intent Data.</span>
          </h2>
          <p className="ppd-renewal-strategic-introduction">
            Turn buyer signals into a more relevant plan to understand, prioritize,
            and engage the right accounts.
          </p>
        </header>

        <div
          className="ppd-renewal-strategic-carousel"
          role="region"
          aria-label="Intent data capabilities"
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
            {solutions.map((service, index) => {
              const isActive = index === activeIndex;

              return (
                <article
                  className={`ppd-renewal-strategic-slide${isActive ? " is-active" : ""}`}
                  key={service.title}
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${index + 1} of ${solutions.length}: ${service.title}`}
                  aria-current={isActive ? "step" : undefined}
                >
                  <div className="ppd-renewal-strategic-slide-top">
                    <span>{service.label}</span>
                  </div>
                  <h3>{service.title}</h3>
                  <p className="ppd-renewal-strategic-slide-copy">{service.description}</p>
                  <div
                    className={`ppd-renewal-action-visual ppd-renewal-action-visual--${service.visualType}`}
                    aria-hidden="true"
                  >
                    <div className="ppd-renewal-action-visual-heading">
                      <span>{service.visualLabel}</span>
                      <i />
                    </div>
                    <div className="ppd-renewal-action-visual-rows">
                      {service.visualItems.map((item, itemIndex) => (
                        <div className="ppd-renewal-action-visual-row" key={item}>
                          <span className="ppd-renewal-action-visual-mark">
                            {itemIndex === 0 ? "●" : "○"}
                          </span>
                          <b>{item}</b>
                          <span className="ppd-renewal-action-visual-value">
                            {service.visualType === "timeline"
                              ? itemIndex === 0 ? "Mapped" : "Tracked"
                              : service.visualType === "conversation"
                                ? itemIndex === 0 ? "Forecast" : "Prioritized"
                                : itemIndex === 0 ? "Matched" : "Aligned"}
                          </span>
                        </div>
                      ))}
                    </div>
                    <div className="ppd-renewal-action-visual-progress">
                      <span style={{ "--renewal-progress": `${48 + index * 18}%` }} />
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
          <div className="ppd-renewal-strategic-controls">
            <div className="ppd-renewal-strategic-pagination" role="group" aria-label="Choose an intent data capability">
              {solutions.map((service, index) => (
                <button
                  type="button"
                  key={service.title}
                  aria-label={`Show capability ${index + 1}: ${service.title}`}
                  aria-pressed={index === activeIndex}
                  className={index === activeIndex ? "is-active" : ""}
                  onClick={() => setActiveIndex(index)}
                />
              ))}
            </div>
            <span className="ppd-renewal-strategic-count" aria-hidden="true">
              0{activeIndex + 1} <i /> 0{solutions.length}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntentDelivers;
