import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./GtmToolFormSection.css";

const GtmToolFormSection = () => {

  const navigate = useNavigate();

  // FORM DATA

  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  // LOADING

  const [loading, setLoading] = useState(false);

  // SUBMIT FORM

 const handleSubmit = async (e) => {

  e.preventDefault();

  // BLOCK PERSONAL EMAILS

  const personalDomains = [
    "gmail.com",
    "yahoo.com",
    "hotmail.com",
    "outlook.com",
    "live.com",
    "icloud.com",
    "aol.com",
    "protonmail.com",
    "zoho.com"
  ];

  const emailDomain = formData.email
    .split("@")[1]
    ?.toLowerCase();

  if (personalDomains.includes(emailDomain)) {

    alert("Please enter your business email address.");

    return;

  }

  setLoading(true);

  const data = {

    access_key: "9df4c372-c813-4806-97bb-685a8358a058",

    name: formData.name,

    email: formData.email,

    subject: "New GTM Assessment Lead",

  };

  try {

    const response = await fetch(
      "https://api.web3forms.com/submit",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },

        body: JSON.stringify(data),
      }
    );

    const result = await response.json();

    console.log(result);

    if (result.success) {

      navigate("/gtm-assessment-questions");

    } else {

      alert("Something went wrong");

    }

  } catch (error) {

    console.log(error);

    alert("Submission failed");

  }

  setLoading(false);

};

  return (
    <section className="ppd-gtm-assessment">
      <div className="ppd-gtm-assessment-hero">
        <div className="ppd-gtm-assessment-container">
          <div className="ppd-gtm-assessment-grid">
            <div className="ppd-gtm-assessment-content">
              <span className="ppd-gtm-assessment-eyebrow">
                GTM ASSESSMENT
              </span>
              <h1 className="ppd-gtm-assessment-title">
                See Your GTM Truth in <span>60 Seconds.</span>
              </h1>
              <p className="ppd-gtm-assessment-intro">
                Your GTM data is talking,
                Most teams aren't hearing it.
                This quick check shows what's
                driving revenue and what's
                blocking growth.
              </p>
              <p className="ppd-gtm-assessment-uncover">
                In just 60 Seconds, uncover :
              </p>
              <ul className="ppd-gtm-assessment-benefits">
                <li>Which accounts show real buying intent</li>
                <li>Where GTM signals are misaligned</li>
                <li>Revenue risks hiding in plain sight</li>
                <li>Opportunities your team isn't activating</li>
              </ul>
            </div>
            <div className="ppd-gtm-assessment-form-card">
              <div className="ppd-gtm-assessment-form-indicator"></div>
              <h2 className="ppd-gtm-assessment-form-title">
                Fill in your details to unlock the tool.
              </h2>
              <form onSubmit={handleSubmit} className="ppd-gtm-assessment-form">
                <div className="row gy-4">
                  <div className="col-12">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          name: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="col-12">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email ID"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          email: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="col-12">
                    <button
                      type="submit"
                      className="btn btn-submit w-100"
                      disabled={loading}
                    >
                      {loading ? "Submitting..." : "Begin Assessment"}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

};

export default GtmToolFormSection;
