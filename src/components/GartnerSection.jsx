import React from "react";

const GartnerSection = () => {
  return (
    <div className="column-sections pb-20">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="column-content pb-40">
            <div class="service_style_two_title pb-3 text-left">
                  <h4>Precision Intelligence. Marketing Impact.</h4>
            </div>
              <p className="text-left black">
             Our conversations with marketing leaders centered on three clear priorities:

              </p>
              <div class="col-md-12 col-lg-6 text-left">
            <div class="why-choose-icon  " data-wow-delay=".5">
              <div class="choose-icon up">
                <span class="chose-icon1"> <i class="bi bi-check-lg"></i></span>
                <h6>Driving GTM performance through early buyer intent signals
                </h6>
              </div>
            </div>
            <div class="why-choose-icon " data-wow-delay=".6">
              <div class="choose-icon up">
                <span class="chose-icon1"> <i class="bi bi-check2"></i></span>
                <h6>Scaling personalization with enriched firmographics and buying patterns

                </h6>
              </div>
            </div>
            <div class="why-choose-icon" data-wow-delay=".7">
              <div class="choose-icon up">
                <span class="chose-icon1"> <i class="bi bi-check2"></i></span>
                <h6>Maximizing ROI with intelligence-led targeting and segmentation
                </h6>
              </div>
            </div>
            
            {/* <div class="service_style_two_title pt-4 text-left">
                  <h6 className="w-100">One solution that sparked major interest: Next Tech Purchase®, our proprietary predictive engine that forecasts upcoming technology investments before traditional intent data can. For marketing teams, it means one thing:
                  </h6>
            </div>   */}
          
          </div>
            <p className="text-left">One solution that sparked major interest: <a href="https://proplusdata.co/next-tech-purchase">Next Tech Purchase®</a> , our proprietary predictive engine that forecasts upcoming technology investments before traditional intent data can. For marketing teams, it means one thing:</p>
            <p className="text-left">A first-mover advantage on tech-buying accounts that are still off your radar.</p>
          <div class="service_style_two_title pt-4 text-left">
                  <h4>Looking Ahead
                  </h4>
            </div>
          <p className="text-left">We leave Gartner’s Symposium not just with new relationships and strategic insights, but with renewed momentum to help global GTM teams convert signals into strategy. <br/>Missed us at the Gartner Expo? Let’s connect and explore how ProPlus Data’s <a href="https://proplusdata.co/next-tech-purchase">Next Tech Purchase®</a> and range of unified DaaS solutions can transform your next marketing move.</p>
         
          

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GartnerSection;
