import React, { useState } from 'react';
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';

const MeetingComponent = () => {
  const [phone, setPhone] = useState('');  // <-- Track phone input separately

  return (
    <div className="contact_form_container mt-5 mb-5" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div className="col-lg-6">
        <div className="contact_from">
          <div className="contact_from_box">
            <div className="contact_title text-center pb-4">
              <h3>Please Fill The Form!</h3>
            </div>
            <form
              id="contact_form"
              action="https://api.web3forms.com/submit"
              method="POST"
            >
              <input type="hidden" name="redirect" value="/thankyou" />
              <input type="hidden" name="access_key" value="9df4c372-c813-4806-97bb-685a8358a058" />
              <input type="hidden" name="phone" value={phone} /> {/* <-- Hidden input to capture phone */}
              
              <div className="row">
                {/* Name Field */}
                <div className="col-lg-12">
                  <div className="form_box mb-30">
                    <input type="text" name="name" placeholder="Your Name" required />
                  </div>
                </div>

                {/* Email Field */}
                <div className="col-lg-12">
                  <div className="form_box mb-30">
                    <input type="email" name="email" placeholder="Email Address" required />
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="form_box mb-30">
                    <input type="text" name="company-name" placeholder="Company Name" required />
                  </div>
                </div>

                {/* Phone Number Field */}
                <div className="col-lg-12">
                  <div className="form_box text-left black mb-30">
                    <PhoneInput
                      country={'us'}
                      disableSearch={true}
                      inputStyle={{ width: '100%' }}
                      value={phone}
                      onChange={(phone) => setPhone(phone)}  // <-- Set phone value
                      required
                    />
                  </div>
                </div>

                {/* Message Field */}
                <div className="col-lg-12">
                  <div className="form_box mb-30">
                    <textarea
                      name="message"
                      placeholder="Your Requirement"
                      required
                      cols="30"
                      rows="10"
                    ></textarea>
                  </div>
                  <div className="quote_btn">
                    <button className="btn" type="submit">Submit</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
};

export default MeetingComponent;
