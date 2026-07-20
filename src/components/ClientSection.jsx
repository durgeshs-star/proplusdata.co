import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ClientSection = () => {
  const brandImages = [
    { src: "assets/images/brand/8x8.svg", alt: "8x8" },
    { src: "assets/images/brand/Commvault.svg", alt: "Commvault" },
    { src: "assets/images/brand/AWS.svg", alt: "AWS" },
    { src: "assets/images/brand/Adobe.svg", alt: "Adobe" },
    { src: "assets/images/brand/FICO.svg", alt: "FICO" },
    { src: "assets/images/brand/crestron.svg", alt: "Crestron" },
    { src: "assets/images/brand/cisco.svg", alt: "Cisco" },
    { src: "assets/images/brand/equinix.svg", alt: "Equinix" },
    { src: "assets/images/brand/nice.svg", alt: "Nice" },
    { src: "assets/images/brand/Blancco.svg", alt: "Blancco" },
    { src: "assets/images/brand/aviso.svg", alt: "Aviso" },
    { src: "assets/images/brand/paypal.svg", alt: "PayPal" },
    { src: "assets/images/brand/SentinelOne.svg", alt: "SentinelOne" },
    { src: "assets/images/brand/twilio.svg", alt: "Twilio" },
    { src: "assets/images/brand/singtel.svg", alt: "Singtel" },
    { src: "assets/images/brand/PATHOS.svg", alt: "Pathos" },
    { src: "assets/images/brand/kyndryl.svg", alt: "Kyndryl" },
    { src: "assets/images/brand/Siemens.svg", alt: "Siemens" },
    { src: "assets/images/brand/starhub.svg", alt: "StarHub" },
   
    
    
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 500,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 480, settings: { slidesToShow: 2 } },
    ],
  };

  return (
    <div className="brand_area pt-35">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section_title text_center mb-50 mt-3">
              <div className="section_main_title">
                <h2>
                  Featured
                  <span> Adopters</span>
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

export default ClientSection;
