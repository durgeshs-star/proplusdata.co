import React from "react";
import "./SolutionIllustration.css";

const solutionScenes = {
  contact: {
    label: "Contact intelligence",
    metric: "Verified profiles",
    value: "24,680",
    signal: "92% match quality",
    rows: [
      ["Aarav Mehta", "VP, Information Technology", "Verified"],
      ["Maya Chen", "Chief Digital Officer", "Verified"],
      ["Sofia Patel", "Director, Security", "New match"],
    ],
    columns: ["Decision maker", "Role", "Profile status"],
  },
  intent: {
    label: "Intent intelligence",
    metric: "Account activity",
    value: "High intent",
    signal: "Buying window open",
    rows: [
      ["Cloud migration", "Research rising", "Today"],
      ["Data security", "3 topics viewed", "2 days ago"],
      ["Infrastructure", "Repeat activity", "This week"],
    ],
    columns: ["Topic", "Signal", "Last seen"],
  },
  purchase: {
    label: "Next tech purchase",
    metric: "Purchase propensity",
    value: "84 / 100",
    signal: "Likely in next 90 days",
    rows: [
      ["Cloud platform", "Evaluating", "High"],
      ["Security stack", "Replacement", "High"],
      ["Data systems", "Expansion", "Medium"],
    ],
    columns: ["Category", "Buying motion", "Fit"],
  },
  renewal: {
    label: "Renewal intelligence",
    metric: "Upcoming renewals",
    value: "18 accounts",
    signal: "Next milestone · 42 days",
    rows: [
      ["Northstar Health", "Cloud services", "42 days"],
      ["Meridian Group", "CRM platform", "68 days"],
      ["Alto Systems", "Security suite", "91 days"],
    ],
    columns: ["Account", "Technology", "Renewal"],
  },
  event: {
    label: "Audience intelligence",
    metric: "Audience fit",
    value: "94%",
    signal: "ICP alignment",
    rows: [
      ["Technology leaders", "Enterprise", "Strong fit"],
      ["Revenue operations", "Mid-market", "Strong fit"],
      ["Security decision makers", "Enterprise", "Good fit"],
    ],
    columns: ["Audience segment", "Company size", "Match"],
  },
  buying: {
    label: "Buying group intelligence",
    metric: "Committee coverage",
    value: "6 of 8 roles",
    signal: "2 stakeholders to map",
    rows: [
      ["Maya Chen", "Economic buyer", "Engaged"],
      ["Aarav Mehta", "Technical evaluator", "Mapped"],
      ["Sofia Patel", "Security lead", "New contact"],
    ],
    columns: ["Stakeholder", "Buying role", "Status"],
  },
  demand: {
    label: "Demand generation",
    metric: "Qualified pipeline",
    value: "$2.4M",
    signal: "32 accounts in motion",
    rows: [
      ["Northstar Health", "Lead verified", "Ready"],
      ["Meridian Group", "Intent confirmed", "Ready"],
      ["Alto Systems", "In nurture", "Building"],
    ],
    columns: ["Account", "Latest signal", "Stage"],
  },
};

function getScene(category) {
  const normalized = category.toLowerCase();
  if (normalized.includes("contact")) return solutionScenes.contact;
  if (normalized.includes("intent")) return solutionScenes.intent;
  if (normalized.includes("purchase")) return solutionScenes.purchase;
  if (normalized.includes("renewal")) return solutionScenes.renewal;
  if (normalized.includes("event")) return solutionScenes.event;
  if (normalized.includes("buying")) return solutionScenes.buying;
  return solutionScenes.demand;
}

export default function SolutionIllustration({ category, compact = false }) {
  const scene = getScene(category);

  return (
    <div
      className={`ppd-solution-illustration${compact ? " ppd-solution-illustration--compact" : ""}`}
      aria-label={`${scene.label} product preview`}
      role="img"
    >
      <div className="ppd-solution-illustration__window">
        <div className="ppd-solution-illustration__topbar">
          <span className="ppd-solution-illustration__brand-mark" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
          <span className="ppd-solution-illustration__brand">PROPLUS <b>INTELLIGENCE</b></span>
          <span className="ppd-solution-illustration__live"><i /> Live signals</span>
        </div>

        <div className="ppd-solution-illustration__body">
          <aside className="ppd-solution-illustration__rail" aria-hidden="true">
            <i className="is-current" />
            <i />
            <i />
            <i />
          </aside>

          <div className="ppd-solution-illustration__workspace">
            <div className="ppd-solution-illustration__heading">
              <div>
                <span>ACCOUNT WORKSPACE</span>
                <strong>{scene.label}</strong>
              </div>
              <span className="ppd-solution-illustration__period">Last 90 days⌄</span>
            </div>

            <div className="ppd-solution-illustration__overview">
              <div className="ppd-solution-illustration__metric">
                <span>{scene.metric}</span>
                <strong>{scene.value}</strong>
                <small><i /> {scene.signal}</small>
              </div>
              <div className="ppd-solution-illustration__chart" aria-hidden="true">
                <div className="ppd-solution-illustration__chart-labels"><span>Account activity</span><b>+28%</b></div>
                <div className="ppd-solution-illustration__bars">
                  {[34, 48, 41, 62, 55, 74, 65, 92, 72, 100, 84, 108].map((height, index) => (
                    <i key={index} style={{ "--bar-height": `${height}px`, "--bar-index": index }} />
                  ))}
                </div>
              </div>
            </div>

            <div className="ppd-solution-illustration__table">
              <div className="ppd-solution-illustration__table-head">
                {scene.columns.map((column) => <span key={column}>{column}</span>)}
              </div>
              {scene.rows.map((row, index) => (
                <div className="ppd-solution-illustration__row" key={row[0]}>
                  <strong><i className={`ppd-solution-illustration__avatar ppd-solution-illustration__avatar--${index + 1}`} />{row[0]}</strong>
                  <span>{row[1]}</span>
                  <span className={index === 0 ? "is-positive" : ""}>{row[2]}</span>
                </div>
              ))}
            </div>
          </div>

          <aside className="ppd-solution-illustration__insight">
            <span className="ppd-solution-illustration__insight-label">FIT SCORE</span>
            <strong>86</strong>
            <span>Strong account fit</span>
            <div className="ppd-solution-illustration__score" aria-hidden="true"><i /></div>
            <p>Signals aligned to your ideal customer profile.</p>
            <div className="ppd-solution-illustration__tags"><i /> Recent activity <i /> Verified data</div>
          </aside>
        </div>

        <div className="ppd-solution-illustration__footer">
          <span><i /> Updated moments ago</span>
          <span>Account overview&nbsp; · &nbsp;Signal history</span>
        </div>
      </div>
      <span className="ppd-solution-illustration__halo" aria-hidden="true" />
    </div>
  );
}
