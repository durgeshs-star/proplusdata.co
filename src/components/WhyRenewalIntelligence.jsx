import React, { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

const faqData = [
  {
    title: "Actionable Renewal Insights",
    content: (
      <>
        ● Visibility into upcoming contracts across your accounts and competitors.
        <br />● The critical 100-day renewal window is mapped so you can act before risk escalates.
        <br />● Proactive insights to identify risks, capture expansion opportunities, and engage before the market reacts.
        <br />● Plan outreach with the right message at the right time, no missed moments.
      </>
    ),
  },
  {
    title: "Enterprise Alignment & Growth",
    content: (
      <>
        ● A single, unified view of renewal timelines for various teams
        <br />● Eliminate silos and align GTM teams on one renewal playbook.
        <br />● Every renewal cycle becomes a proactive growth opportunity, not just revenue protection.
        <br />● Supports strategic foresight, helping executives build revenue resilience.
      </>
    ),
  },
  {
    title: "Trusted at Scale",
    content: (
      <>
        ● Proven with global enterprises, including Fortune 500s across cloud, IT, cybersecurity, and automation.
        <br />● Enterprise-ready intelligence that scales with complex renewal portfolios.
        <br />● Built for boardrooms that need confidence in both revenue protection and competitive growth.
      </>
    ),
  },
];

const WhyProPlusRenewal = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="container mt-3 mb-70">
      <div className="tabs-wrapper">
        <div className="tab-content faq section">
          <div className="tab-pane fade active show">
            <div className="row align-items-center">

              {/* LEFT: Accordion */}
              <div className="col-lg-7 mt-3">
                <div className="content-wrapper">
                  <h2 className="faq-title text-left mb-70">
                    Why ProPlus Renewal Intelligence?
                  </h2>

                  <div className="faq-container">
                    {faqData.map((item, index) => (
                      <React.Fragment key={index}>
                        {/* <div
                          className={`faq-item ${
                            activeIndex === index ? "faq-active" : ""
                          }`}
                          onClick={() => toggleAccordion(index)}
                          style={{ cursor: "pointer" }}
                        >
                          <h3 className="text-left">{item.title}</h3>

                          {activeIndex === index && (
                            <div className="faq-content text-left">
                              <p>{item.content}</p>
                            </div>
                          )}

                         <i
                            className={`faq-toggle bi ${
                            activeIndex === index ? "bi-chevron-down" : "bi-chevron-right"
                        }`}
                         ></i>
                        </div> */}

                        <div
  className={`faq-item ${activeIndex === index ? "faq-active" : ""}`}
  onClick={() => toggleAccordion(index)}
>
  {/* HEADER */}
  <div className="faq-header">
    <h4 className="text-left">{item.title}</h4>

    <i
      className={`faq-toggle bi ${
        activeIndex === index
          ? "bi-chevron-down"
          : "bi-chevron-right"
      }`}
    ></i>
  </div>

  {/* CONTENT */}
  {activeIndex === index && (
    <div className="faq-content text-left">
      <p>{item.content}</p>
    </div>
  )}
</div>


                        {index < faqData.length - 1 && <hr />}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>

              {/* RIGHT: Image */}
              <div className="col-lg-5">
                <div className="visual-content">
                  <div className="main-image">
                    <img
                      src="assets/images/why-proplus.png"
                      alt="Why ProPlus Renewal Intelligence"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyProPlusRenewal;
