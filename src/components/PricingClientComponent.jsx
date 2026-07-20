import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const PricingClientComponent = () => {
  const clients = [
    "8x8.png",
    "Adobe.png",
    "AWS.png",
    "aviso.png",
    "Blancco.png",
    "cisco.png",
    "Commvault.png",
    "crestron.png",
    "Databricks Logo.png",
    "Datarade logo.png",
    "equinix.png",
    "FICO.png",
    "kyndryl.png",
    "NEUDATA.png",
    "nice.png",
    "PATHOS.png",
    "SAP Marketplace.png",
    "singtel.png",
    "starhub.png",
    "SentinelOne.png",
    "twilio.png",
  ];

  return (
    <section id="clients" className="clients section">
        
      <div className="container mt-40 mb-40">
        <Swiper
          loop={true}
          speed={600}
          autoplay={{ delay: 1000, disableOnInteraction: false }}
          breakpoints={{
            320: { slidesPerView: 2, spaceBetween: 40 },
            480: { slidesPerView: 3, spaceBetween: 60 },
            640: { slidesPerView: 4, spaceBetween: 80 },
            992: { slidesPerView: 6, spaceBetween: 60 },
          }}
          modules={[Autoplay, Pagination]}
          className="clients-swiper"
        >
          {clients.map((client, index) => (
            <SwiperSlide key={index}>
              <img
                src={`assets/images/brand/${client}`}
                className="img-fluid"
                alt={client.replace(".png", "")}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default PricingClientComponent;
