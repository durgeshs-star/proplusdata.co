import React from "react";
import { Link } from "react-router-dom";

const solutionData = [
    {
    image: "assets/images/icon/Renewal & Subscription.svg",
    title: "Renewals",
    description: "Track the lifecycle of your prospects and proactively engage them before they consider competitors' solutions. ",
    link: "/renewal-intelligence"
  },
  {
    image: "assets/images/icon/technographics.svg",
    title: "Technographics",
    description: "Unlock deep tech insights with precise Technographics data, mapping every layer of a company’s tech stack.",
    link: "/technographics"
  },
  {
    image: "assets/images/icon/Intent-new.svg",
    title: "Intent Data",
    description: "Intent Data uncovers buying signals, helping you target high-value accounts poised for their next big tech investment.",
    link: "/intent-data"
  },
  {
    image: "assets/images/icon/Contact Data-new.svg",
    title: "Contact Data",
    description: "We deliver precise, relevant & accurate contact data to power meaningful connections and drive business success.",
    link: "/contact-data"
  },
  {
    image: "assets/images/icon/marketing-qualified-leads.svg",
    title: "MQL & Voice",
    description: "ProPlus Data delivers MQLs backed by real actions, ensuring smarter targeting.",
    link: "/marketing-qualified-leads"
  },

];

const SolutionsLeveraged = () => {
  return (
    <div className="flipbox_area top_feature">
      <div className="container">
        <div className="col-lg-12">
          <div className="section_title text_center black mt-30 mb-50">
            <div className="section_main_title">
              <h3>Solutions Leveraged</h3>
            </div>
          </div>
        </div>
        
        <div className="row nagative_margin d-flex justify-content-center flex-wrap">
          {solutionData.map((item, index) => (
            <div className="col-lg-2 col-md-6 col-sm-12 col-xs-6" key={index}>
              <Link to={item.link} className="text-decoration-none">
                <div className="techno_flipbox mb-30">
                  <div className="techno_flipbox_font">
                    <div className="techno_flipbox_inner">
                      <div className="flipbox_image">
                        <img
                          src={item.image}
                          alt={item.title}
                          style={{ width: "100px", marginBottom: "10px" }}
                        />
                      </div>
                      <div className="flipbox_title prospect">
                        <h3>{item.title}</h3>
                      </div>
                    </div>
                  </div>
                  <div className="techno_flipbox_back">
                    <div className="techno_flipbox_inner">
                      {/* <div className="flipbox_title">
                        <h3>{item.title}</h3>
                      </div> */}
                      <div className="flipbox_desc">
                        <p>{item.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default SolutionsLeveraged;
