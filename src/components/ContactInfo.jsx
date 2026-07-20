import React from 'react';

const ContactInfo = () => {
  const handleSubmit = (e) => {
  const email = e.target.email.value.trim().toLowerCase();

  const blockedDomains = [
    "gmail.com",
    "yahoo.com",
    "hotmail.com",
    "outlook.com",
    "rediffmail.com",
    "icloud.com"
  ];

  const domain = email.split("@")[1];

  if (blockedDomains.includes(domain)) {
    e.preventDefault();
    alert("Please enter your business email address.");
    return;
  }
};
  return (
    <div className="main_contact_area style_three pt-80 pb-90">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Column: Contact Info */}
          <div className="col-lg-6">
            <div className="section_title text_left mb-40">
              
              <div className="section_main_title text-left">
                <h1>Get in Touch</h1>
              </div>
             
              <div className="em_bar">
                <div className="em_bar_bg"></div>
              </div>
            </div>

            <div className="contact_address">
              <div className="contact_address_company mb-50 text-left">
                 <p>We’re actively hiring, but this form is for GTM inquiries only.<br/>
Applications submitted here won’t be reviewed.<br/>
For opportunities, please visit our <a href="/careers">Careers </a>page.</p>
                  <p><b>Interested candidates can share their resume at <a href="mailto:hr@proplusdata.com">hr@proplusdata.com</a></b></p>
                <ul>
                <li>
                <a href="https://calendly.com/amit-chatterjee_proplus"><i className="fa fa-calendar"></i></a>
                    {/* <!-- Calendly link widget begin --> */}
  <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet"/>
<script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript" async></script>
<a href="https://calendly.com/amit-chatterjee_proplus" target="_blank" rel="noreferrer" onclick="Calendly.initPopupWidget({url: 'https://calendly.com/amit-chatterjee_proplus'});return false;">Book a Meeting</a>

                   
                  </li>
                  <li>
                  <a href="mailto:info@proplusdata.co"><i className="fa fa-envelope-o"></i></a>
                    <span><a href="mailto:info@proplusdata.co">info@proplusdata.co</a></span>
                  </li>
                  <li>
                  <a target="_blank" rel="noreferrer" href="https://wa.me/+919112110691"><i className="fa fa-whatsapp"></i></a>
                    <span> <a target="_blank" rel="noreferrer" href="https://wa.me/+919112110691">Chat With Us!</a></span>
                  </li>
                  
                 
                </ul><br/>
               
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="col-lg-6">
            <div className="contact_from">
              <div className="contact_from_box">
                <div className="contact_title pb-4">
                  <h3>Let's Connect!</h3>
                </div>
                <form
                  id="contact_form"
                  action="https://api.web3forms.com/submit"
                  method="POST"
                  onSubmit={handleSubmit}
                >
                   <input type="hidden" name="redirect" value="/thankyou"/> 
                   <input type="hidden" name="access_key" value="9df4c372-c813-4806-97bb-685a8358a058"/>
                
                   <div className="row">
                    <div className="col-lg-12">
                      <div className="form_box mb-30 text-black">
                        <input type="text" name="name" placeholder="Your Name" required />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form_box mb-30">
                        <input type="email" name="email" placeholder="Enter your business email" pattern="^[a-zA-Z0-9._%+-]+@(?!gmail\.com|yahoo\.com|hotmail\.com|outlook\.com|rediffmail\.com)[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
  title="Please use your business email address (no Gmail, Yahoo, etc.)" required />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form_box mb-30 text-black">
                        <input type="text" name="subject" placeholder="Subject" required />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form_box mb-30">
                        <textarea
                          name="message"
                          id="message"
                          cols="30"
                          rows="10"
                          placeholder="Write a Message"
                          required
                        ></textarea>
                      </div>
                      <div className="quote_btn">
                        <button className="btn" type="submit">Submit</button>
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

export default ContactInfo;
