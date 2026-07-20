import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

export default function PricingTestimonial() {

  const testimonials = [
    {
      role: "Head of RevOps",
      badge: "Verified User",
      review:
        "Nexora has completely transformed how we prioritize accounts and engage with high-intent prospects."
    },
    {
     
      role: "Director of Demand Gen",
      badge: "G2 Verified",
      review:
        "Nexora has completely transformed how we prioritize accounts and engage with high-intent prospects."
    },
    {
     
      role: "Chief Revenue Officer",
      badge: "Verified User",
     
      review:
        "Nexora has completely transformed how we prioritize accounts and engage with high-intent prospects."
    },
    {
      
      role: "Marketing Manager",
      badge: "Verified User",
      
      review:
        "Nexora has completely transformed how we prioritize accounts and engage with high-intent prospects."
    }
  ];

  return (
    <div className="testimonial-section pt-80 pb-80">
      <div className="container">

        {/* Heading */}
       

        {/* Slider */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={25}
          slidesPerView={3}
          loop={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false
          }}

          breakpoints={{
            0: {
              slidesPerView: 1
            },
            768: {
              slidesPerView: 2
            },
            1200: {
              slidesPerView: 3
            }
          }}
        >

          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>

              <div className="testimonial-card">

                {/* Quote Icon */}
                <div className="quote-icon text-left">
                  ❝
                </div>

                {/* Review Text */}
                <div className="testimonial-text text-left">
                  <p>{item.review}</p>
                </div>

                {/* Bottom User Area */}
                <div className="testimonial-user">

                  {/* Left */}
                  <div className="user-left">

                   

                    <div className="user-info">
                      
                      <span>{item.role}</span>
                    </div>

                  </div>

                  {/* Right Badge */}
                  <div className="user-badge">
                    {item.badge}
                  </div>

                </div>

              </div>

            </SwiperSlide>
          ))}

        </Swiper>

      </div>

      <style jsx>{`
        .testimonial-section {
          background: #f7f9fc;
        }

        .section-title h2 {
          font-size: 60px;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 15px;
        }

        .section-title p {
          font-size: 18px;
          color: #64748b;
        }

        .testimonial-card {
          background: #fff;

          border: 1px solid #e5e7eb;

          border-radius: 24px;

          padding: 35px;

          min-height: 350px;

          display: flex;
          flex-direction: column;
          justify-content: space-between;

          transition: 0.3s ease;

          overflow: hidden;
        }

        .testimonial-card:hover {
          transform: translateY(-8px);

          box-shadow: 0 15px 35px rgba(0,0,0,0.08);
        }

        .quote-icon {
          font-size: 60px;
          color: #d1fae5;
          line-height: 1;
          margin-bottom: 20px;
        }

        .testimonial-text {
          flex: 1;
          margin-bottom: 30px;
        }

        .testimonial-text p {
          font-size: 18px;
          line-height: 1.9;
          color: #475569;
        }

        .testimonial-user {
          border-top: 1px solid #e5e7eb;

          padding-top: 20px;

          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .user-left {
          display: flex;
          align-items: center;
          gap: 15px;
        }


        .user-info h4 {
          font-size: 24px;
          font-weight: 700;
          margin-bottom: 4px;
          color: #0f172a;
        }

        .user-info span {
          font-size: 15px;
          color: #94a3b8;
          text-align: left;
        }

        .user-badge {
          background: #e0f2fe;

          color: #0284c7;

          padding: 8px 14px;

          border-radius: 30px;

          font-size: 13px;
          font-weight: 600;

          white-space: nowrap;
        }

        @media (max-width: 991px) {

          .section-title h2 {
            font-size: 42px;
          }

          .testimonial-card {
            min-height: auto;
          }

        }

        @media (max-width: 576px) {

          .testimonial-card {
            padding: 25px;
          }

          .testimonial-user {
            flex-direction: column;
            align-items: flex-start;
            gap: 15px;
          }

        }
      `}</style>
    </div>
  );
}