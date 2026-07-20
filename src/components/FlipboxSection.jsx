import React from "react";

const flipboxes = [
  {
    iconClass: "flaticon-global-1",
    title: "Provide All Kind Of IT Services",
    description: "Whether bringing new amazing products and services to market",
  },
  {
    iconClass: "flaticon-data",
    title: "Solution For All IT Security",
    description: "Whether bringing new amazing products and services to market",
  },
  {
    iconClass: "flaticon-interaction",
    title: "All IT Consultancy Solution",
    description: "Whether bringing new amazing products and services to market",
  },
  {
    iconClass: "flaticon-developer",
    title: "Best Experience Engineer",
    description: "Whether bringing new amazing products and services to market",
  },
];

const FlipboxSection = () => {
  return (
    <div className="flipbox_area top_feature">
      <div className="container">
        <div className="row nagative_margin">
          {flipboxes.map((box, index) => (
            <div className="col-lg-3 col-md-6 col-sm-12 col-xs-6" key={index}>
              <div className="techno_flipbox mb-30">
                <div className="techno_flipbox_font">
                  <div className="techno_flipbox_inner">
                    <div className="techno_flipbox_icon">
                      <div className="icon">
                        <i className={box.iconClass}></i>
                      </div>
                    </div>
                    <div className="flipbox_title">
                      <h3>{box.title}</h3>
                    </div>
                  </div>
                </div>
                <div className="techno_flipbox_back">
                  <div className="techno_flipbox_inner">
                    <div className="flipbox_title">
                      <h3>{box.title}</h3>
                    </div>
                    <div className="flipbox_desc">
                      <p>{box.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FlipboxSection;
