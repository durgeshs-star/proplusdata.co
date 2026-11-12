import React, { useEffect, useState } from "react";

const renewalActions = [
  {
    label: "01 / Detect",
    title: "See the renewal window.",
    description:
      "Surface expiring contracts across current and target accounts, and spot the milestones that signal a buying decision is approaching.",
    visualLabel: "UPCOMING RENEWALS",
    visualItems: ["Northstar Health", "Meridian Group"],
    visualType: "timeline",
  },
  {
    label: "02 / Engage",
    title: "Reach out before decisions are made.",
    description:
      "Align outreach to customer contract milestones with a timely message grounded in each account's technology context.",
    visualLabel: "RELEVANT OUTREACH",
    visualItems: ["Contract milestone", "Conversation ready"],
    visualType: "conversation",
  },
  {
    label: "03 / Grow",
    title: "Turn timing into account growth.",
    description:
      "Use renewal patterns to get ahead of churn, strengthen customer relationships, and uncover opportunities to expand.",
    visualLabel: "ACCOUNT OPPORTUNITY",
    visualItems: ["Retention", "Expansion"],
    visualType: "growth",
  },
];

const StrategicValue = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    if (isHovered || isFocused) return undefined;

    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const timer = window.setInterval(() => {
      if (!document.hidden && !motionPreference.matches) {
        setActiveIndex((currentIndex) => (currentIndex + 1) % renewalActions.length);
      }
    }, 5000);

    return () => window.clearInterval(timer);
  }, [isFocused, isHovered]);

  const showAction = (index) => {
    setActiveIndex((index + renewalActions.length) % renewalActions.length);
  };

  return (
    <section className="ppd-renewal-strategic" aria-labelledby="ppd-renewal-strategic-title">
      <div className="ppd-solution-shell">
        <header className="ppd-renewal-strategic-header">
          <p className="ppd-renewal-strategic-eyebrow">Renewal intelligence</p>
          <h2 className="ppd-renewal-strategic-heading" id="ppd-renewal-strategic-title">
            From signal to <span>action.</span>
          </h2>
          <p className="ppd-renewal-strategic-introduction">
            Turn renewal timing into a relevant conversation, then build a stronger
            customer relationship.
          </p>
        </header>

        <div
          className="ppd-renewal-strategic-carousel"
          role="region"
          aria-label="Renewal action steps"
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
            {renewalActions.map((action, index) => {
              const isActive = index === activeIndex;

              return (
                <article
                  className={`ppd-renewal-strategic-slide${isActive ? " is-active" : ""}`}
                  key={action.label}
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${index + 1} of ${renewalActions.length}: ${action.title}`}
                  aria-current={isActive ? "step" : undefined}
                >
                  <div className="ppd-renewal-strategic-slide-top">
                    <span>{action.label}</span>
                  </div>
                  <h3>{action.title}</h3>
                  <p className="ppd-renewal-strategic-slide-copy">{action.description}</p>
                  <div
                    className={`ppd-renewal-action-visual ppd-renewal-action-visual--${action.visualType}`}
                    aria-hidden="true"
                  >
                    <div className="ppd-renewal-action-visual-heading">
                      <span>{action.visualLabel}</span>
                      <i />
                    </div>
                    <div className="ppd-renewal-action-visual-rows">
                      {action.visualItems.map((item, itemIndex) => (
                        <div className="ppd-renewal-action-visual-row" key={item}>
                          <span className="ppd-renewal-action-visual-mark">
                            {itemIndex === 0 ? "●" : "○"}
                          </span>
                          <b>{item}</b>
                          <span className="ppd-renewal-action-visual-value">
                            {action.visualType === "timeline"
                              ? `${42 + itemIndex * 26} days`
                              : action.visualType === "conversation"
                                ? itemIndex === 0
                                  ? "Matched"
                                  : "Ready"
                                : itemIndex === 0
                                  ? "Protect"
                                  : "Expand"}
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
            <div className="ppd-renewal-strategic-pagination" role="group" aria-label="Choose a renewal action">
              {renewalActions.map((action, index) => (
                <button
                  type="button"
                  key={action.label}
                  aria-label={`Go to step ${index + 1}: ${action.title}`}
                  aria-pressed={index === activeIndex}
                  className={index === activeIndex ? "is-active" : ""}
                  onClick={() => showAction(index)}
                />
              ))}
            </div>
            <span className="ppd-renewal-strategic-count">
              0{activeIndex + 1} <i /> 0{renewalActions.length}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrategicValue;
