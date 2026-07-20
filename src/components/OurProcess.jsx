import React from "react";

const OurProcess = () => {
  return (
    <div className="how_it_work pt-50 pb-65">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section_title text_center mb-60 mt-3">
             
              <div className="section_main_title">
                <h2>How ProPlus Data <span>Drives Your Success</span></h2>
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
                 <img src="assets/images/icon/Process1.svg" alt="account analysis"/>
                </div>
                <div className="single_work_content_title pb-2">
                  <h3><b> Deep Account Analysis</b></h3>
                </div>
                <div className="single_it_work_content_text pt-1">
                  <p>
                  We begin with in-depth firmographic insights to understand your target accounts inside out, ensuring precision-driven strategies tailored to your business needs.

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
                <img src="assets/images/icon/Process2.svg" alt="intelligent data insights"/>
                </div>
                <div className="single_work_content_title pb-2">
                  <h3><b> Intelligent Data Insights</b></h3>
                </div>
                <div className="single_it_work_content_text pt-1">
                  <p>
                  Harness the power of <a href="https://proplusdata.co/technographics">Technographics</a>  and <a href="https://proplusdata.co/next-tech-purchase">Next Tech Purchase® (NTP)</a>  to uncover key buying signals, track technology adoption, and refine your outreach for maximum impact.
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
                <img src="assets/images/icon/Process3.svg" alt="voice-edm-management"/>
                </div>
                <div className="single_work_content_title pb-2">
                  <h3><b>Voice & EDM Engagement</b>
                  </h3>
                </div>
                <div className="single_it_work_content_text pt-1">
                  <p>
                  Through multi-channel EDM and voice verification, we validate interest and deliver personalized, high-impact messages; connecting you directly with decision-makers.

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

export default OurProcess;
