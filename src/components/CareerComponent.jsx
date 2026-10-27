import React from "react";

export default function CareerComponent() {
  return (
    <div className="about_area pt-45">
      <div className="container">
        <div className="row">
          

          {/* Text Content Section */}
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-6">
            <div className="section_title text_left mb-40 mt-3">
              
              <div className="section_main_title text-left">
                <h1>Careers</h1>
              </div>
              <div className="em_bar">
                <div className="em_bar_bg"></div>
              </div>
             
            </div>

            <div className="singel_about_left mb-30">
              <div className="singel_about_left_inner mb-3">
                <div className="singel-about-content text-left">
               
                  <p>
                  At ProPlus Data, we build teams the same way we build our solutions, with precision, intelligence, and a focus on outcomes. Our people work across disciplines to power solutions like <a href="https://proplusdata.co/technographics">Technographics</a>, <a href="https://proplusdata.co/next-tech-purchase">Next Tech Purchase®</a>, and <a href="https://proplusdata.co/renewal-intelligence">Renewal Intelligence</a>, turning complex data into decisive advantage for global businesses. Whether you’re diving into tech research, shaping digital campaigns, or streamlining operations, every role here contributes to innovations that matter. If you bring expertise, curiosity, and the drive to turn insight into impact, you’ll find a workplace that values fresh ideas, encourages growth, and celebrates collaboration.



                  </p>
                  <p className="career-email-note">
                    Please share your CV on <a href="mailto:careers@proplusdata.co">careers@proplusdata.co</a>
                  </p>

                </div>
               
              </div>
             
              
            </div>
           
          </div>
          {/* Image Section */}
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-6">
            <div className="about_thumb about-page ml-4">
              <img src="/assets/images/Career.webp" alt="current openings" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
