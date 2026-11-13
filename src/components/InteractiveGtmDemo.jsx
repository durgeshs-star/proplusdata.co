import React, { useState } from "react";
import "./InteractiveGtmDemo.css";

const demoTabs = [
  {
    id: "intent",
    label: "Intent Surge",
    badge: "Live Signal",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    title: "Real-Time Intent Surge Detected",
    subtitle: "Accounts actively consuming content and evaluating solutions in your category.",
    company: "CloudScale Technologies",
    domain: "cloudscale.io",
    industry: "Enterprise Cloud & DevOps",
    employees: "1,200 - 5,000",
    score: 94,
    scoreLabel: "Surge Score: Very High",
    metrics: [
      { label: "Surging Topics", value: "Cloud Security, SIEM, SOC 2" },
      { label: "Research Velocity", value: "+340% vs 30d Avg" },
      { label: "Active Locations", value: "Austin, TX & London, UK" }
    ],
    contacts: [
      { name: "Marcus Vance", role: "VP of Cloud Architecture", verified: true, phone: "+1 (512) 843-****", email: "m.vance@cloudscale.io" },
      { name: "Elena Rostova", role: "Head of Infrastructure Security", verified: true, phone: "+1 (512) 843-****", email: "e.rostova@cloudscale.io" }
    ],
    actionRecommendation: "Priority Outreach: Window open for next 14 days."
  },
  {
    id: "renewal",
    label: "Renewal Intelligence",
    badge: "Expiry Window",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: "Competitor Contract Renewal in 68 Days",
    subtitle: "Identify renewal dates and engage stakeholders before budget is committed elsewhere.",
    company: "FinVertex Global",
    domain: "finvertex.com",
    industry: "Financial Services & WealthTech",
    employees: "5,000 - 10,000",
    score: 89,
    scoreLabel: "Renewal Risk: High (Vendor Attrition)",
    metrics: [
      { label: "Incumbent Vendor", value: "Legacy SecOps Platform" },
      { label: "Renewal Date", value: "Q3 - Exactly 68 Days Out" },
      { label: "Estimated Contract", value: "$180,000 / year" }
    ],
    contacts: [
      { name: "Sarah Chen", role: "Chief Information Security Officer", verified: true, phone: "+1 (212) 993-****", email: "s.chen@finvertex.com" },
      { name: "David Sterling", role: "VP, IT Procurement & Vendor Mgt", verified: true, phone: "+1 (212) 993-****", email: "d.sterling@finvertex.com" }
    ],
    actionRecommendation: "Competitive Displacement Campaign: Engage CISO before RFP kickoff."
  },
  {
    id: "ntp",
    label: "Next Tech Purchase®",
    badge: "Tech Migration",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    title: "Patented Tech Migration Forecast",
    subtitle: "NTP algorithms forecast technology transitions based on install base lifecycle changes.",
    company: "OmniHealth Data Systems",
    domain: "omnihealth.org",
    industry: "Healthcare Analytics",
    employees: "3,500+",
    score: 96,
    scoreLabel: "Migration Probability: 96%",
    metrics: [
      { label: "Current Tech Stack", value: "On-Premises Data Lake, Oracle" },
      { label: "Predicted Adoption", value: "Snowflake / Databricks Lakehouse" },
      { label: "Migration Phase", value: "Architecture Planning & Budgeting" }
    ],
    contacts: [
      { name: "Dr. Arthur Pendelton", role: "VP of Enterprise Data Systems", verified: true, phone: "+1 (617) 412-****", email: "a.pendelton@omnihealth.org" },
      { name: "Priya Nair", role: "Director of Cloud Modernization", verified: true, phone: "+1 (617) 412-****", email: "p.nair@omnihealth.org" }
    ],
    actionRecommendation: "Strategic Alignment: Share comparative Lakehouse migration playbook."
  },
  {
    id: "contacts",
    label: "Buying Committee",
    badge: "Direct Dials",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "100% Verified Decision Makers",
    subtitle: "Eliminate gatekeepers with verified mobile numbers and deliverability-guaranteed business emails.",
    company: "Apex Global Logistics",
    domain: "apexlogistics.com",
    industry: "Supply Chain & Freight Tech",
    employees: "8,000+",
    score: 98,
    scoreLabel: "Contact Accuracy: 98.6% SLA",
    metrics: [
      { label: "Committee Size", value: "5 Active Stakeholders Mapped" },
      { label: "Verification Standard", value: "Multi-Source Dual Verified" },
      { label: "Direct Phone Rate", value: "94% Direct Mobile / Desk" }
    ],
    contacts: [
      { name: "Michael Chang", role: "SVP, Global Supply Chain Technology", verified: true, phone: "+1 (312) 805-****", email: "m.chang@apexlogistics.com" },
      { name: "Jessica Alvarez", role: "VP of Digital Transformation", verified: true, phone: "+1 (312) 805-****", email: "j.alvarez@apexlogistics.com" }
    ],
    actionRecommendation: "Multi-threading: Simultaneously brief SVP and VP across email and phone."
  }
];

export default function InteractiveGtmDemo() {
  const [activeTab, setActiveTab] = useState("intent");
  const currentData = demoTabs.find((tab) => tab.id === activeTab) || demoTabs[0];

  return (
    <section className="ppd-demo-section" id="timing-layer-demo">
      <div className="ppd-demo-glow" aria-hidden="true" />
      <div className="ppd-demo-container">
        {/* Section Header */}
        <div className="ppd-demo-header">
          <div className="ppd-demo-eyebrow">
            <span className="ppd-demo-eyebrow-dot" />
            <span>Interactive Intelligence Simulator</span>
          </div>
          <h2 className="ppd-demo-title">
            See the <b>Timing Layer</b> in action
          </h2>
          <p className="ppd-demo-subtitle">
            Toggle between live intelligence streams below to see how ProPlus Data transforms raw buying signals into high-probability pipeline.
          </p>
        </div>

        {/* Interactive Tabs */}
        <div className="ppd-demo-tabs-bar" role="tablist">
          {demoTabs.map((tab) => {
            const isActive = tab.id === activeTab;
            return (
              <button
                key={tab.id}
                role="tab"
                aria-selected={isActive}
                className={`ppd-demo-tab-btn ${isActive ? "active" : ""}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <span className="ppd-demo-tab-icon">{tab.icon}</span>
                <span className="ppd-demo-tab-text">
                  <span className="ppd-demo-tab-label">{tab.label}</span>
                  <span className="ppd-demo-tab-badge">{tab.badge}</span>
                </span>
              </button>
            );
          })}
        </div>

        {/* Live Simulator Card */}
        <div className="ppd-demo-card">
          {/* Card Top Status Bar */}
          <div className="ppd-demo-card-topbar">
            <div className="ppd-demo-card-company-wrap">
              <div className="ppd-demo-company-avatar">
                {currentData.company.charAt(0)}
              </div>
              <div className="ppd-demo-company-meta">
                <div className="ppd-demo-company-title">
                  <h3>{currentData.company}</h3>
                  <span className="ppd-demo-domain-pill">{currentData.domain}</span>
                </div>
                <p className="ppd-demo-company-sub">
                  {currentData.industry} • {currentData.employees} employees
                </p>
              </div>
            </div>

            <div className="ppd-demo-score-box">
              <div className="ppd-demo-score-ring">
                <span className="ppd-demo-score-num">{currentData.score}</span>
                <span className="ppd-demo-score-max">/100</span>
              </div>
              <div className="ppd-demo-score-info">
                <span className="ppd-demo-score-pill">
                  <span className="ppd-demo-pulse-dot" />
                  {currentData.scoreLabel}
                </span>
                <span className="ppd-demo-score-desc">AI Readiness Index</span>
              </div>
            </div>
          </div>

          {/* Card Body Grid */}
          <div className="ppd-demo-card-body">
            {/* Left Column: Signal Analysis & Key Metrics */}
            <div className="ppd-demo-body-left">
              <div className="ppd-demo-signal-overview">
                <h4>{currentData.title}</h4>
                <p>{currentData.subtitle}</p>
              </div>

              <div className="ppd-demo-metrics-list">
                {currentData.metrics.map((metric, idx) => (
                  <div key={idx} className="ppd-demo-metric-row">
                    <span className="ppd-demo-metric-label">{metric.label}</span>
                    <span className="ppd-demo-metric-val">{metric.value}</span>
                  </div>
                ))}
              </div>

              {/* Action Banner */}
              <div className="ppd-demo-action-banner">
                <div className="ppd-demo-action-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <div className="ppd-demo-action-text">
                  <strong>Recommended Next Step:</strong>
                  <span>{currentData.actionRecommendation}</span>
                </div>
              </div>
            </div>

            {/* Right Column: Buying Committee Stakeholders */}
            <div className="ppd-demo-body-right">
              <div className="ppd-demo-contacts-header">
                <h4>Verified Decision Makers</h4>
                <span className="ppd-demo-verified-chip">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Direct Contacts
                </span>
              </div>

              <div className="ppd-demo-contacts-list">
                {currentData.contacts.map((contact, idx) => (
                  <div key={idx} className="ppd-demo-contact-card">
                    <div className="ppd-demo-contact-avatar">
                      {contact.name.split(" ").map(n => n[0]).join("")}
                    </div>
                    <div className="ppd-demo-contact-info">
                      <div className="ppd-demo-contact-name-row">
                        <span className="ppd-demo-contact-name">{contact.name}</span>
                        <span className="ppd-demo-check-badge" title="Verified Mobile & Email">✓ Verified</span>
                      </div>
                      <span className="ppd-demo-contact-role">{contact.role}</span>
                      <div className="ppd-demo-contact-channels">
                        <span className="ppd-demo-channel-pill phone">
                          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                          {contact.phone}
                        </span>
                        <span className="ppd-demo-channel-pill email">
                          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                          {contact.email}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Quick CTA button */}
              <div className="ppd-demo-bottom-cta">
                <a href="#flipbox" className="ppd-demo-card-action-btn">
                  Explore Full Intelligence Suite
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
