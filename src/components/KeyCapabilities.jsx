import React from "react";

const solutionsData = [
  {
    title: "Firmographic Insights",
    description:
      "A detailed profile of a business, including industry, size, location, structure, and performance.",
    image: "assets/images/icon/Firmographic.svg",
    backgroundImage: "assets/images/back.png",
    backTitle: "Firmographic Insights",
    alt: "firmographic insights",
  },
  {
    title: "Demographic Insights",
    description:
      "Uncover detailed insights on key stakeholders, including names, roles, responsibilities, and skillsets, enabling precision-targeted engagement",
    image: "assets/images/icon/Demographics.svg",
    backgroundImage: "assets/images/back.png",
    backTitle: "Demographic Insights",
    alt: "Demographic Insights",
  },
  {
    title: "Buyer Group Mapping",
    description:
      "Identify and understand buyer cohorts to effectively navigate complex decision-making ecosystems within target organizations.",
    image: "assets/images/icon/Org Chart.svg",
    backgroundImage: "assets/images/Frame 14.png",
    backTitle: "Buyer Group Mapping",
    alt: "Buyer Group Mapping",
  },
  {
    title: "Technology Adoption",
    description:
      "Access real-time insights into current and emerging technology adoption trends to inform and tailor go-to-market strategies.",
    image: "assets/images/icon/Tech insights.svg",
    backgroundImage: "assets/images/Frame 14.png",
    backTitle: "Technology Adoption",
    alt: "Technology Adoption",
  },
  {
    title: "Competitor Insights",
    description:
      "Gain strategic intelligence on the competitors to uncover differentiators and proactively outmanoeuvre them.",
    image: "assets/images/icon/Competitor Insights.svg",
    backgroundImage: "assets/images/Frame 14.png",
    backTitle: "Competitor Insights",
    alt: "Competitor Insights",
  },
  {
    title: "Digital Transformation",
    description:
      "Evaluate an organization’s financial trajectory and digital initiatives to ensure alignment with your value proposition.",
    image: "assets/images/icon/Digital Transformation.svg",
    backgroundImage: "assets/images/Frame 14.png",
    backTitle: "Digital Transformation",
    alt: "Digital Transformation",
  },
  {
    title: "Technology Investments",
    description:
      "Understand enterprise-level technology investment priorities to strategically position your solutions in line with business objectives.",
    image: "assets/images/icon/tech Spend.svg",
    backgroundImage: "assets/images/Frame 14.png",
    backTitle: "Technology Investments",
    alt: "Technology Investments",
  },
  {
    title: "Potential Decision Makers",
    description:
      "Precisely identify decision-makers and influencers to maximize outreach effectiveness and accelerate engagement.",
    image: "assets/images/icon/Potential Decision Makers.svg",
    backgroundImage: "assets/images/Frame 14.png",
    backTitle: "Potential Decision Makers",
    alt: "Potential Decision Makers",
  },
];

const KeyCapabilities = () => {
  return (
    <div
      className="flipbox_area pt-45 pb-70"
      style={{ backgroundImage: `url(assets/images/slider/solution2.jpg)` }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section_title text_center white mb-55">
              <div className="section_main_title">
                <h2>Key Features</h2>
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
                      <img src={service.image} alt={service.alt} />
                    </div>
                    <div className="flipbox_title">
                      <h3>{service.title}</h3>
                    </div>
                  </div>
                </div>
                <div className="techno_flipbox_back">
                  <div className="techno_flipbox_inner">
                    <div className="flipbox_title mb-3">
                      <h3>{service.backTitle}</h3>
                    </div>
                    <div className="flipbox_desc">
                      <p>{service.description}</p>
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

export default KeyCapabilities;
