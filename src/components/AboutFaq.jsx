import React from "react";
import "./AboutFaq.css";

export const aboutFaqs = [
["What are B2B data providers?", "B2B data providers are companies that collect, organise, and supply business intelligence to help organisations identify potential customers and sales opportunities. Their offerings typically include company information, professional contact details, technographics, buyer intent data, and account intelligence. Businesses use these insights to improve targeting, prioritise accounts, and make informed go-to-market decisions."],
["What is revenue operations strategy?", "A revenue operations strategy aligns sales, marketing, and customer success teams around shared processes, technology, data, and revenue objectives. It improves visibility across the customer lifecycle, strengthens collaboration, identifies operational gaps, and helps businesses create a more consistent and predictable revenue pipeline."],
["What is B2B pipeline generation?", "B2B pipeline generation is the process of identifying potential business customers, engaging relevant decision-makers, and converting prospects into qualified sales opportunities. It involves defining target accounts, understanding buying groups, using intent signals, and coordinating sales and marketing activities to create a consistent flow of revenue opportunities."],
["What is B2B buyer intent data?", "B2B buyer intent data provides insights into the research activities, interests, and behavioural signals that indicate a company's potential interest in a product or service. It helps sales and marketing teams identify accounts demonstrating relevant buying interest, understand emerging demand, and prioritise outreach based on meaningful signals."],
["How do you build a predictable sales pipeline?", "To build a predictable sales pipeline, businesses need to identify the right accounts, understand purchasing stakeholders, and recognise opportunities at the right time. The process involves defining an ideal customer profile, prioritising target accounts, monitoring buyer intent, tracking technology adoption and contract renewals, and aligning sales and marketing around shared pipeline metrics. Reliable B2B data and timely account intelligence help improve opportunity prioritisation and pipeline consistency."],
["What are technographic data providers?", "Technographic data providers collect and supply information about the technologies, software, platforms, and IT infrastructure used by businesses. This data helps organisations understand existing technology environments, identify potential technology gaps, recognise adoption patterns, and uncover opportunities for technology vendors. Technology adoption timelines can also help GTM teams identify changes within target accounts."],
["What are go-to-market strategy examples for B2B?", "Common go-to-market strategy examples for B2B include account-based marketing, intent-led targeting, technographic-led prospecting, renewal-led engagement, and buying group-based outreach. Each approach uses different intelligence sources to identify relevant accounts, understand purchasing behaviour, and improve sales engagement. Combining these strategies helps businesses create a more informed and coordinated approach to pipeline generation."],
["What is a B2B contact database?", "A B2B contact database is a structured collection of professional contact information associated with businesses and their employees. It typically includes names, job titles, company details, business email addresses, phone numbers, and organisational information. Sales and marketing teams use B2B contact databases to identify decision-makers, build prospect lists, and support targeted business outreach."],
["What is account-based marketing data?", "Account-based marketing data is business intelligence used to identify, segment, prioritise, and engage specific target accounts. It can include company information, contact details, technographics, buyer intent signals, and buying group intelligence. This data enables sales and marketing teams to develop relevant account-specific campaigns, understand key stakeholders, and coordinate engagement across high-value accounts."],
["What is go-to-market (GTM)?", "Go-to-market (GTM) is a business strategy that defines how a company introduces and sells its products or services to a target market. It covers customer identification, market segmentation, positioning, sales and marketing execution, and revenue generation. A well-defined B2B GTM strategy brings sales, marketing, and product teams together to reach the right buyers and create sustainable growth."],
["What is B2B data?", "B2B data is business-related information that helps organisations identify, understand, and engage potential customers. It includes company profiles, professional contact details, technology usage, buying intent, organisational structures, and purchasing signals. Businesses use B2B data to identify relevant accounts, understand buying behaviour, prioritise opportunities, and make informed go-to-market decisions."],
["How do you build a B2B go-to-market strategy?", "Building a B2B go-to-market strategy starts with defining the ideal customer profile, identifying target markets, and understanding the needs of potential buyers. Businesses should then map buying groups, develop positioning, select appropriate sales and marketing channels, and establish clear pipeline metrics. Integrating technographic intelligence, buyer intent, renewal information, and account-level insights can help teams identify opportunities and improve GTM execution."],
].map(([question, answer]) => ({ question, answer }));

export default function AboutFaq() {
  return <section className="ppd-about-faq" aria-labelledby="ppd-about-faq-title">
    <div className="container ppd-about-faq__container">
      <header className="ppd-about-faq__intro">
        <span className="ppd-about-faq__eyebrow"><i aria-hidden="true" /> B2B GROWTH KNOWLEDGE</span>
        <h2 id="ppd-about-faq-title">Frequently asked questions</h2>
        <p>Clear answers to common questions about B2B data, buyer intelligence, and go-to-market strategy.</p>
        <span className="ppd-about-faq__rule" aria-hidden="true" />
      </header>
      <div className="ppd-about-faq__list">
        {aboutFaqs.map(({ question, answer }, index) => <details className="ppd-about-faq__item" key={question}>
          <summary><span className="ppd-about-faq__number">{String(index + 1).padStart(2, "0")}</span><span className="ppd-about-faq__question">{question}</span><span className="ppd-about-faq__toggle" aria-hidden="true" /></summary>
          <div className="ppd-about-faq__answer"><p>{answer}</p></div>
        </details>)}
      </div>
    </div>
  </section>;
}
