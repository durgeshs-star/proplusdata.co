import React from "react";

const solutionsData = [
  {
    title: "Technographics Data",
    description: "Unlock deep tech insights with precise Technographics data, mapping every layer of a company’s tech stack.",
    image: "assets/images/icon/techno-new.svg",
    backgroundImage: "assets/images/back.png",
    backTitle: "Technographics Data",
    link: "/technographics",
    alt: "technographics data",
  },
  {
    title: null,
    titleWithMark: (
      <>
        Next Tech Purchase<sup>&reg;</sup>
      </>
    ),
    description: "NTP meticulously identifies technology shifts, enabling seamless substitution or discovery of alternative solutions over time.",
    image: "assets/images/icon/ntp-new.svg",
    backgroundImage: "assets/images/Frame 14.png",
    backTitle: null,
    backTitleWithMark: (
      <>
        Next Tech Purchase<sup>&reg;</sup>
      </>
    ),
    link: "/next-tech-purchase",
    alt: "next tech purchase",
  },
  {
    title: "Intent Data",
    description: "Intent Data uncovers buying signals, helping you target high-value accounts poised for their next big tech investment.",
    image: "assets/images/icon/intent-data-new.svg",
    backgroundImage: "assets/images/Frame 14.png",
    backTitle: "Intent Data",
    link: "/intent-data",
    alt: "intent data",
  },
  {
    title: "Renewal Intelligence",
    description: "Real-time Renewal & Subscription insights that help you track the lifecycle of your target accounts.",
    image: "assets/images/icon/Renewal.svg",
    backgroundImage: "assets/images/Frame 14.png",
    backTitle: "Renewal Intelligence",
    link: "/renewal-intelligence",
    alt: "renewal Intelligence",
  },
  {
    title: "Contact Data",
    description: "We deliver precise, relevant & accurate contact data to power meaningful connections and drive business success.",
    image: "assets/images/icon/Contact Data.svg",
    backgroundImage: "assets/images/Frame 14.png",
    backTitle: "Contact Data",
    link: "/contact-data",
    alt: "contact data",
  },
  {
    title: "Demand Gen",
    description: "Talk to Buyers, Not Databases Voice-verified leads, ready to engage.",
    image: "assets/images/icon/mql-new.svg",
    backgroundImage: "assets/images/Frame 14.png",
    backTitle: "Demand Gen",
    link: "/demand-gen",
    alt: "demand gen",
  },
  {
    title: "Buying Group",
    description: "Leverage the power of collective purchasing decisions with ProPlus Data. Get insights into buying behaviors and preferences to enhance your B2B sales and marketing strategies.",
    image: "assets/images/icon/Buyer Persona.svg",
    backgroundImage: "assets/images/Frame 14.png",
    backTitle: "Buying Group",
    link: "/buying-group",
    alt: "Buying Group",
  },
  {
    title: "Event Audience Acquisition",
    description: "Maximize event success with precision-targeted audience acquisition, connecting you with the right attendees effortlessly.",
    image: "assets/images/icon/event-audience-new.svg",
    backgroundImage: "assets/images/Frame 14.png",
    backTitle: "Event Audience Acquisition",
    link: "/event-audience-acquisition",
    alt: "event audience acquisition",
  }
];

const SolutionSection = () => {
  return (
    <div className="flipbox_area pt-85 pb-70" id="daas-solution" style={{ backgroundImage: `url(assets/images/slider/solution2.jpg)` }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section_title text_center white mb-55">
              <div className="section_main_title">
                <h2>Unified DaaS Solutions</h2>
              </div>
              <div className="em_bar">
                <div className="em_bar_bg"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {solutionsData.map((service, index) => (
            <div className="col-lg-3 col-md-6 col-sm-12 col-xs-6" key={index}>
              <div className="techno_flipbox mb-30">
                <div className="techno_flipbox_font">
                  <div className="techno_flipbox_inner">
                    <div className="techno_flipbox_icon">
                      <img src={service.image} alt={service.alt || "solution icon"} />
                    </div>
                    <div className="flipbox_title">
                      <h3>{service.titleWithMark ? service.titleWithMark : service.title}</h3>
                    </div>
                  </div>
                </div>
                <div className="techno_flipbox_back">
                  <div className="techno_flipbox_inner">
                    <div className="flipbox_title">
                      <h3>{service.backTitleWithMark ? service.backTitleWithMark : service.backTitle}</h3>
                    </div>
                    <div className="flipbox_desc">
                      <p>{service.description}</p>
                    </div>
                    <div className="flipbox_button">
                      {service.link && (
                        <a href={service.link}>
                          Read More <i className="fa fa-angle-double-right"></i>
                        </a>
                      )}
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

export default SolutionSection;
