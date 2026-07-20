import React from "react";

const BusinessBenefit = () => {
  return (
    <div className="how_it_work pb-65">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section_title text_center mb-60 mt-3">
             
              <div className="section_main_title">
                <h2>Business <span>Benefits</span>
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
                 <img src="assets/images/icon/Process1.svg" alt="Target and Campaign Efficiency"/>
                </div>
                <div className="single_work_content_title pb-2">
                  <h4> Improve Targeting and Campaign Efficiency
                  </h4>
                </div>
                <div className="single_it_work_content_text pt-1">
                  <p>
                  Increase engagement rates with clean, segmented contact data aligned to your ideal customer profile.

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
                <img src="assets/images/icon/Process2.svg" alt="lead generation and sales pipeline"/>
                </div>
                <div className="single_work_content_title pb-2">
                  <h4> Accelerate Lead Generation and Sales Pipelines</h4>
                </div>
                <div className="single_it_work_content_text pt-1">
                  <p>
                  Give your teams direct access to qualified contacts to reduce the sales cycle and boost productivity.

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
                <img src="assets/images/icon/Process3.svg" alt="CRM & ABM performance"/>
                </div>
                <div className="single_work_content_title pb-2">
                  <h4>Enhance CRM and ABM Performance
                  </h4>
                </div>
                <div className="single_it_work_content_text pt-1">
                  <p>
                  Strengthen internal systems and marketing strategies with accurate, structured data that integrates easily with existing platforms.


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

export default BusinessBenefit;
