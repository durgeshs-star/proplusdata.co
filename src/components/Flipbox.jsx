import React from "react";
import { Link } from "react-router-dom";


const flipboxData = [
  {
    image: "assets/images/icon/technographics.svg",
    title: "Technographics ",
    description: "Technographics Intelligence identifies high-potential accounts, enabling precise targeting and higher ROI for your ABM campaigns.",
    alt:"technographics",
    link: "/technographics"
  },
  {
    image: "assets/images/icon/Intent-new.svg",
    title: "Intent Data",
    description: "Intent Data reveals tech preferences and buying signals, helping you target high-potential accounts for smarter, data-driven decisions.",
    alt:"intent data",
    link: "/intent-data"
  },
  {
    image: "assets/images/icon/NTP-n.svg",
    title: (
      <>
        Next Tech Purchase<sup>&reg;</sup>
      </>
    ),
    description: "NTP precisely tracks technology shifts, enabling seamless transitions and alternative solutions for evolving digital landscapes.",
    alt:"next tech purchase",
    link: "/next-tech-purchase"
  },
  {
    image: "assets/images/icon/Renewal & Subscription.svg",
    title: "Renewal Intelligence ",
    description: "Track the lifecycle of your prospects and proactively engage them before they consider competitors' solutions. ",
    alt:"renewal",
    link: "/renewal-intelligence"
  }
 
  
];

const Flipbox = () => {
    return (
      <div className="flipbox_area top_feature" id="flipbox">
        <div className="container">
          <div className="row nagative_margin">
            {flipboxData.map((item, index) => (
              <div className="col-lg-3 col-md-6 col-sm-12 col-xs-6" key={index}>
                 <Link to={item.link} className="text-decoration-none">
                <div className="techno_flipbox mb-30">
                  <div className="techno_flipbox_font">
                    <div className="techno_flipbox_inner">
                      <div className="techno_flipbox_icon">
                     
                          <img src={item.image} alt={item.alt} />
                       
                      </div>
                      <div className="flipbox_title">
                        <h3>{item.title}</h3>
                      </div>
                    </div>
                  </div>
                  <div className="techno_flipbox_back">
                    <div className="techno_flipbox_inner">
                      <div className="flipbox_title">
                        <h3>{item.title}</h3>
                      </div>
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
  

export default Flipbox;
