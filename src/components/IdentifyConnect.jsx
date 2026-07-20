import React from "react";

const IdentifyConnect = () => {
  return (
    <div className="how_it_work pt-50 pb-65">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section_title text_center mb-60 mt-3">
             
              <div className="section_main_title">
                <h2>Prospect  <span>Intelligence</span></h2>
                <h5>Identify ~ Connect ~ Convert</h5>
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
                 <img src="assets/images/icon/Process1.svg" alt="identify"/>
                </div>
                <div className="single_work_content_title pb-2">
                  <h4> Identify
                  </h4>
                </div>
                <div className="single_it_work_content_text pt-1">
                  <p>
                  There’s no one-size-fits-all approach when it comes to data intelligence. We identify client’s unique needs and provide <a href="https://proplusdata.co/proplus-intelligence-data-suite">tailored data solutions</a> that drive meaningful outcomes.


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
                <img src="assets/images/icon/Process2.svg" alt="connect"/>
                </div>
                <div className="single_work_content_title pb-2">
                  <h4> Connect</h4>
                </div>
                <div className="single_it_work_content_text pt-1">
                  <p>
                  We prioritize strong client and partner relationships, fostering trust and success through collaboration and open communication. Our customer-focused approach keeps us aligned with evolving market demands.

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
                <img src="assets/images/icon/Process3.svg" alt="convert"/>
                </div>
                <div className="single_work_content_title pb-2">
                  <h4>Convert

                  </h4>
                </div>
                <div className="single_it_work_content_text pt-1">
                  <p>
                  Raw data is just noise until it’s given structure. With our deep domain expertise and cutting-edge framework, we transform raw data into actionable insights that drive growth and success.


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

export default IdentifyConnect;
