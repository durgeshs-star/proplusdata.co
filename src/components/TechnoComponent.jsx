import React from "react";

export default function TechnoComponent() {
  return (
    <div className="about_area pt-45">
      <div className="container">
        <div className="row">
          

          {/* Text Content Section */}
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-6">
            <div className="section_title text_left mb-40 mt-3">
              
              <div className="section_main_title text-left">
                <h1>Revolutionize Outreach with  
              
                <span> Technographics!</span>
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
                <strong>Want to know exactly which technology your ideal customers has adopted or when they’re ready to switch?</strong>
                </p>
                  <p>
                  At <a href="https://proplusdata.co/"> ProPlus Data</a>, we help you uncover deep insights into your prospects’ tech stacks, so you can target smarter, sell faster, and close better deals.
                  </p>
                  <p>
                  From cloud platforms and cybersecurity tools to CRM systems and firewalls, Technographics or Technographic Data shows you who’s using what and when they might need you next!
                  </p>
                </div>
              </div>

              
            </div>
          </div>
          {/* Image Section */}
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-6">
            <div className="about_thumb">
              <img src="/assets/images/technographics-data.gif" alt=" Technographics or Technographic Data" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
