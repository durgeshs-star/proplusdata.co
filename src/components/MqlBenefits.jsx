import React from "react";

const MqlBenefits = () => {
  return (
    <div className="how_it_work pb-45">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section_title text_center mb-60 mt-3">
             
              <div className="section_main_title">
                <h2>Demand Gen <span>Benefits</span> 
                </h2>
              </div>
              <div className="em_bar">
                <div className="em_bar_bg"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          {/* Step 1 */}
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="single_it_work mb-4">
              <div className="single_it_work_content pl-2 pr-2">
                <div className="single_it_work_content_list pb-5">
                 <img src="assets/images/icon/Process1.svg" alt="Precision Targeting"/>
                </div>
                <div className="single_work_content_title pb-2">
                  <h4> Precision Targeting of High-Intent Prospects</h4>
                </div>
                <div className="single_it_work_content_text pt-1">
                  <p>
                  Minimize inefficiencies and shorten conversion timelines by focusing solely on individuals demonstrating clear interest and readiness.  


                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="single_it_work mb-4">
              <div className="single_it_work_content pl-2 pr-2">
                <div className="single_it_work_content_list pb-5">
                <img src="assets/images/icon/Process2.svg" alt="Scalable engagement framework"/>
                </div>
                <div className="single_work_content_title pb-2">
                  <h4> Scalable Engagement <br/>Framework 
                  </h4>
                </div>
                <div className="single_it_work_content_text pt-1">
                  <p>
                  Expand outreach across geographies or sectors while maintaining personalization and quality, aligning lead performance with strategic objectives. 
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="single_it_work mb-4">
              <div className="single_it_work_content pl-2 pr-2">
                <div className="single_it_work_content_list three pb-5">
                <img src="assets/images/icon/Process3.svg" alt="strategic messaging"/>
                </div>
                <div className="single_work_content_title pb-2">
                  <h4>Strategic Messaging <br/>Alignment  

                  </h4>
                </div>
                <div className="single_it_work_content_text pt-1">
                  <p>
                  Customize communications to mirror each prospect’s interests and actions, amplifying relevance and maximizing the value of every interaction.  


                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MqlBenefits;
