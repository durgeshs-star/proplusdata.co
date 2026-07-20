import React from "react";

const StrategicAdvantage = () => {
  return (
    <div className="how_it_work pt-50 pb-65">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section_title text_center mb-60 mt-3">
             
              <div className="section_main_title">
                <h2>Strategic <span>Advantages</span></h2>
              </div>
              <div className="em_bar">
                <div className="em_bar_bg"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          {/* Step 1 */}
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="single_it_work mb-4">
              <div className="single_it_work_content pl-2 pr-2">
                <div className="single_it_work_content_list pb-5">
                 <img src="assets/images/icon/Process1.svg" alt="maximized roi"/>
                </div>
                <div className="single_work_content_title pb-2">
                  <h4> Maximized ROI</h4>
                </div>
                <div className="single_it_work_content_text pt-1">
                  <p>
                  Channel resources toward high-potential prospects backed by validated <a href="https://proplusdata.co/intent-data">intent,</a> ensuring every investment delivers maximum returns. 

                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="single_it_work mb-4">
              <div className="single_it_work_content pl-2 pr-2">
                <div className="single_it_work_content_list  pb-5">
                <img src="assets/images/icon/Process2.svg" alt="competitive supremacy"/>
                </div>
                <div className="single_work_content_title pb-2">
                  <h4> Competitive Supremacy</h4>
                </div>
                <div className="single_it_work_content_text pt-1">
                  <p>
                  Anticipate market trends and competitor maneuvers, positioning your business as the preferred choice.  
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="single_it_work mb-4">
              <div className="single_it_work_content pl-2 pr-2">
                <div className="single_it_work_content_list  pb-5">
                <img src="assets/images/icon/Process3.svg" alt="operational excellence"/>
                </div>
                <div className="single_work_content_title pb-2">
                  <h4>Operational Excellence
                  </h4>
                </div>
                <div className="single_it_work_content_text pt-1">
                  <p>
                  Eliminate inefficiencies with a clear, data-driven roadmap to engage prospects, streamlining execution.


                  </p>
                </div>
              </div>
            </div>
          </div>

            {/* Step 4 */}
            <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="single_it_work mb-4">
              <div className="single_it_work_content pl-2 pr-2">
                <div className="single_it_work_content_list three pb-5">
                <img src="assets/images/icon/Process4.svg" alt="sustainable growth"/>
                </div>
                <div className="single_work_content_title pb-2">
                  <h4>Sustainable Growth
                  </h4>
                </div>
                <div className="single_it_work_content_text pt-1">
                  <p>
                  Build lasting relationships with decision-makers by addressing their needs with precision, fostering loyalty and advocacy.


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

export default StrategicAdvantage;
