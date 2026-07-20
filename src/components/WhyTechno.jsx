import React from "react";

export default function WhyTechno() {
  return (
    <div className="about_area pb-30">
      <div className="container">
        <div className="row">
          {/* Image Section */}
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-6">
            <div className="about_thumb">
              <img src="assets/images/slider/Technographic.webp" alt="Visualizing a B2B cloud-based technology stack with technographics data" />
            </div>
          </div>

          {/* Text Content Section */}
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-6">
            <div className="section_title text_left mb-10 mt-3">
              
              <div className="section_main_title text-left">
                <h2>Discover the Value Behind   
              
                <span> Tech Adoption Patterns</span>
                </h2>
              </div>
              <div className="em_bar">
                <div className="em_bar_bg"></div>
              </div>
              
            </div>

            <div className="singel_about_left mb-30">
              <div className="singel_about_left_inner mb-3">
                <div className="singel-about-content text-left">
                  <p>
                  <a href="https://proplusdata.co/technographics">Technographic Data</a> is like x-ray vision for B2B sales and marketing.
It gives you a complete view of the technology stack, tools, and platforms your target companies currently use.

                  </p>
                  <p>
                  We go beyond basic info, providing timestamped data, tech usage trends, and purchase intent signals so you can target the fit account.

                  </p>
                </div>
              </div>

              
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
