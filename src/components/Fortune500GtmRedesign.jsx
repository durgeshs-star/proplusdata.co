import React from 'react'
import "./Fortune500GtmRedesign.css"

const metrics = [
  { value: "45%", label: "Engagement rate" },
  { value: "52%", label: "Target account reach rate" },
  { value: "31%", label: "Response rate on verified outreach" },
  { value: "2.8×", label: "Lift in campaign engagement" },
]

const challenges = [
  "No enterprise-wide view of upcoming technology renewal cycles across key accounts.",
  "Resource allocation lacked visibility into installed technology, detection dates, and contract maturity.",
  "Regional teams could not anticipate competitive displacement or churn windows.",
  "Time-sensitive detection insights were missing, undermining timely, relevant outreach.",
  "Legacy technology adoption patterns in emerging regions remained largely uncharted.",
  "Growth initiatives missed buying signals tied to upgrade or replacement intent.",
  "Market engagement strategies were misaligned with the actual technology landscape.",
  "Strategic engagement often came too late, after renewal decisions had already been made.",
]

const intelligenceSteps = [
  "Intent signals",
  "Contact data acquisition",
  "Technographic account intelligence",
  "Renewal intelligence",
  "EDM activation",
  "VVL qualification",
  "Lead delivery",
]

const executionStages = [
  {
    title: "Intent Signals",
    description: "We identified accounts showing active interest in relevant solutions through digital behavior, content engagement, and research activity.",
  },
  {
    title: "Technographic Account Intelligence",
    description: "Each account was profiled for its current technology environment, including contract detection dates, deployment maturity, and potential switch triggers, enabling more contextual targeting.",
  },
  {
    title: "Renewal Intelligence",
    description: "Accounts were filtered by contract renewal timelines and technology lifecycle stages, so outreach could happen when decision windows were open—before renewal inertia set in.",
  },
  {
    title: "EDM Activation",
    description: "Targeted electronic direct mail reflected each buyer’s technology stack, intent behavior, and regional nuances.",
  },
  {
    title: "VVL Qualification",
    description: "Every response was validated through direct conversations with decision-makers to confirm pain points, priorities, and project timelines.",
  },
  {
    title: "Lead Delivery",
    description: "Only verified, sales-ready opportunities backed by buyer intent and technology context were passed to the client’s commercial teams.",
  },
]

const regionalFindings = [
  { label: "India", detail: "Electronics led the mix at 41%." },
  { label: "Japan", detail: "Electronics led the mix at 44%." },
  { label: "Korea", detail: "Semiconductors led demand at 43%." },
  { label: "ASEAN", detail: "Demand was balanced; Electronics (32%) and Semiconductors (22%) led." },
  { label: "ANZ", detail: "Energy & Utilities (21%) and Aerospace & Defense (17%) showed focused traction." },
]

const outcomes = [
  "More meaningful leads and fewer wasted ones, with quality improving in previously underperforming sectors.",
  "Sales teams received leads with context: buyer type, signal source, and timing.",
  "Regional leaders could prioritize what was working and understand why, instead of chasing campaign volume.",
  "Clearer attribution tied marketing spend to strategic outcomes rather than vanity metrics.",
]

const testimonials = [
  {
    quote: "ProPlus helped us prioritize high-conversion accounts and align marketing with sales execution. That shifted results quickly. We’ve seen the impact, and now we’re leaning on them to help us scale faster across regions and tighten the handoff to sales even further.",
    role: "VP, Marketing – Growth Markets",
  },
  {
    quote: "Partnering with ProPlus gave us the clarity we needed to focus on the right accounts. Their data-driven insights helped us accelerate pipeline growth and improve alignment between our sales and marketing teams. The partnership now plays a critical role in scaling our efforts across global markets.",
    role: "Director, Demand Gen",
  },
]

export default function Fortune500GtmRedesign() {
  return (
    <main className="ppd-article-page ppd-article-page--fortune-gtm ppd-f500-case">
      <section className="ppd-article-hero">
        <div className="ppd-article-hero-inner ppd-f500-hero-inner">
          <span className="ppd-article-eyebrow">Use case</span>
          <h1 className="ppd-article-title">How a Fortune 500 Manufacturing Conglomerate Fixed GTM Across 11 Regions and 10+ Industries with ProPlus</h1>
          <div className="ppd-f500-hero-results" aria-label="Case study results">
            {metrics.map((metric) => (
              <div className="ppd-f500-metric" key={metric.label}>
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ppd-article-body-section">
        <article className="ppd-article-content ppd-f500-content">
          <section className="ppd-article-section ppd-f500-intro">
            <p>A Fortune 500 manufacturing conglomerate operating across 11+ regions and serving over 10 high-value sectors—including Automotive, Semiconductors, Aerospace, Energy, Electronics, and Consumer Products—set out to sharpen its global go-to-market strategy.</p>
            <p>Despite its scale, the organization lacked clarity on which opportunities to prioritize, where to focus resources, and how to align marketing with frontline sales. Campaigns were running, leads were flowing, and teams were in motion. Yet key questions remained unanswered:</p>
            <blockquote className="ppd-article-quote"><p>“We’re generating leads. But which ones matter? Where do we double down? And how do we align marketing’s signal with sales reality, without creating more dashboards and meetings?”</p></blockquote>
          </section>

          <section className="ppd-article-section">
            <h2 className="ppd-article-section-title">The Problem Beneath the Surface</h2>
            <ul className="ppd-f500-challenge-grid">
              {challenges.map((challenge) => <li key={challenge}>{challenge}</li>)}
            </ul>
          </section>

          <section className="ppd-article-section">
            <h2 className="ppd-article-section-title">The ProPlus Intelligence Translated into GTM Impact</h2>
            <p>ProPlus Intelligence enabled a disciplined, insight-driven approach to demand generation, transforming fragmented campaign activity into a high-precision engine for qualified pipeline growth. Refreshed buyer signals and technology insights anchored execution in verified relevance, not volume.</p>
            <ol className="ppd-f500-flow" aria-label="GTM intelligence workflow">
              {intelligenceSteps.map((step, index) => <li key={step}><span>{String(index + 1).padStart(2, "0")}</span>{step}</li>)}
            </ol>
          </section>

          <section className="ppd-article-section">
            <h2 className="ppd-article-section-title">How the Intelligence Came Together</h2>
            <div className="ppd-f500-stage-grid">
              {executionStages.map((stage, index) => (
                <article className="ppd-f500-stage" key={stage.title}>
                  <span className="ppd-f500-stage-number">{String(index + 1).padStart(2, "0")}</span>
                  <h3>{stage.title}</h3>
                  <p>{stage.description}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="ppd-article-section">
            <h2 className="ppd-article-section-title">What We Did Differently</h2>
            <p>At ProPlus, we didn’t roll out a huge transformation plan. We started with a simple principle: the same campaign doesn’t work the same way everywhere. Instead of templating campaigns, we rebuilt demand generation around strategic regional and industry differences.</p>
            <div className="ppd-f500-lever-grid">
              <article className="ppd-f500-lever">
                <span>01 / REGIONAL STRATEGY</span>
                <h3>Regions Were Treated as Strategic Markets, Not Just Geographies</h3>
                <p>We looked at 11 key regions independently, factoring in technology maturity, buying timelines, and competitive noise.</p>
                <ul>
                  <li>In India, volume and conversion potential were high, especially in Electronics, Energy, and Food.</li>
                  <li>SEA markets needed signal acceleration, so lead delivery models worked better.</li>
                  <li>In Vietnam, direct campaigns outperformed longer nurturing flows.</li>
                </ul>
              </article>
              <article className="ppd-f500-lever">
                <span>02 / INDUSTRY STRATEGY</span>
                <h3>We Re-evaluated 10+ Verticals by How Their Buying Groups Operated</h3>
                <p>We examined how buyer groups worked and aligned, rather than treating each industry as a label.</p>
                <ul>
                  <li>Semiconductors showed consistent traction across India and Southeast Asia, driven by clear ownership in technical buying units.</li>
                  <li>Flexible Manufacturing emerged as a high-performing vertical across four regions, with well-defined decision-making clusters.</li>
                  <li>Aerospace &amp; Defense required richer signals because influence was distributed and timing-sensitive.</li>
                </ul>
              </article>
            </div>
          </section>

          <section className="ppd-article-section">
            <h2 className="ppd-article-section-title">The Difference It Made</h2>
            <h3 className="ppd-f500-subheading">Results Across Markets</h3>
            <div className="ppd-f500-region-grid">
              {regionalFindings.map((finding) => (
                <article className="ppd-f500-region" key={finding.label}>
                  <h3>{finding.label}</h3>
                  <p>{finding.detail}</p>
                </article>
              ))}
            </div>
            <p>CP&amp;R, Food &amp; Beverage, and Flexible Manufacturing added breadth across regions. ProPlus Data didn’t just gather leads; it tracked where demand was moving. High-intent signals surfaced faster, targeting sharpened, and conversions followed.</p>
            <h3 className="ppd-f500-subheading">Here’s What That Translated to on the Ground</h3>
            <ul className="ppd-f500-outcomes">
              {outcomes.map((outcome) => <li key={outcome}>{outcome}</li>)}
            </ul>
            <h3 className="ppd-f500-subheading">The Client Could Make Decisions with Confidence</h3>
            <div className="ppd-f500-decisions"><span>Where to invest</span><span>Where to expand</span><span>Where to pull back</span></div>
          </section>

          <section className="ppd-article-section ppd-f500-summary">
            <h2 className="ppd-article-section-title">In Summary</h2>
            <p>This wasn’t a story about “more data” or “better tools.” It was about getting three things right:</p>
            <ul><li>Knowing which region needs what.</li><li>Understanding how each vertical behaves.</li><li>Choosing the right campaign flow for both.</li></ul>
            <p>Scaling globally demands precision, not uniformity—and that’s exactly what this partnership achieved.</p>
          </section>

          <section className="ppd-f500-testimonials" aria-label="Client feedback">
            {testimonials.map((testimonial) => (
              <figure className="ppd-f500-testimonial" key={testimonial.role}>
                <blockquote>{testimonial.quote}</blockquote>
                <figcaption>{testimonial.role}</figcaption>
              </figure>
            ))}
          </section>
        </article>
      </section>
    </main>
  )
}