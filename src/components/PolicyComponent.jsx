import React from 'react';
import { FaCheckSquare } from 'react-icons/fa';

const PrivacyPolicy = () => {
  return (
    <div className="container mt-4 text-left privacy-policy">
      <div className="row">
      

        <div className="col-md-12">
          <h3 className="mb-3" id="intro">Introduction</h3>
          <p>
          ProPlus Data ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and protect your information when you use our services, which include Contact Discovery, Technographics, Email Data Management (EDM), Demand Generation, and other related services ("Services"). By using our Services, you agree to the collection and use of your information as described in this policy.
          </p>

          <h3 className="mb-3" id="info">Personal Information</h3>
          <p>We collect personal information that you provide directly to us when you engage with our Services, including:</p>
          <ul>
            {["Name", "Email Address", "Phone Number", "Company Name", "Job Title", "Business contact information", "Other information relevant to our Services"].map((item, index) => (
              <li key={index}><FaCheckSquare className="me-2" />{item}</li>
            ))}
          </ul>

          <h3 className="mb-3" id="auto-collected-info">Automatically Collected Information</h3>
          <p>When you use our Services or visit our website, we automatically collect certain information, including:</p>
          <ul>
            {["IP address", "Device and browser type", "Operating system", "Referring URLs", "Pages visited", "Date and time of access", "Other browsing activities"].map((item, index) => (
              <li key={index}><FaCheckSquare className="me-2" />{item}</li>
            ))}
          </ul>
          <p>This information helps us enhance our Services and improve your experience.</p>

          <h3 className="mb-3" id="your-info">How We Use Your Information</h3>
          <p>We may use the information we collect for the following purposes:</p>
          <ul>
            {[
              ["Contact Discovery", "To accurately identify and provide contact information for relevant business professionals."],
              ["Technographics", "To deliver detailed technology usage data about companies for marketing and sales purposes."],
              ["Email Data Management (EDM)", "To manage, update, and optimize email data for our clients' marketing campaigns."],
              ["Demand Generation", "To assist in generating qualified leads and managing marketing campaigns on behalf of our clients."],
              ["Service Improvement", "To improve, personalize, and expand our Services."],
              ["Communication", "To send you updates, promotional materials, and respond to your inquiries."],
              ["Compliance", "To comply with legal obligations and enforce our terms and policies."]
            ].map(([title, desc], index) => (
              <li key={index}><FaCheckSquare className="me-2" /><b>{title}:</b> {desc}</li>
            ))}
          </ul>

          <h3 className="mb-3" id="share-info">Sharing Your Information</h3>
          <p>We may share your information with:</p>
          <ul>
            {[
              ["Service Providers", "Third-party vendors who assist in delivering our Services."],
              ["Clients", "For providing Contact Discovery, Technographics, EDM, and Demand Generation services."],
              ["Legal and Compliance", "When required by law, or to protect our rights."],
              ["Consent-Based Sharing", "With your explicit consent, for purposes not covered by this policy."]
            ].map(([title, desc], index) => (
              <li key={index}><FaCheckSquare className="me-2" /><b>{title}:</b> {desc}</li>
            ))}
          </ul>
          <p>We do not sell personal information to third parties.</p>

          <h3 className="mb-3" id="data-security">Data Security</h3>
          <p>We take appropriate security measures to protect your information from unauthorized access, disclosure, alteration, or destruction. However, no security system is completely foolproof, and we cannot guarantee the absolute security of your information.</p>

          <h3 className="mb-3" id="choice-right">Your Choices and Rights</h3>
          <p>You have rights regarding your personal information, including:</p>
          <ul>
            {[
              "Accessing, correcting, or deleting your information.",
              "Opting out of marketing communications.",
              "Restricting or objecting to certain data processing activities.",
              "Withdrawing consent where applicable."
            ].map((item, index) => (
              <li key={index}><FaCheckSquare className="me-2" />{item}</li>
            ))}
          </ul>
          <p>To exercise these rights, please contact us at <a href="mailto:info@proplusdata.co">info@proplusdata.co</a></p>

          <h3 className="mb-3" id="cookies">Cookies and Tracking Technologies</h3>
          <p>We use cookies and similar technologies to enhance your experience on our website. You can control cookies through your browser settings, but disabling cookies may limit your use of certain features.</p>

          <h3 className="mb-3" id="third-party">Third-Party Websites</h3>
          <p>Our website may contain links to third-party sites. We are not responsible for their privacy practices or content of these sites. Please review their privacy policies before providing any personal information.</p>

          <h3 className="mb-3" id="privacy-policy">Changes to This Privacy Policy</h3>
          <p>We may update this Privacy Policy to reflect changes in our practices or legal requirements. Any changes will be posted on this page, and the effective date will be updated accordingly. We encourage you to review this policy periodically.</p>

          <h3 className="mb-3" id="contact">Contact Us</h3>
          <p>
            For questions or concerns about this Privacy Policy, please contact us at:<br />
            Royal Oak Society Rd, Karpe Nagar, Kemse Vasti, Wakad, Pimpri-Chinchwad, Maharashtra 411057<br />
            <a href="mailto:info@proplusdata.co">info@proplusdata.co</a>
          </p>
          <p>Loactions - India | Japan | UK | Singapore | US</p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
