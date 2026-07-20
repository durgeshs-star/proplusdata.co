import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const IndustriesSection = () => {
  const brandImages = [
    { src: "assets/images/brand/cloud.svg", alt: "Cloud Industry" },
    { src: "assets/images/brand/logistics.svg", alt: "Logistics Industry" },
    { src: "assets/images/brand/it-services.svg", alt: "IT Services Industry" },
    { src: "assets/images/brand/telecommunication.svg", alt: "Telecommunication Industry" },
    { src: "assets/images/brand/saas.svg", alt: "SaaS Industry" },
    { src: "assets/images/brand/fintech.svg", alt: "FinTech Industry" },
    { src: "assets/images/brand/end-point-security.svg", alt: "Endpoint Security Industry" },
    { src: "assets/images/brand/computer hw.svg", alt: "Computer Hardware Industry" },
    { src: "assets/images/brand/computer-nw.svg", alt: "Computer Networking Industry" },
    { src: "assets/images/brand/data-center.svg", alt: "Data Center Industry" },
    { src: "assets/images/brand/cad.svg", alt: "CAD Industry" },
    { src: "assets/images/brand/cloud-communication.svg", alt: "Cloud Communication Industry" },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 480, settings: { slidesToShow: 2 } },
    ],
  };

  return (
    <div className="brand_area pt-35 pb-15">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section_title text_center mb-50 mt-3">
              <div className="section_main_title">
                <h2>
                  Proven Across 
                  <span> Industries</span>
                </h2>
              </div>
              <div className="em_bar">
                <div className="em_bar_bg"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <Slider {...settings} className="brand_list curosel-style">
              {brandImages.map((brand, i) => (
                <div className="single_brand mt-3 mb-5" key={i}>
                  <div className="single_brand_thumb">
                    <img src={brand.src} alt={brand.alt} />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustriesSection;
