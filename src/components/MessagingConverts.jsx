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

const MessagingConverts = () => {
  const leftAccordionId = "accordionLeft";
  const rightAccordionId = "accordionRight";

  const leftData = [
    {
      id: "ac1",
      title: "Shifted from Reactive to Predictive Retention",
      content:
        " Enabled the client to transition from last-minute renewal firefighting to a forward-looking, predictive engagement model. By leveraging early insights, the client’s GTM became proactive, structured, and value-driven, rather than being driven by urgency.",
    },
    {
      id: "ac2",
      title: "Precision 100-Day Activation",
      content:
        " Instituted a disciplined, insight-led framework built around the critical 100-day renewal window. Outreach cadence, messaging, and tailored offers were perfectly aligned to ensure conversations were initiated at the right time with the right context, maximizing success rates.",
    },
    {
      id: "ac3",
      title: "Renewal Signal Fusion",
      content:
        " Combined diverse data streams - usage patterns, support interactions, buying signals, and stakeholder engagement into a single renewal intelligence layer. This fusion created a 360° account view that revealed not just when a renewal was due but why a prospect might stay or churn, enabling teams to intervene with precision and context.",
    },
    {
      id: "ac4",
      title: "Stakeholder-Centric Conversations",
      content:
        "  Equipped teams with rich, account-specific intelligence that elevated renewal discussions from transactional check-ins to strategic, boardroom-level dialogues. This ensured conversations focused on long-term business value and executive alignment rather than just contract continuation.",
    },
  ];

  const rightData = [
    {
      id: "ac5",
      title: "Strategic Upsell & Cross-Sell",
      content:
        " Transformed renewal cycles into structured growth opportunities by embedding upsell and cross-sell motions within the retention framework. Leveraging insights on technology transitions, usage patterns, and business priorities, expansion offers were precisely positioned to drive incremental revenue.",
    },
    {
      id: "ac6",
      title: "Churn Mitigation at Scale",
      content:
        " Implemented a data-driven early risk detection model that identified churn signals across the customer base. Automated engagement sequencing allowed teams to take preventive action at scale, reducing churn exposure and improving long-term revenue predictability.",
    },
    {
      id: "ac7",
      title: "Operational Alignment Across Teams",
      content:
        " Established a centralized renewal intelligence layer that unified Sales, Customer Success, and Finance teams. This shared operational framework eliminated silos, created coordinated account strategies, and drove seamless execution on high-value renewals across all departments.",
    },
    {
      id: "ac8",
      title: "Customer Lifetime Value Optimization",
      content:
        " Extended CLV through a dual approach of retention and expansion. By surfacing growth opportunities and preventing revenue leakage across multi-region portfolios, the client built a predictable, long-term revenue engine with deeper customer relationships.",
    },
  ];

  return (
    <div className="accordion_area style-two bg_color2 pt-50 pb-90">
      <div className="container">
         <div className="section_main_title">
                <h4>Renewal Intelligence in Action</h4>
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

export default MessagingConverts;
