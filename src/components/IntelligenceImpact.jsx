import React from 'react';

const IntelligenceImpact = () => {
  const services = [
    {
     
      title: 'Intent Signals',
      description:
        'We began by identifying accounts showing active interest in relevant solutions, captured through digital behavior, content engagement, and research activity.',
    },
    {
      
      title: 'Technographic Account Intelligence',
      description:
        'Each account was then profiled for its current technology environment, including contract detection dates, deployment maturity, and potential switch triggers, enabling more contextual targeting.',
    },
    {
      
      title: 'Renewal Intelligence',
      description:
        'Accounts were further filtered based on contract renewal timelines and tech lifecycle stages. This allowed us to prioritize outreach when decision windows were most open, before renewal inertia set in.',
    },
    {
      
      title: 'EDM Activation',
      description:
        'Targeted messaging was delivered via electronic direct mail, customized to reflect the buyer’s tech stack, intent behavior, and regional nuances.',
    },
    {
      
      title: 'VVL Qualification',
      description:
        'Every response was validated through direct human conversations with decision-makers, confirming pain points, priorities, and project timelines.',
    },
    {
      
      title: 'Lead Delivery',
      description:
        'Only verified, sales-ready opportunities, backed by real buyer intent and tech context, were passed to the client’s commercial teams for action.',
    },
  ];
 

  return (
    <div className="service_area bg_color2 pt-0 pb-70">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section_title text_center mb-55">
             
              
             
            </div>
          </div>
        </div>
        <div className="row">
          {services.map((service, index) => (
            <div className="col-lg-4 col-md-6 col-sm-12" key={index}>
              <div className="service_style_five pt-40 pb-40 pl-25 pr-3 mb-30">
                
                <div className="service_style_five_title mb-2 text-left">
                  <h4>{service.title}</h4>
                </div>
                <div className="service_style_five_text text-left">
                  <p>{service.description}</p>
                </div>
               
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IntelligenceImpact;
