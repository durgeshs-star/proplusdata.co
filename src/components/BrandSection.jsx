import React from "react";

const BrandSection = () => {
  const brands = [
    { img: "assets/images/brand/Databricks Logo.svg", link: "", alt: "Brand 1" },
    { img: "assets/images/brand/Datarade logo.svg", link: "", alt: "Brand 2" },
    { img: "assets/images/brand/NEUDATA.svg", link: "", alt: "Brand 3" },
    { img: "assets/images/brand/SAP Marketplace.svg", link: "", alt: "Brand 4" },
    { img: "assets/images/brand/Google Cloud Analytics Hub Logo.svg", link: "", alt: "Brand 5" },
  ];

  return (
    
    <div className="brand_area pt-10 pb-40 bg_color2">
       <div className="section_main_title pb-40 client-section">
                <h2>Now available on all Leading Marketplaces</h2>
              </div>
       
      <div className="container ">
        <div className="brand_list">
          {brands.map((brand, index) => (
            <a
              key={index}
              href={brand.link}
              target="_blank"
              rel="noopener noreferrer"
              className="single_brand"
            >
              <div className="single_brand_thumb">
                <img src={brand.img} alt={brand.alt} />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandSection;
