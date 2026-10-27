import React, { useEffect, useRef, useState } from "react";
import { FaChartLine, FaAward, FaTachometerAlt, FaLeaf } from "react-icons/fa";

const StrategicAdvantage = () => {
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

  const advantages = [
    {
      icon: <FaChartLine />,
      title: "Maximized ROI",
      description: "Channel resources toward high-potential prospects backed by validated intent, ensuring every investment delivers maximum returns."
    },
    {
      icon: <FaAward />,
      title: "Competitive Supremacy",
      description: "Anticipate market trends and competitor maneuvers, positioning your business as the preferred choice."
    },
    {
      icon: <FaTachometerAlt />,
      title: "Operational Excellence",
      description: "Eliminate inefficiencies with a clear, data-driven roadmap to engage prospects, streamlining execution."
    },
    {
      icon: <FaLeaf />,
      title: "Sustainable Growth",
      description: "Build lasting relationships with decision-makers by addressing their needs with precision, fostering loyalty and advocacy."
    }
  ];

  return (
    <section ref={sectionRef} className={`ppd-buyer-advantages${isVisible ? " is-visible" : ""}`} aria-labelledby="ppd-buyer-advantages-title">
      <div className="ppd-solution-shell">
        <header className="ppd-buyer-advantages-header">
          <h2 className="ppd-buyer-advantages-title" id="ppd-buyer-advantages-title">
            Strategic <span>Advantages</span>
          </h2>
          <span className="ppd-buyer-advantages-accent" aria-hidden="true" />
        </header>

        <div className="ppd-buyer-advantages-hex">
          {advantages.map((advantage, index) => (
            <article 
              className="ppd-buyer-advantage-hex" 
              key={advantage.title}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <span className="ppd-buyer-advantage-icon">
                {advantage.icon}
              </span>
              <h3 className="ppd-buyer-advantage-title">{advantage.title}</h3>
              <p className="ppd-buyer-advantage-description">{advantage.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StrategicAdvantage;
