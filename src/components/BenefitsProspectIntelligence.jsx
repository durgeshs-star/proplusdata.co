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
          {/* Render title inside content as heading */}
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      </div>
    </div>
  );
};

const BenefitsProspectIntelligence = () => {
  const leftAccordionId = "accordionLeft";
  const rightAccordionId = "accordionRight";

  const leftData = [
    {
      id: "ac1",
      title: "Marketing Teams",
      content: `
        <h5><strong>Run campaigns with precision, not assumptions.</strong></h5>
       
        Gain access to intent signals, technographic data, and geo-specific insights that help you identify, segment, and engage accounts most likely to convert. Whether you're running ABM, demand gen, or localization campaigns, our data lets you lead with relevance.
      `,
    },
    {
      id: "ac2",
      title: "Sales & SDR Teams",
      content: `
        <h5><strong>Focus on accounts that are already warming up.</strong></h5>
        Stop chasing cold leads. Use verified contact data, buyer readiness indicators, and firmographic filters to prioritize outreach and personalize messaging, resulting in higher reply rates, more meetings, and better-qualified pipeline.
      `,
    },
    {
      id: "ac3",
      title: "Revenue Operations",
      content: `
        <h5><strong>Unify your GTM motion with accurate, enriched data.</strong></h5>
        From territory planning to lead routing and performance tracking, RevOps teams use our intelligence to ensure alignment across systems and strategy. Integrate seamlessly into your CRM and automate workflows powered by real-time insights.
      `,
    },
  ];

  const rightData = [
    {
      id: "ac4",
      title: "Product & Expansion Teams",
      content: `
        <h5><strong>Identify new opportunities inside and outside your customer base.</strong></h5>
        Track product usage trends, competitor tool adoption, and install-base overlap to drive upsell, cross-sell, and expansion strategies. Especially effective for PLG motions and regional growth in markets like Japan, India, and the US.

      `,
    },
    {
      id: "ac5",
      title: "Founders & Growth Leaders",
      content: `
        <h5><strong>Make faster, smarter decisions at every stage.</strong></h5>
        From market entry to aggressive scaling, founders and CXOs use our buyer intelligence to validate ICPs, size opportunity, and stay ahead of competitor moves, backed by data, not guesswork.
      `,
    },
    {
      id: "ac6",
      title: "Customer Success & Account Retention Teams",
      content: `
        <h5><strong>Spot risks, surface opportunities, and strengthen relationships.</strong></h5>
        Use install-base insights, competitor tool adoption, and regional buying signals to identify at-risk accounts and drive proactive retention. ProPlus Data helps success teams go beyond support, into strategic account growth.

      `,
    },
  ];

  return (
    <div className="accordion_area style-two bg_color2 pt-50 pb-90">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section_title text_center mb-50">
              <div className="section_main_title">
                <h2>Who Gains from Our Intelligence</h2>
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
          <div className="col-lg-6 col-md-6 col-sm-12 text-left">
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
          <div className="col-lg-6 col-md-6 col-sm-12 text-left">
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

export default BenefitsProspectIntelligence;
