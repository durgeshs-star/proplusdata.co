import React from "react";

export default function NtpComponent() {
  return (
    <div className="about_area pt-45 pb-10">
      <div className="container">
        <div className="row">
          

          {/* Text Content Section */}
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-6">
            <div className="section_title text_left mb-40 mt-3">
              
              <div className="section_main_title text-left">
                <h1>Identify Replacement Opportunity with <br/>
              
                <span> Next Tech Purchase<sup>&reg;</sup></span>
                </h1>
              </div>
              <div className="em_bar">
                <div className="em_bar_bg"></div>
              </div>
            
            </div>

            <div className="singel_about_left mb-30">
              <div className="singel_about_left_inner mb-3">
                <div className="singel-about-content text-left">
                <p>
                <strong>Imagine, 87% of your audience isn’t ready to buy today; but when <br/> they are, will your solution be the first they think of?</strong>
                </p>
                  <p>
                  Timing is a decisive advantage. When organizations begin exploring new technology investments, early visibility into that intent creates a powerful opportunity. <br/><b>Next Tech Purchase<sup>&reg;</sup></b> enables access to high-potential accounts actively considering software, hardware, cloud, AI tools, and digital infrastructure upgrades or replacements.
                  </p>
                  <p>
                  Leveraging refreshed (45-60 days) signals and razor-sharp technographic insights, Next Tech Purchase<sup>&reg;</sup> puts you in front of high-potential accounts before your competitors even know they’re in play.

                  </p>
                </div>
              </div>

              
            </div>
          </div>
         {/* Image Section */}
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-6">
            <div className="about_thumb">
              <video
                src="/assets/images/Next-Tech-Purchase.mp4"
                autoPlay
                muted
                loop
                playsInline
                style={{
                  width: "auto",
                  height: "auto",
                  maxWidth: "100%",
                  display: "block",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
