import React from "react";
import { Link } from "react-router-dom";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import Header1 from "../components/Header1";
import "./GtmAssessmentResults.css";

const scoreBands = [
  {
    min: 80,
    title: "Your GTM engine is ready to scale",
    level: "High readiness",
    summary: "You have a strong base for coordinated growth. Keep building on what works and focus on making your best motions repeatable.",
    recommendations: [
      "Scale the campaigns and workflows that consistently influence revenue.",
      "Use predictive signals to prioritize emerging opportunities.",
      "Review performance across teams regularly to keep momentum high.",
    ],
  },
  {
    min: 60,
    title: "You have a strong GTM foundation",
    level: "Good momentum",
    summary: "The core pieces are in place. A few improvements to alignment and execution can help turn that foundation into more consistent growth.",
    recommendations: [
      "Align teams around a shared ideal customer profile and revenue goals.",
      "Connect buying signals to the sales and marketing workflows that use them.",
      "Review handoffs and conversion points to find friction in the buyer journey.",
    ],
  },
  {
    min: 40,
    title: "Your GTM motion has room to build",
    level: "Building readiness",
    summary: "There are promising pieces in your approach. Stronger data foundations and more consistent activation can help your teams move with confidence.",
    recommendations: [
      "Start with a clear, documented GTM strategy and shared success measures.",
      "Improve contact and account data quality before expanding activation.",
      "Create simple, consistent workflows for acting on qualified buying signals.",
    ],
  },
  {
    min: 0,
    title: "A clearer GTM foundation starts here",
    level: "Early stage",
    summary: "Your results point to opportunities to strengthen the fundamentals. A few focused changes can help teams get aligned and build a more reliable path to growth.",
    recommendations: [
      "Bring leadership, marketing, and sales together around a shared target market.",
      "Define a small set of GTM goals and measures everyone can use.",
      "Establish a dependable data and follow-up process for priority accounts.",
    ],
  },
];

export default function GTMAssessmentResult() {
  const score = Math.max(0, Math.min(100, Number(localStorage.getItem("gtmScore")) || 0));
  const totalScore = Number(localStorage.getItem("gtmTotal")) || 0;
  const maxScore = Number(localStorage.getItem("gtmMax")) || 80;
  const result = scoreBands.find((band) => score >= band.min);
  const chartData = [
    { name: "Your score", value: score },
    { name: "To 100%", value: 100 - score },
  ];

  return (
    <div className="gtm-assessment-page gtm-results-page">
      <Header1 darkMode />
      <main className="gtm-results-main">
        <div className="gtm-results-shell">
          <header className="gtm-results-hero">
            <div className="gtm-questions-kicker"><span /> YOUR GTM CLARITY CHECK</div>
            <h1>{result.title}</h1>
            <p>Your assessment is complete. Here’s a snapshot of your current go-to-market readiness and a few practical places to focus next.</p>
          </header>

          <section className="gtm-results-overview" aria-label="Your assessment score">
            <div className="gtm-score-chart-card">
              <div className="gtm-results-card-label">OVERALL READINESS</div>
              <div className="gtm-score-chart">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={chartData} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius="76%" outerRadius="94%" startAngle={90} endAngle={-270} stroke="none">
                      <Cell fill="#1769d2" />
                      <Cell fill="#e6e1d6" />
                    </Pie>
                    <Tooltip formatter={(value, name) => [`${value}%`, name]} />
                  </PieChart>
                </ResponsiveContainer>
                <div className="gtm-score-chart-center"><strong>{score}<small>%</small></strong><span>readiness</span></div>
              </div>
              <div className="gtm-results-score-meta">
                <span className="gtm-results-level"><i />{result.level}</span>
                <span>{totalScore} of {maxScore} points</span>
              </div>
            </div>

            <div className="gtm-results-summary-card">
              <div className="gtm-results-summary-icon" aria-hidden="true">✦</div>
              <div className="gtm-results-card-label">WHAT THIS MEANS</div>
              <h2>{result.title}</h2>
              <p>{result.summary}</p>
              <div className="gtm-results-scale" aria-label={`Readiness score: ${score}%`}>
                <span style={{ width: `${score}%` }} />
              </div>
              <div className="gtm-results-scale-labels"><span>Building</span><span>Strong</span><span>Ready to scale</span></div>
            </div>
          </section>

          <section className="gtm-results-recommendations">
            <div className="gtm-results-section-heading">
              <span className="gtm-results-step">NEXT</span>
              <div><h2>Where to focus next</h2><p>Three practical moves based on your overall readiness score.</p></div>
            </div>
            <div className="gtm-results-recommendation-grid">
              {result.recommendations.map((recommendation, index) => (
                <article className="gtm-results-recommendation" key={recommendation}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{recommendation}</p>
                </article>
              ))}
            </div>
          </section>

          <footer className="gtm-results-footer">
            <div><strong>Turn insight into your next growth move.</strong><p>Connect with our team to explore the right next step for your GTM strategy.</p></div>
            <div className="gtm-results-actions">
              <Link className="gtm-results-button" to="/contact-us">Talk to our team <span aria-hidden="true">→</span></Link>
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
}
