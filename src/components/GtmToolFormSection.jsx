import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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

    <section
      id="contact"
      className="contact section bg-section"
    >

      <div className="container">

        <h1 className="display-5 mt-5 mb-70">

          <b>
            See Your GTM Truth in
            <span> 60 Seconds.</span>
          </b>

        </h1>

        <div className="row g-5">

          {/* LEFT CONTENT */}

          <div className="col-lg-6">

            <div className="content">

              <p className="lead mb-4 text-left">

                <b>
                  Your GTM data is talking,
                  Most teams aren’t hearing it.
                  This quick check shows what’s
                  driving revenue and what’s
                  blocking growth.
                </b>

              </p>

              <p className="lead text-left">

                <b>
                  In just 60 Seconds, uncover :
                </b>

              </p>

              <ul className="lead feature-benefits text-left">

                <li>
                  ● Which accounts show real buying intent
                </li>

                <li>
                  ● Where GTM signals are misaligned
                </li>

                <li>
                  ● Revenue risks hiding in plain sight
                </li>

                <li>
                  ● Opportunities your team isn’t activating
                </li>

              </ul>

            </div>

          </div>

          {/* RIGHT FORM */}

          <div className="col-lg-6">

            <div className="contact-form card">

              <div className="card-body p-4 p-lg-5">

                <h5 className="mb-4 text-center">

                  Fill in your details to unlock the tool.

                </h5>

                <form onSubmit={handleSubmit}>

                  <div className="row gy-4">

                    {/* NAME */}

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

                    {/* EMAIL */}

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

                    {/* BUTTON */}

                    <div className="col-12">

                      <button
                        type="submit"
                        className="btn btn-submit w-100"
                        disabled={loading}
                      >

                        {
                          loading
                            ? "Submitting..."
                            : "Begin Assessment"
                        }

                      </button>

                    </div>

                  </div>

                </form>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>

  );

};

export default GtmToolFormSection;