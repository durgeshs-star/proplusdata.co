import React, { useState } from "react";
import "./TechnographicsUseNew.css";

const useCases = [
  {
    id: "gtm",
    shortLabel: "GTM",
    fullLabel: "Go-To-Market (GTM) Strategy",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="3 11 22 2 13 21 11 13 3 11" />
      </svg>
    ),
    headline: "Launch with Precision",
    description:
      "Identify the exact technology ecosystems your ICP operates in. Enter markets with confidence using real-time intelligence on what tools prospects already use — so your pitch lands at the perfect moment.",
    bullets: [
      "Segment markets by technology adoption patterns",
      "Target accounts matching your ideal tech stack profile",
      "Reduce CAC with laser-focused campaign targeting",
    ],
    stat: { value: "3.2×", label: "Higher Campaign ROI" },
    color: "#2563eb",
  },
  {
    id: "sales",
    shortLabel: "Sales",
    fullLabel: "Sales Prospecting & Prioritization",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
    headline: "Prospect Smarter, Close Faster",
    description:
      "Surface your highest-potential accounts based on their live technology footprint. Know which companies are in-market, using competitor tools, or ready to expand — before your competition does.",
    bullets: [
      "Prioritize leads using real-time tech stack signals",
      "Identify upgrade and migration opportunities instantly",
      "Reduce prospecting time by up to 60%",
    ],
    stat: { value: "60%", label: "Less Time Prospecting" },
    color: "#1d4ed8",
  },
  {
    id: "leadscoring",
    shortLabel: "Scoring",
    fullLabel: "Lead Scoring & Qualification",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    headline: "Score Leads on Real Intent",
    description:
      "Enrich your CRM with technology adoption data to dynamically score and qualify leads. Move beyond firmographics — understand the actual tools and platforms buyers rely on to gauge true purchase readiness.",
    bullets: [
      "Layer technographics into your existing scoring model",
      "Spot intent signals from technology adoption behavior",
      "Route MQLs to the right reps with tech-matched context",
    ],
    stat: { value: "45%", label: "Higher MQL-to-SQL Rate" },
    color: "#133580",
  },
  {
    id: "competitor",
    shortLabel: "Compete",
    fullLabel: "Competitor Analysis",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    headline: "Outmaneuver the Competition",
    description:
      "Map the technology landscape of your competitors' customers. Discover displacement opportunities, track competitive wins and losses, and craft hyper-relevant messaging that speaks directly to their pain points.",
    bullets: [
      "Identify accounts running competitor products",
      "Track market share shifts in real time",
      "Build battle cards based on actual tech usage data",
    ],
    stat: { value: "2.7×", label: "More Competitive Wins" },
    color: "#0d1b3e",
  },
  {
    id: "abm",
    shortLabel: "ABM",
    fullLabel: "Account-Based Marketing (ABM)",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
      </svg>
    ),
    headline: "Personalize at Account Level",
    description:
      "Fuel your ABM engine with technographic signals that tell you exactly which tools each target account uses. Craft personalized content, ads, and outreach that speaks the buyer's language — and tech stack.",
    bullets: [
      "Build hyper-targeted account lists using tech signals",
      "Personalize campaigns for each account's tech stack",
      "Align sales & marketing around shared intelligence",
    ],
    stat: { value: "4.1×", label: "Pipeline from Target Accounts" },
    color: "#1e40af",
  },
];

export default function TechnographicsUseNew() {
  const [activeTab, setActiveTab] = useState(0);
  const active = useCases[activeTab];

  return (
    <section className="ppd-techno-growth-new" aria-labelledby="ppd-techno-growth-new-title">
      <div className="ppd-techno-growth-new__wrapper">

        {/* ── Top: heading block ── */}
        <div className="ppd-techno-growth-new__top">
          <div className="ppd-techno-growth-new__eyebrow">
            <span className="ppd-techno-growth-new__status" aria-hidden="true" />
            Business Impact
          </div>
          <h2 id="ppd-techno-growth-new-title" className="ppd-techno-growth-new__title">
            Technographics for <span>Business Growth</span>
          </h2>
          <p className="ppd-techno-growth-new__subtitle">
            Drive measurable results with data-driven technographic insights that transform your GTM strategy
          </p>
        </div>

        {/* ── Bottom: two-col ── */}
        <div className="ppd-techno-growth-new__body">

          {/* Left — Feature cards */}
          <div className="ppd-techno-growth-new__features">
            {[
              {
                title: "Real-Time Data",
                desc: "Stay ahead with continuously updated technology stack information",
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                ),
              },
              {
                title: "Precision Targeting",
                desc: "Identify in-market accounts with the exact tech you need",
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" />
                  </svg>
                ),
              },
              {
                title: "Competitive Edge",
                desc: "Outmaneuver competitors with deeper market intelligence",
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                    <polyline points="17 6 23 6 23 12" />
                  </svg>
                ),
              },
            ].map((f) => (
              <div className="ppd-techno-growth-new__feature" key={f.title}>
                <div className="ppd-techno-growth-new__feature-icon">{f.icon}</div>
                <div className="ppd-techno-growth-new__feature-text">
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right — Vertical tab panel */}
          <div className="ppd-techno-growth-new__panel-wrap">

            {/* Vertical tab rail */}
            <div className="ppd-techno-tabs" role="tablist" aria-label="Technographics Use Cases">
              {useCases.map((uc, i) => (
                <button
                  key={uc.id}
                  role="tab"
                  aria-selected={i === activeTab}
                  aria-controls={`ppd-tabpanel-${uc.id}`}
                  id={`ppd-tab-${uc.id}`}
                  className={`ppd-techno-tab${i === activeTab ? " is-active" : ""}`}
                  onClick={() => setActiveTab(i)}
                  style={i === activeTab ? { "--tab-color": uc.color } : {}}
                  title={uc.fullLabel}
                >
                  <span className="ppd-techno-tab__icon">{uc.icon}</span>
                  <span className="ppd-techno-tab__label">{uc.shortLabel}</span>
                </button>
              ))}
            </div>

            {/* Panel */}
            <div
              className="ppd-techno-panel"
              role="tabpanel"
              id={`ppd-tabpanel-${active.id}`}
              aria-labelledby={`ppd-tab-${active.id}`}
              key={active.id}
              style={{ "--panel-color": active.color }}
            >
              <div>
                <p className="ppd-techno-panel__category">{active.fullLabel}</p>
                <h3 className="ppd-techno-panel__headline">{active.headline}</h3>
              </div>

              <p className="ppd-techno-panel__description">{active.description}</p>

              <hr className="ppd-techno-panel__divider" />

              <ul className="ppd-techno-panel__bullets">
                {active.bullets.map((b, i) => (
                  <li key={i} className="ppd-techno-panel__bullet">
                    <span
                      className="ppd-techno-panel__bullet-check"
                      style={{ background: `${active.color}18`, color: active.color }}
                    >
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    {b}
                  </li>
                ))}
              </ul>

              <div
                className="ppd-techno-panel__stat"
                style={{
                  borderColor: `${active.color}28`,
                  background: `${active.color}07`,
                }}
              >
                <span className="ppd-techno-panel__stat-value" style={{ color: active.color }}>
                  {active.stat.value}
                </span>
                <span className="ppd-techno-panel__stat-label">{active.stat.label}</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
