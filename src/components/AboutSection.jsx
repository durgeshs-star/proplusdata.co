import React from "react";

const AboutSection = () => {
  return (
    <div className="about_area pb-50">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-6">
            <div className="single_about_thumb mb-3">
              <div className="single_about_thumb_inner">
                <img src="/assets/images/next-tech-purchase.gif" alt="Sample report of Next tech purchase" />
              </div>
            </div>
            
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-6">
            <div className="section_title text_left mb-40 mt-3 text-left">
           
              <div className="section_main_title">
                <h2>Empowering your business with <span>data-driven intelligence.</span></h2>
              
              </div>
              <div className="em_bar">
                <div className="em_bar_bg"></div>
              </div>
              <div className="section_content_text pt-4">
                <p>
                At ProPlus Data, we go beyond delivering insights, we empower businesses with precision-driven intelligence that fuels smarter decision-making.
                </p>
              </div>
            </div>
            <div className="singel_about_left mb-30 text-left">
              <div className="singel_about_left_inner mb-3 d-flex align-items-center">
                <div className="about_icon mr-3">
                  <div className="icon">
                    {/* <i className="flaticon-padlock"></i> */}
                    <img src="assets/images/icon/Accuracy.svg" alt="accuracy"/>
                  </div>
                </div>
                <div className="singel-about-content">
                  <h4>Accuracy That Drives Results</h4>
                  <p>
                  Our cutting edge solutions intelligence ensures 100% accuracy, helping you refine your targeting and maximize impact.

                  </p>
                </div>
              </div>
              <div className="singel_about_left_inner d-flex align-items-center">
                <div className="about_icon mr-3">
                  <div className="icon">
                    {/* <i className="flaticon-code"></i> */}
                    <img src="assets/images/icon/Global.svg" alt="global reach"/>
                  </div>
                </div>
                <div className="singel-about-content">
                  <h4>Global Impact, Unlimited Potential
                  </h4>
                  <p>
                  With a strong presence in <strong>150+</strong> countries across <strong>North America, EMEA and APAC,</strong> we bring deep market insights to fuel your global expansion.

                  </p>
                </div>
              </div>
              <div className="singel_about_left_inner d-flex align-items-center">
                <div className="about_icon mr-3">
                  <div className="icon">
                    {/* <i className="flaticon-code"></i> */}
                    <img src="assets/images/icon/Comprehensive-data.svg" alt="data-solution"/>
                  </div>
                </div>
                <div className="singel-about-content">
                  <h4>Comprehensive Data Solutions
                  </h4>
                  <p>
                  From prospect identification to campaign precision, ProPlus Data's tailored solutions help you reach the right audience at the right time.

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

export default AboutSection;
