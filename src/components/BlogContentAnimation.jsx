import React from "react";
import "./BlogContentAnimation.css";

const scenes = {
  expansion: {
    title: "Expansion starts with account context",
    steps: ["Existing account", "Expansion signals", "Growth opportunity"],
    notes: ["Know the relationship", "Spot readiness", "Grow with relevance"],
  },
  renewalTiming: {
    title: "Make the renewal window visible",
    steps: ["Contract timeline", "100-day window", "Timely action"],
    notes: ["Track key dates", "Prioritize accounts", "Start the right talk"],
  },
  renewal: {
    title: "Turn renewal signals into action",
    steps: ["Technology in use", "Renewal signal", "Revenue opportunity"],
    notes: ["Understand the stack", "See the timing", "Engage with context"],
  },
  customerSuccess: {
    title: "Connect customer health to growth",
    steps: ["Customer health", "Risk and intent", "Retention plan"],
    notes: ["Read account signals", "Find the moment", "Protect the value"],
  },
  audience: {
    title: "Reach the full buying group",
    steps: ["Target account", "Buying group", "Influence coverage"],
    notes: ["Map the account", "Understand roles", "Coordinate outreach"],
  },
  technographics: {
    title: "Technology data works as a timeline",
    steps: ["Technology stack", "Detected change", "GTM relevance"],
    notes: ["See what is used", "Understand what changed", "Respond in context"],
  },
  predictive: {
    title: "Move from activity to probability",
    steps: ["Market activity", "Purchase signals", "Next best account"],
    notes: ["Observe behavior", "Find the pattern", "Prioritize earlier"],
  },
  intent: {
    title: "Put intent signals in context",
    steps: ["Topic research", "Rising intent", "Sales priority"],
    notes: ["See active interest", "Validate account fit", "Focus the team"],
  },
  competitive: {
    title: "Find the opening in a competitor account",
    steps: ["Competitor stack", "Renewal window", "Displacement path"],
    notes: ["Map the incumbent", "Understand timing", "Lead with relevance"],
  },
  arr: {
    title: "Build predictable growth from renewals",
    steps: ["Renewal insight", "Customer expansion", "Predictable ARR"],
    notes: ["Protect the base", "Find new value", "Grow with confidence"],
  },
  enterprise: {
    title: "Plan around signals that are changing",
    steps: ["Market context", "Account priority", "Predictable growth"],
    notes: ["Read the market", "Reassess focus", "Adjust with evidence"],
  },
};

const symbols = [
  <><path d="M-12 2h24M-12 9h16M-12-5h20" /></>,
  <><circle cx="0" cy="0" r="11" /><path d="M0-6v12M-6 0h12" /></>,
  <><path d="m-11 0 7 7 15-15" /></>,
];

export default function BlogContentAnimation({ variant = "renewal" }) {
  const scene = scenes[variant] || scenes.renewal;
  const gradientKey = React.useId().replace(/:/g, "");

  return (
    <svg
      className="ppd-blog-content-animation"
      viewBox="0 0 1000 470"
      role="img"
      aria-label={scene.title}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={`blog-flow-${gradientKey}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#173b83" />
          <stop offset="1" stopColor="#138b80" />
        </linearGradient>
        <radialGradient id={`blog-glow-${gradientKey}`}>
          <stop stopColor="#e7a03a" stopOpacity=".14" />
          <stop offset="1" stopColor="#e7a03a" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width="1000" height="470" rx="28" fill="#f7f8f6" />
      <circle cx="820" cy="72" r="270" fill={`url(#blog-glow-${gradientKey})`} />
      <path d="M0 118H1000M0 396H1000" stroke="#e7edf0" />
      <text x="58" y="63" className="ppd-blog-animation-eyebrow">PROPLUS DATA · INSIGHTS</text>
      <text x="58" y="103" className="ppd-blog-animation-title">{scene.title}</text>
      <g transform="translate(873 55)">
        <circle r="7" fill="#168b7e" className="ppd-blog-animation-pulse" />
        <text x="17" y="5" className="ppd-blog-animation-live">LIVE SIGNALS</text>
      </g>

      <path d="M300 260H370M630 260H700" stroke={`url(#blog-flow-${gradientKey})`} strokeWidth="4" strokeDasharray="8 10" className="ppd-blog-animation-path" />
      {[335, 665].map((x) => (
        <g key={x} className="ppd-blog-animation-beacon" transform={`translate(${x} 260)`}>
          <circle r="13" fill="#fff" stroke="#168b7e" strokeWidth="2" />
          <path d="m-4 0 3 3 6-7" fill="none" stroke="#168b7e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      ))}

      {scene.steps.map((step, index) => {
        const x = 55 + index * 315;
        const accent = index === 1 ? "#e7a03a" : "#173b83";
        return (
          <g key={step} className={`ppd-blog-animation-card ppd-blog-animation-card--${index + 1}`} transform={`translate(${x} 164)`}>
            <rect width="270" height="190" rx="19" fill="#fff" stroke="#dfe7eb" />
            <text x="22" y="32" className="ppd-blog-animation-step">0{index + 1} / SIGNAL</text>
            <circle cx="53" cy="91" r="25" fill={accent} fillOpacity=".1" />
            <g transform="translate(53 91)" fill="none" stroke={accent} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">{symbols[index]}</g>
            <text x="91" y="87" className="ppd-blog-animation-label">{step}</text>
            <text x="91" y="111" className="ppd-blog-animation-note">{scene.notes[index]}</text>
            <rect x="22" y="144" width="226" height="8" rx="4" fill="#e9eef3" />
            <rect x="22" y="144" width={index === 0 ? 126 : index === 1 ? 168 : 210} height="8" rx="4" fill={accent} className="ppd-blog-animation-progress" />
            <circle cx="244" cy="31" r="4" fill={accent} className="ppd-blog-animation-pulse" style={{ animationDelay: `${index * 0.55}s` }} />
          </g>
        );
      })}

      <text x="58" y="435" className="ppd-blog-animation-footer">ACCOUNT CONTEXT</text>
      <text x="500" y="435" textAnchor="middle" className="ppd-blog-animation-footer">TIMING</text>
      <text x="942" y="435" textAnchor="end" className="ppd-blog-animation-footer">INFORMED ACTION</text>
    </svg>
  );
}
