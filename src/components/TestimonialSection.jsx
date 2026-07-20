import React from 'react';

const TestimonialSection = () => {
  const testimonials = [
    {
      
      role: 'VP, Marketing – Growth Markets',
      text: `ProPlus helped us prioritize high-conversion accounts and align marketing with sales execution. That shifted results quickly. We’ve seen the impact, and now we’re leaning on them to help us scale faster across regions and tighten the handoff to sales even further.`,
    },
    {
      
      role: ' Director, Demand Gen',
      text: `Partnering with ProPlus gave us the clarity we needed to focus on the right accounts. Their data-driven insights helped us accelerate pipeline growth and improve alignment between our sales and marketing teams. The partnership now plays a critical role in scaling our efforts across global markets.`,
    },
  ];

  return (
    <div className="testimonial_area bg_color2 pt-40 pb-40">
      <div className="container">
        <div className="row">
          {/* Section Title */}
          {/* <div className="col-lg-12">
            <div className="section_title text_center mb-50 mt-3">
              <div className="section_sub_title uppercase mb-3"></div>
              <div className="section_main_title">
                <h1>Testimonial Style 02</h1>
              </div>
              <div className="em_bar">
                <div className="em_bar_bg"></div>
              </div>
            </div>
          </div> */}
        </div>

        <div className="row">
          {testimonials.map((testimonial, index) => (
            <div className="col-lg-6 col-md-6 col-sm-12" key={index}>
              <div className="single_testimonial mt-3 mb-5">
                <div className="single_testimonial_content">
                  <div className="single_testimonial_content_text mb-4">
                    <p>{testimonial.text}</p>
                  </div>
                  <div className="single_testimonial_content_title mt-4">
                   
                    <span>{testimonial.role}</span>
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

export default TestimonialSection;
