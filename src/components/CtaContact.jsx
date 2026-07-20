import React from "react";


const CtaContact = () => {
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
              <div className="section_main_title text-left">
                <h5>Unlock conversations that spark transformation with verified contacts.

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

export default CtaContact;
