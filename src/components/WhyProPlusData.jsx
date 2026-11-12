import { useRef, useState } from "react";
import "./WhyProPlusData.css";

const reasons = [
  {
    title: "Make Pipeline Surprises a Thing of the Past.",
    lead: "Build a more predictable revenue pipeline with intelligence that helps you:",
    points: [
      "Spot accounts showing signs of emerging demand.",
      "Identify opportunities before they enter the sales pipeline.",
      "Focus on accounts with stronger buying potential.",
      "Give sales teams a clearer idea of where to spend their time.",
    ],
  },
  {
    title: "Turn Renewals Into Revenue Opportunities.",
    lead: "A renewal date is more than a calendar event. It's a window of opportunity.",
    points: [
      "Track upcoming technology and contract renewals.",
      "Identify opportunities 90–180 days before renewal.",
      "Spot competitor displacement opportunities.",
      "Reach accounts when switching decisions are approaching.",
    ],
  },
  {
    title: "Know What's Happening Inside Your Accounts.",
    lead: "Go beyond company profiles. Understand the technology changes shaping your target accounts.",
    points: [
      "Map technology stacks and adoption timelines.",
      "Track technology additions, removals, and changes.",
      "Identify evolving technology needs.",
      "Find opportunities hidden in account-level changes.",
    ],
  },
  {
    title: "Connect the Dots. Discover What's Next.",
    lead: "Individual signals tell you something. Connected patterns tell you much more.",
    points: [
      "Connect technology adoption, renewals, and buying behavior.",
      "Uncover patterns behind emerging demand.",
      "Identify technologies accounts may invest in next.",
      "Understand who influences buying decisions.",
    ],
  },
  {
    title: "Give Your GTM a Proprietary AI Advantage.",
    lead: "Turn millions of account-level data points into intelligence your teams can actually act on.",
    points: [
      "Apply proprietary AI to uncover meaningful buying patterns.",
      "Connect fragmented signals into a clearer opportunity picture.",
      "Surface relevant insights across target accounts.",
      "Make smarter GTM decisions with better intelligence.",
    ],
  },
];

const carouselItems = [
  { ...reasons[0], artwork: "pipeline-signals", label: "PREDICT" },
  { ...reasons[1], artwork: "renewal-window", label: "PROTECT" },
  { ...reasons[4], artwork: "account-intelligence", label: "ACCELERATE" },
];

function SignalArtwork({ artwork }) {
  return (
    <div className="why-proplus__visual" aria-hidden="true">
      <img
        src={`/assets/images/why-proplus-${artwork}.svg`}
        alt=""
        loading="lazy"
        decoding="async"
        draggable="false"
      />
    </div>
  );
}

export default function WhyProPlusData() {
  const carouselRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const previousIndex = (activeIndex - 1 + carouselItems.length) % carouselItems.length;
  const nextIndex = (activeIndex + 1) % carouselItems.length;

  const handleCarouselKeyDown = (event) => {
    if (event.key === "ArrowRight") setActiveIndex(nextIndex);
    else if (event.key === "ArrowLeft") setActiveIndex(previousIndex);
    else return;
    event.preventDefault();
  };
  const activateItem = (index) => {
    setActiveIndex(index);
    requestAnimationFrame(() => carouselRef.current?.focus({ preventScroll: true }));
  };

  return (
    <section className="why-proplus" aria-label="Why ProPlus Data">
      <div className="why-proplus__inner">
        <header className="why-proplus__section-heading">
          <h2>Why <em>ProPlus Data?</em></h2>
          <p className="why-proplus__section-intro">See the signals earlier, connect them with context, and give every go-to-market team a clearer path to revenue.</p>
        </header>
        <div ref={carouselRef} className="why-proplus__carousel" role="region" aria-label="Why ProPlus Data carousel" aria-roledescription="carousel" tabIndex={-1} onKeyDown={handleCarouselKeyDown}>
          {carouselItems.map((item, index) => {
            const isActive = index === activeIndex;
            const position = isActive ? "active" : index === previousIndex ? "previous" : "next";
            return (
              <div className={`why-proplus__slide why-proplus__slide--${position}`} key={item.artwork}>
                <article className="why-proplus__main-card" aria-hidden={!isActive} aria-roledescription="slide" aria-label={`${index + 1} of ${carouselItems.length}`}>
                  <div className="why-proplus__main-copy">
                    <span className="why-proplus__panel-kicker">{item.label} / 0{index + 1}</span>
                    <h2>{item.title}</h2>
                    <p className="why-proplus__lead">{item.lead}</p>
                    <ul>
                      {item.points.map((point) => <li key={point}>{point}</li>)}
                    </ul>
                    <div className="why-proplus__slide-count" aria-hidden="true"><span>0{index + 1}</span><i /><span>0{carouselItems.length}</span></div>
                  </div>
                  <div className="why-proplus__main-visual">
                    <div className="why-proplus__visual-label" aria-hidden="true">PROPLUS / ACCOUNT INTELLIGENCE</div>
                    <SignalArtwork artwork={item.artwork} />
                  </div>
                </article>
                <button
                  className={`why-proplus__preview why-proplus__preview--${position}`}
                  type="button"
                  onClick={() => activateItem(index)}
                  aria-label={`Show ${item.title}`}
                  aria-hidden={isActive}
                  tabIndex={isActive ? -1 : 0}
                >
                  <SignalArtwork artwork={item.artwork} />
                  <span className="why-proplus__preview-caption"><i aria-hidden="true">{position === "previous" ? "←" : "→"}</i><span>{item.label}</span></span>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
