import React from "react";


const CtaAbout = () => {
  return (
    <div
      className="call_do_action bg_color2 pt-5 pb-70"
      style={{ backgroundImage: 'url(assets/images/glob-bg.png)' }}
    >
      <div className="container">
        <div className="row">
          {/* Section Title */}
          <div className="col-lg-12">
            <div className="section_title text_center mb-50 mt-3">
              <div className="section_sub_title uppercase mb-3"></div>
              
            
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="row">
          <div className="col-lg-9">
            <div className="section_title text_left">
              <div className="section_sub_title uppercase mb-3"></div>
              <div className="section_main_title">
                <h5>Ready to turn data intelligence into impact? Connect with us and discover how we can power your GTM | ABM strategies with precision!

                </h5>
              
              </div>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="section_button">
              <div className="button two mt-10">
                <a href="/contact-us">Connect With Us</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CtaAbout;
