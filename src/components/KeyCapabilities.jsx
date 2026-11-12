import React, { useEffect, useRef, useState } from "react";

const solutionsData = [
  {
    number: "01",
    title: "Firmographic Insights",
    description: "A detailed profile of a business, including industry, size, location, structure, and performance.",
  },
  {
    number: "02",
    title: "Demographic Insights",
    description: "Uncover detailed insights on key stakeholders, including names, roles, responsibilities, and skillsets, enabling precision-targeted engagement",
  },
  {
    number: "03",
    title: "Buyer Group Mapping",
    description: "Identify and understand buyer cohorts to effectively navigate complex decision-making ecosystems within target organizations.",
  },
  {
    number: "04",
    title: "Technology Adoption",
    description: "Access real-time insights into current and emerging technology adoption trends to inform and tailor go-to-market strategies.",
  },
  {
    number: "05",
    title: "Competitor Insights",
    description: "Gain strategic intelligence on the competitors to uncover differentiators and proactively outmanoeuvre them.",
  },
  {
    number: "06",
    title: "Digital Transformation",
    description: "Evaluate an organization's financial trajectory and digital initiatives to ensure alignment with your value proposition.",
  },
  {
    number: "07",
    title: "Technology Investments",
    description: "Understand enterprise-level technology investment priorities to strategically position your solutions in line with business objectives.",
  },
  {
    number: "08",
    title: "Potential Decision Makers",
    description: "Precisely identify decision-makers and influencers to maximize outreach effectiveness and accelerate engagement.",
  },
];

const KeyCapabilities = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return undefined;

    if (!("IntersectionObserver" in window)) {
      setIsVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={`ppd-buyer-capabilities${isVisible ? " is-visible" : ""}`} aria-labelledby="ppd-buyer-capabilities-title">
      <div className="ppd-buyer-capabilities-bg" aria-hidden="true" />
      <div className="ppd-solution-shell">
        <header className="ppd-buyer-capabilities-header">
          <h2 className="ppd-buyer-capabilities-title" id="ppd-buyer-capabilities-title">
            Key Features
          </h2>
          <span className="ppd-buyer-capabilities-accent" aria-hidden="true" />
        </header>

        <div className="ppd-buyer-capabilities-grid">
          {solutionsData.map((item, index) => (
            <article 
              className="ppd-buyer-capability-card" 
              key={item.title}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <span className="ppd-buyer-capability-icon">
                {item.number}
              </span>
              <h3 className="ppd-buyer-capability-title">{item.title}</h3>
              <p className="ppd-buyer-capability-description">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyCapabilities;
