import React, { useEffect, useRef, useState } from "react";
import { Building2, UsersRound, Network, Cpu, MonitorCog, TrendingUp, UserSearch, BarChart3, BarChart2 } from "lucide-react";

const solutionsData = [
  {
    title: "Firmographic Insights",
    description: "A detailed profile of a business, including industry, size, location, structure, and performance.",
    icon: <Building2 />,
  },
  {
    title: "Demographic Insights",
    description: "Uncover detailed insights on key stakeholders, including names, roles, responsibilities, and skillsets, enabling precision-targeted engagement",
    icon: <UsersRound />,
  },
  {
    title: "Buyer Group Mapping",
    description: "Identify and understand buyer cohorts to effectively navigate complex decision-making ecosystems within target organizations.",
    icon: <Network />,
  },
  {
    title: "Technology Adoption",
    description: "Access real-time insights into current and emerging technology adoption trends to inform and tailor go-to-market strategies.",
    icon: <Cpu />,
  },
  {
    title: "Competitor Insights",
    description: "Gain strategic intelligence on the competitors to uncover differentiators and proactively outmanoeuvre them.",
    icon: <BarChart3 />,
  },
  {
    title: "Digital Transformation",
    description: "Evaluate an organization's financial trajectory and digital initiatives to ensure alignment with your value proposition.",
    icon: <MonitorCog />,
  },
  {
    title: "Technology Investments",
    description: "Understand enterprise-level technology investment priorities to strategically position your solutions in line with business objectives.",
    icon: <BarChart2 />,
  },
  {
    title: "Potential Decision Makers",
    description: "Precisely identify decision-makers and influencers to maximize outreach effectiveness and accelerate engagement.",
    icon: <UserSearch />,
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
                {item.icon}
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
