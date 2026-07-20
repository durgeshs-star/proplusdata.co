import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const AccordionPanel = ({ id, title, content, isOpen, parentId }) => {
  return (
    <div className="panel panel-default">
      <div className="panel-heading mb-3">
        <h4 className="panel-title">
          <a
            data-bs-toggle="collapse"
            data-bs-parent={`#${parentId}`}
            href={`#${id}`}
            className={`d-block ${!isOpen ? 'collapsed' : ''}`}
            aria-expanded={isOpen ? "true" : "false"}
          >
            <i className="fa fa-check-circle me-2"></i>
            {title}
          </a>
        </h4>
      </div>
      <div
        id={id}
        className={`panel-collapse collapse ${isOpen ? "show" : ""}`}
      >
        <div className="panel-body ps-4 pe-4">
          <p>{content}</p>
        </div>
      </div>
    </div>
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
    <div className="accordion_area style-two bg_color2 pt-50 pb-90">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section_title text_center mb-50">
             
              <div className="section_main_title">
                <h2>Smarter Events. Better ROI</h2>
                
              </div>
              <div className="em_bar">
                <div className="em_bar_bg"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Accordion Rows */}
        <div className="row">
          {/* Left Column */}
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="panel-group default symb" id={leftAccordionId}>
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

          {/* Right Column */}
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="panel-group default symb" id={rightAccordionId}>
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
    </div>
  );
};

export default FAQSection;
