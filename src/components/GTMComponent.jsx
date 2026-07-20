import React from 'react';

const GTMComponent = () => {
  return (
    <div className="main_contact_area style_three pt-80 pb-90">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Column: Contact Info */}
          <div className="col-lg-6">
            <div className="section_title text_left mb-50">
              
              <div className="section_main_title text-left">
                <h1>Unlock Your GTM Truth in Minutes</h1>
              </div>
             
            </div>

           <p className='text-left gtm-text'>A fast, high-clarity assessment tool designed for leaders who want to sharpen their 2026 commercial play without guesswork.</p>
          <div className="feature-single-box-inner">
                <div className="em-feature-title">
                  <h2 className='text-left'>Start Your GTM Assessment </h2>
                  <p className='text-left gtm-text1'>Here’s what this tool helps you uncover:</p>
                  <ul className="feature-bullets gtm-bullets ">
                    <li>● Where your current GTM engine is strong</li>
                    <li>● Where revenue opportunities are leaking</li>
                    <li>● How aligned are your data, messaging and pipeline motions really are</li>
                    <li>● What to fix next to accelerate demand, efficiency and conversion</li>
                  </ul>
                </div>
              </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="col-lg-6">
            <div className="contact_from">
              <div className="contact_from_box">
                <div className="contact_title pb-4">
                  <h4>Fill in your details to unlock the tool.</h4>
                </div>
                <form
  id="contact_form"
  action="https://api.web3forms.com/submit"
  method="POST">
                  <input type="hidden" name="redirect" value="https://proplusdata.co/thank-you-gtm"/>
                   <input type="hidden" name="access_key" value="9df4c372-c813-4806-97bb-685a8358a058"/>
                
                   <div className="row">
                    <div className="col-lg-12">
                      <div className="form_box mb-30 text-black">
                        <input type="text" name="firstName" placeholder="First Name" required />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form_box mb-30 text-black">
                        <input type="text" name="lastName" placeholder="Last Name" required />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form_box mb-30">
                        <input type="email" name="email" placeholder="Email Address" required />
                      </div>
                    </div>
                   
                    <div className="col-lg-12">
                      
                      <div className="quote_btn">
                        <button className="btn" type="submit">Begin Assessment</button>
                      </div>
                    </div>
                  </div> 
    
                </form>
                <div className="status"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GTMComponent;
