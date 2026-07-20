import React from "react";

const HowRenewalWorks = () => {
  return (
    <div className="how_it_work pt-30 pb-45">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section_title text_center mb-60 mt-3">
             
              <div className="section_main_title">
                <h2>How It <span>Works</span> 
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
                 <img src="assets/images/icon/Process1.svg" alt="real time tracking"/>
                </div>
                <div className="single_work_content_title pb-2">
                  <h4> Real-Time Tracking</h4>
                </div>
                <div className="single_it_work_content_text pt-1">
                  <p>
                  Monitors subscription signals to flag upcoming renewals.

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
                <img src="assets/images/icon/Process2.svg" alt="targeted outreach"/>
                </div>
                <div className="single_work_content_title pb-2">
                  <h4>  Targeted Outreach
                  </h4>
                </div>
                <div className="single_it_work_content_text pt-1">
                  <p>
                  Triggers strategies for retention, upsells, and growth. 
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
                <img src="assets/images/icon/Process3.svg" alt="client lock-in"/>
                </div>
                <div className="single_work_content_title pb-2">
                  <h4>Client Lock-In
                  </h4>
                </div>
                <div className="single_it_work_content_text pt-1">
                  <p>
                  Strengthens ties before competitors move in.

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

export default HowRenewalWorks;
