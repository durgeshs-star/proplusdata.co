import React, { useEffect, useRef, useState } from "react";
import "./AboutSection.css";

const signalTypes = [
  { code: "01", name: "Technographics", detail: "Stack adoption and changes", style: "technology", color: "#f2a12c" },
  { code: "02", name: "Renewal", detail: "Contract windows", style: "renewal", color: "#34b897" },
  { code: "03", name: "Intent", detail: "In-market research activity", style: "intent", color: "#4e83df" },
  { code: "04", name: "Buying group", detail: "Stakeholders and role changes", style: "buying-group", color: "#8d6bd1" },
  { code: "05", name: "Next tech purchase", detail: "Emerging technology needs", style: "next-tech", color: "#20aab0" },
];

const outcomes = [
  { code: "A", title: "Prioritized accounts", detail: "Focus on strongest buying potential", color: "#4e83df" },
  { code: "B", title: "Renewal opportunities", detail: "Engage before contract decisions", color: "#34b897" },
  { code: "C", title: "Buying group insights", detail: "Reach the people shaping decisions", color: "#8d6bd1" },
  { code: "D", title: "Competitive opportunities", detail: "Spot accounts open to a switch", color: "#f2a12c" },
  { code: "E", title: "Next tech purchase", detail: "Anticipate what accounts may buy", color: "#20aab0" },
];

const pillars = [
  { number: "01", title: "Precision you can act on", text: "Verified intelligence helps sharpen targeting and gives teams a clearer basis for decisions.", tag: "ACCURATE SIGNALS" },
  { number: "02", title: "Insight across markets", text: "Explore business intelligence across 150+ countries and North America, EMEA, and APAC.", tag: "GLOBAL REACH" },
  { number: "03", title: "A more complete account view", text: "Bring prospect identification, technology context, and campaign intelligence together.", tag: "CONNECTED DATA" },
];

export default function AboutSection() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return undefined;
    if (!("IntersectionObserver" in window)) {
      setIsVisible(true);
      return undefined;
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      setIsVisible(true);
      observer.disconnect();
    }, { threshold: 0.14 });
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={`proplus-about${isVisible ? " is-visible" : ""}`} aria-labelledby="proplus-about-title">
      <div className="proplus-about__backdrop" aria-hidden="true" />
      <div className="proplus-about__inner">
        <header className="proplus-about__header">
          <div className="proplus-about__heading-row">
            <h2 id="proplus-about-title">Empowering your business with <em>data-driven intelligence.</em></h2>
            <div className="proplus-about__intro-block">
              <p>We connect accurate data, account signals, and market context to help your teams spot opportunities and make smarter decisions.</p>
            </div>
          </div>
        </header>

        <div ref={sectionRef} className="proplus-about__flow" role="img" aria-label="Technographics, renewal timing, intent, buying group changes, and next technology purchase signals flow through ProPlus intelligence to produce five actionable account insights.">
          <div className="proplus-about__flow-topline"><span>ACCOUNT INTELLIGENCE SYSTEM</span><span><i /> LIVE SIGNAL FLOW</span></div>
          <div className="proplus-about__diagram">
            <div className="proplus-about__inputs">
              <span className="proplus-about__column-label">SIGNALS IN</span>
              {signalTypes.map((signal) => (
                <div className={`proplus-about__signal proplus-about__signal--${signal.style}`} key={signal.code}>
                  <span className="proplus-about__signal-code">{signal.code}</span>
                  <span className="proplus-about__signal-copy"><strong>{signal.name}</strong><small>{signal.detail}</small></span>
                  <i aria-hidden="true" />
                </div>
              ))}
            </div>

            <div className="proplus-about__connector proplus-about__connector--in" aria-hidden="true">
              <svg viewBox="0 0 100 400" preserveAspectRatio="none">
                {signalTypes.map((signal, index) => {
                  const y = 62 + index * 76;
                  const path = `M 0 ${y} C 42 ${y}, 58 200, 100 200`;
                  return <g key={signal.code}><path className="proplus-about__lane-path" style={{ "--lane-color": signal.color }} d={path} />{isVisible && <circle className="proplus-about__lane-motion" style={{ "--lane-color": signal.color }} r="3.5"><animateMotion dur="5.2s" begin={`${0.8 + index * 0.15}s`} keyPoints="0;1;1" keyTimes="0;0.24;1" calcMode="linear" repeatCount="indefinite" path={path} /></circle>}</g>;
                })}
                <circle className="proplus-about__lane-hub" cx="100" cy="200" r="4" />
              </svg>
            </div>

            <div className="proplus-about__engine">
              <div className="proplus-about__engine-rings" aria-hidden="true"><i /><i /></div>
              <img className="proplus-about__engine-logo" src="/assets/images/logo.png" alt="ProPlus Data" />
              <strong>Revenue GTM Framework</strong>
              <div className="proplus-about__engine-bar"><i /><i /><i /><i /><i /><i /><i /></div>
            </div>

            <div className="proplus-about__connector proplus-about__connector--out" aria-hidden="true">
              <svg viewBox="0 0 100 400" preserveAspectRatio="none">
                {outcomes.map((outcome, index) => {
                  const y = 62 + index * 76;
                  const path = `M 0 200 C 42 200, 58 ${y}, 100 ${y}`;
                  return <g key={outcome.code}><path className="proplus-about__lane-path" style={{ "--lane-color": outcome.color }} d={path} />{isVisible && <circle className="proplus-about__lane-motion" style={{ "--lane-color": outcome.color }} r="3.5"><animateMotion dur="5.2s" begin={`${2.2 + index * 0.15}s`} keyPoints="0;1;1" keyTimes="0;0.24;1" calcMode="linear" repeatCount="indefinite" path={path} /></circle>}</g>;
                })}
                <circle className="proplus-about__lane-hub" cx="0" cy="200" r="4" />
              </svg>
            </div>

            <div className="proplus-about__outputs">
              <span className="proplus-about__column-label">DECISIONS OUT</span>
              {outcomes.map((outcome) => (
                <div className="proplus-about__outcome" key={outcome.code}>
                  <span>{outcome.code}</span><div><strong>{outcome.title}</strong><small>{outcome.detail}</small></div><i aria-hidden="true">↗</i>
                </div>
              ))}
            </div>
          </div>
          <div className="proplus-about__flow-footer"><span>DATA</span><i /><span>CONTEXT</span><i /><span>OPPORTUNITY</span></div>
        </div>

        <div className="proplus-about__pillars">
          {pillars.map((pillar) => (
            <article className="proplus-about__pillar" key={pillar.number}>
              <div className="proplus-about__pillar-top"><span className="proplus-about__pillar-number">{pillar.number}</span><div className="proplus-about__pillar-signal" aria-hidden="true"><i /><i /><i /></div></div>
              <h3>{pillar.title}</h3><p>{pillar.text}</p>
              <div className="proplus-about__pillar-bottom"><small>{pillar.tag}</small><span aria-hidden="true" /></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
