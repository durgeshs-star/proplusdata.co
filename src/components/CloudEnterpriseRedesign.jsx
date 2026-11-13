import React from 'react'
import "./CloudEnterpriseRedesign.css"

const challenges = [
  "Fragmented tech stacks and legacy vendor lock-ins hindered scalability.",
  "Cloud maturity varied widely across target accounts.",
  "Buying behavior was inconsistent and hard to predict.",
  "Traditional outreach lacked relevance and impact.",
  "No unified intelligence identified decision-makers at the right time.",
  "Stakeholders were either too early or already committed elsewhere.",
]

const solutions = ["Renewals", "Technographics", "Intent Data", "Contact Data", "MQL & Voice"]
const approach = ["Target Account List (TAL)", "Technographic Account Intelligence", "Renewals", "Buying Groups", "Lead Delivery"]
const renewalActions = [
  {
    title: "Shifted from Reactive to Predictive Retention",
    description: "Enabled the client to transition from last-minute renewal firefighting to a forward-looking, predictive engagement model. By leveraging early insights, the client’s GTM became proactive, structured, and value-driven, rather than being driven by urgency.",
  },
  {
    title: "Strategic Upsell & Cross-Sell",
    description: "Transformed renewal cycles into structured growth opportunities by embedding upsell and cross-sell motions within the retention framework. Insights on technology transitions, usage patterns, and business priorities helped position expansion offers to drive incremental revenue.",
  },
]
const capabilities = [
  "Precision 100-Day Activation",
  "Churn Mitigation at Scale",
  "Renewal Signal Fusion",
  "Operational Alignment Across Teams",
  "Stakeholder-Centric Conversations",
  "Customer Lifetime Value Optimization",
]
const regions = [
  {
    name: "North America",
    accounts: 37,
    contacts: 38,
    description: "Strong alignment with future-ready cloud messaging, especially among enterprises prioritizing speed and scale.",
  },
  {
    name: "EMEA",
    accounts: 33.5,
    contacts: 34,
    description: "Particular strength in data transformation narratives and a consultative, multistakeholder buying approach.",
  },
  {
    name: "APJC",
    accounts: 29.5,
    contacts: 28,
    description: "Growing share, driven by adoption across technology-forward industries and cloud-native mid-markets.",
  },
]

export default function CloudEnterpriseRedesign() {
  return (
    <main className="ppd-article-page ppd-article-page--cloud-enterprise ppd-cloud-case">
      <section className="ppd-article-hero">
        <div className="ppd-article-hero-inner">
          <span className="ppd-article-eyebrow">Use Case</span>
          <h1 className="ppd-article-title">ProPlus’ Renewal Intelligence Fuels 3X Pipeline Velocity for Leading Cloud Enterprise</h1>
        </div>
      </section>

      <section className="ppd-article-body-section">
        <article className="ppd-article-content ppd-cloud-case-content">
          <section className="ppd-article-section ppd-cloud-case-intro">
            <p>In an increasingly saturated digital ecosystem, the ability to engage high-value accounts with precision is no longer optional—it’s imperative. To meet this challenge, a leading global cloud enterprise partnered with ProPlus Data to recalibrate its outreach strategy through a data-intelligent lens.</p>
            <p>By harnessing <strong>renewals, technographic account intelligence, intent, and buying group insights</strong>, the initiative aimed to accelerate demand capture and pipeline velocity across enterprise markets worldwide. The mandate was bold: drive measurable lead generation and conversion within six months, across fragmented buying groups, multiregional territories, and intricate decision cycles.</p>
          </section>

          <section className="ppd-article-section">
            <h2 className="ppd-article-section-title">The Challenge</h2>
            <p>The cloud enterprise faced a common problem in today’s market: high activity but low clarity. Campaigns were running and leads were flowing, but the pipeline wasn’t converting at the velocity needed to meet growth targets.</p>
            <ul className="ppd-cloud-challenge-grid">
              {challenges.map((challenge) => <li key={challenge}>{challenge}</li>)}
            </ul>
          </section>

          <section className="ppd-article-section">
            <h2 className="ppd-article-section-title">Solutions Leveraged</h2>
            <ul className="ppd-cloud-solutions">
              {solutions.map((solution, index) => <li key={solution}><span>{String(index + 1).padStart(2, "0")}</span>{solution}</li>)}
            </ul>
          </section>

          <section className="ppd-article-section">
            <h2 className="ppd-article-section-title">The ProPlus GTM Approach</h2>
            <ol className="ppd-cloud-approach">
              {approach.map((step, index) => <li key={step}><span>{String(index + 1).padStart(2, "0")}</span>{step}</li>)}
            </ol>
            <div className="ppd-cloud-renewal-filter">
              <div className="ppd-cloud-window"><strong>100</strong><span>day renewal window</span></div>
              <div><h3>Renewal Opportunity Filter</h3><p>Target accounts entering the 100-day renewal window to optimize outreach, messaging, and timing.</p></div>
            </div>
          </section>

          <section className="ppd-article-section ppd-cloud-mapping">
            <div>
              <h2 className="ppd-article-section-title">Mapping Opportunity with Precision and Intent</h2>
              <p>ProPlus Data redefined the targeting strategy by expanding and enriching the account universe across global markets, driven by data, not guesswork.</p>
              <p>Using behavioral signals and buying intent, we segmented identified accounts and contacts into prioritized propensity tiers: High (H), High-Medium (HM), and Medium (M). This layered intelligence became the cornerstone for smart engagement, enabling precise content delivery and message alignment where conversion potential was highest.</p>
            </div>
            <div className="ppd-cloud-propensity" aria-label="Account propensity tiers: High, High-Medium, and Medium">
              <div><span className="ppd-cloud-propensity-ring ppd-cloud-propensity-ring--high" /><strong>High (H)</strong></div>
              <div><span className="ppd-cloud-propensity-ring ppd-cloud-propensity-ring--mid" /><strong>High-Medium (HM)</strong></div>
              <div><span className="ppd-cloud-propensity-ring ppd-cloud-propensity-ring--medium" /><strong>Medium (M)</strong></div>
            </div>
          </section>

          <section className="ppd-article-section">
            <h2 className="ppd-article-section-title">Renewal Intelligence in Action</h2>
            <div className="ppd-cloud-actions">
              {renewalActions.map((action, index) => (
                <article className="ppd-cloud-action" key={action.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div><h3>{action.title}</h3><p>{action.description}</p></div>
                </article>
              ))}
            </div>
            <ul className="ppd-cloud-capabilities">
              {capabilities.map((capability) => <li key={capability}>{capability}</li>)}
            </ul>
          </section>

          <section className="ppd-article-section ppd-cloud-global-results">
            <div>
              <h2 className="ppd-article-section-title">Precision at Scale: Accelerating Pipeline Velocity Across Global Markets</h2>
              <p>The campaign redefined what speed and precision can look like in enterprise demand generation. By unifying intelligence, timing, and message relevance, it activated high-quality engagement across the buyer journey, converting attention into action at an accelerated pace.</p>
              <p>The outcome was more than volume. It was momentum, built across regions, fueled by insight, and sustained beyond campaign closure.</p>
            </div>
            <div className="ppd-cloud-region-chart" aria-label="Regional distribution of accounts and contacts">
              {regions.map((region) => (
                <div className="ppd-cloud-region-chart-row" key={region.name}>
                  <strong>{region.name}</strong>
                  <div><span>Accounts</span><i><b style={{ width: `${region.accounts}%` }} /></i><em>{region.accounts}%</em></div>
                  <div><span>Contacts</span><i><b style={{ width: `${region.contacts}%` }} /></i><em>{region.contacts}%</em></div>
                </div>
              ))}
              <p>Regional distribution of mapped accounts and identified contacts</p>
            </div>
          </section>

          <section className="ppd-article-section ppd-cloud-regional-snapshot">
            <h2 className="ppd-article-section-title">Regional Performance Snapshot</h2>
            <div className="ppd-cloud-region-cards">
              {regions.map((region) => (
                <article key={region.name}>
                  <h3>{region.name}</h3>
                  <p><strong>{region.accounts}%</strong> of accounts · <strong>{region.contacts}%</strong> of contacts</p>
                  <p>{region.description}</p>
                </article>
              ))}
            </div>
            <p>With a fully engaged Marketing Accepted Lead (MAL) pipeline in motion, the campaign laid the groundwork for downstream conversion, keeping the funnel primed for ongoing sales activation—not just short-term wins.</p>
          </section>
        </article>
      </section>

    </main>
  )
}
