import React from "react";

const HowTechnoWorks = () => {
  return (
    <div className="how_it_work pt-50 pb-65">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section_title text_center mb-60 mt-3">
             
              <div className="section_main_title">
                <h1>How It Works?</h1>
              </div>
              <div className="em_bar">
                <div className="em_bar_bg"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          {/* Step 1 */}
          <div className="col-lg-4 col-md-6 col-sm-12 mb-35">
            <div className="single_it_work mb-4">
              <div className="single_it_work_content pl-2 pr-2">
                <div className="single_it_work_content_list pb-5">
                 <img src="assets/images/icon/Process1.svg" alt="data points"/>
                </div>
               
                <div className="single_it_work_content_text pt-1">
                  <p>
                  We scan millions of data points across the web, networks, and digital footprints.


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
                <img src="assets/images/icon/Process2.svg" alt="tech stack"/>
                </div>
               
                <div className="single_it_work_content_text pt-1">
                  <p>
                  The AI-powered engines identify tech stacks, deployment dates, and adoption trends.
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
                <img src="assets/images/icon/Process3.svg" alt="verified technographic data"/>
                </div>
                
                <div className="single_it_work_content_text pt-1">
                  <p>
                  You get clean, verified technographics data, ready to plug into your CRM, marketing platform, or sales strategy.


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

export default HowTechnoWorks;
