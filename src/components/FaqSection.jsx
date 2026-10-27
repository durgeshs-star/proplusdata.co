import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './FaqSection.css';

const AccordionPanel = ({ id, title, content, isOpen, parentId }) => {
  return (
    <article className="ppd-event-results-card">
      <h3 className="ppd-event-results-card-heading">
        <a
          data-bs-toggle="collapse"
          data-bs-parent={`#${parentId}`}
          href={`#${id}`}
          className={`ppd-event-results-trigger ${!isOpen ? 'collapsed' : ''}`}
          aria-expanded={isOpen ? "true" : "false"}
          aria-controls={id}
        >
          <i className="fa fa-check-circle ppd-event-results-check" aria-hidden="true"></i>
          <span className="ppd-event-results-card-title">{title}</span>
          <span className="ppd-event-results-indicator" aria-hidden="true"></span>
        </a>
      </h3>
      <div
        id={id}
        className={`collapse ppd-event-results-collapse ${isOpen ? "show" : ""}`}
      >
        <div className="ppd-event-results-body">
          <p className="ppd-event-results-description">{content}</p>
        </div>
      </div>
    </article>
  );
};

const FAQSection = () => {
  const leftAccordionId = "accordionLeft";
  const rightAccordionId = "accordionRight";

  const leftData = [
    {
      id: "ac1",
      title: "Personalized Email Campaigns",
      content:
        "We craft tailored emails that deliver the right message to the right people, sparking interest and registrations.",
    },
    {
      id: "ac2",
      title: "Smart Analytics & Optimization",
      content:
        "We track engagement in real-time, tweaking campaigns to maximize response rates and impact.",
    },
    {
      id: "ac3",
      title: "Voice-Confirmed Registrations",
      content:
        "We directly connect with potential attendees to confirm interest, ensuring high-quality sign-ups.",
    },
  ];

  const rightData = [
    {
      id: "ac4",
      title: "Optimized Marketing Expenditure",
      content:
        "Focusing resources on a well-defined audience reduces unnecessary costs and increases the efficiency of marketing efforts.",
    },
    {
      id: "ac5",
      title: "Enhanced Event Participation",
      content:
        "Attracting attendees with a genuine interest in the event's subject matter leads to more dynamic and productive interactions.",
    },
    {
      id: "ac6",
      title: "Improved Post-Event Opportunities",
      content:
        "Establishing connections with high-potential leads facilitates more effective follow-up and business development activities.",
    },
  ];

  return (
    <section className="ppd-event-results">
      <div className="container">
        <header className="ppd-event-results-header">
          <span className="ppd-event-results-eyebrow">EVENT MARKETING</span>
          <h2 className="ppd-event-results-title">
            Smarter Events. Better <span>ROI</span>
          </h2>
          <div className="ppd-event-results-rule" aria-hidden="true"></div>
        </header>

        <div className="ppd-event-results-grid">
          <div className="ppd-event-results-column">
            <div id={leftAccordionId} className="ppd-event-results-accordion">
              {leftData.map((item, index) => (
                <AccordionPanel
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  content={item.content}
                  isOpen={index === 0}
                  parentId={leftAccordionId}
                />
              ))}
            </div>
          </div>

          <div className="ppd-event-results-column">
            <div id={rightAccordionId} className="ppd-event-results-accordion">
              {rightData.map((item, index) => (
                <AccordionPanel
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  content={item.content}
                  isOpen={index === 0}
                  parentId={rightAccordionId}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
