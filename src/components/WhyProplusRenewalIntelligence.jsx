import React from "react";

const WhyProplusRenewalIntelligence = () => {
  return (
    <div className="faq-area pt-120 pb-4">
      <div className="container">
        <div className="row">
          
          {/* Left Image Section */}
          <div className="col-lg-6 col-md-6">
            <div
              className="faq-thumb up wow fadeInLeft"
              data-wow-delay=".3s"
            >
              <img src="assets/images/why-proplus.png" alt="FAQ" />

            
            </div>
          </div>

          {/* Right FAQ Section */}
          <div className="col-lg-6 col-md-6">
            <div className="tab_container pl-5 pt-50">

              {/* Section Title */}
              <div
                className="section_title mb-2 mt-4 wow fadeInRight"
                data-wow-delay=".4s"
              >
                

                <div className="section_main_title1">
                  <h2>
                    Why ProPlus Renewal Intelligence?
                  </h2>
                </div>

               
              </div>

              {/* Accordion */}
              <div
                id="tab1"
                className="tab_content wow fadeInUp"
                data-wow-delay=".5s"
              >
                <ul className="accordion upper">
                  <li>
                    <a className="gradient">
                      Actionable Renewal Insights
                    </a>
                    <p>
                      Quis ipsum gravida accumsan lacus vel facilisis dolore
                      magna aliqua lacus dolor sit amet consectetur adipiscing
                      elitd do quis ipsum gravid accumsan lacus vel facilisis
                      dolore magna aliqua lacus dolor sit amet lacus dolor sit
                      amet consectetur adipiscing.
                    </p>
                  </li>

                  <li>
                    <a>
                      What do you mean by ‘Additional Insured’?
                    </a>
                    <p>
                      Quis ipsum gravida accumsan lacus vel facilisis dolore
                      magna aliqua lacus dolor sit amet consectetur adipiscing
                      elitd do quis ipsum gravid accumsan lacus vel facilisis
                      dolore magna aliqua lacus dolor sit amet lacus dolor sit
                      amet consectetur adipiscing.
                    </p>
                  </li>

                  <li>
                    <a>
                      What do you mean by term “Annuity”?
                    </a>
                    <p>
                      Quis ipsum gravida accumsan lacus vel facilisis dolore
                      magna aliqua lacus dolor sit amet consectetur adipiscing
                      elitd do quis ipsum gravid accumsan lacus vel facilisis
                      dolore magna aliqua lacus dolor sit amet lacus dolor sit
                      amet consectetur adipiscing.
                    </p>
                  </li>
                </ul>
              </div>

              {/* Shape Image */}
              <div className="tab-shape">
                <img src="assets/images/tab.png" alt="Shape" />
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default WhyProplusRenewalIntelligence;
