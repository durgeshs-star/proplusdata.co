import React from "react";

export default function EventComponent() {
  return (
    <div className="about_area pt-45 pb-10">
      <div className="container">
        <div className="row">
          

          {/* Text Content Section */}
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-6">
            <div className="section_title text_left mb-40 mt-3">
              
              <div className="section_main_title text-left">
                <h1>Maximize Your Event’s ROI 
  
              
                <span> with the Right Audience</span>
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
                  Want to ensure your next event delivers real results? The key is attracting attendees who are genuinely interested and ready to engage. At ProPlus Data, we specialize in audience acquisition solutions that connect you with the perfect attendees, driving better ROI and meaningful interactions.

                  </p>
                  <p>
                  We don’t just guess who your audience should be. Using rich data insights, we identify and verify individuals who match your event’s goals, whether it’s by demographics, interests, or industry. This laser-focused approach ensures your invitations reach people eager to engage with your content.

                  </p>
                </div>
              </div>

              
            </div>
          </div>
          {/* Image Section */}
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-6">
            <div className="about_thumb">
              <img src="/assets/images/event-audience.webp" alt="event audience acquisition" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
