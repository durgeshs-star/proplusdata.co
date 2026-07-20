import React from "react";
import axios from "axios";

export default function AssessmentForm({
  formData,
  setFormData,
  setStep,
}) {

  // SUBMIT FORM

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      // YOUR API

      await axios.post(
        "YOUR_API_ENDPOINT",
        formData
      );

      // NEXT STEP

      setStep(2);

    } catch (error) {

      console.log(error);

    }

  };

  return (

    <div className="assessment-form-page">

      <div className="form-container">

        <h1 className="main-title">
          See Your GTM Truth in 60 Seconds
        </h1>

        <p className="subtitle">
          Evaluate your GTM maturity and identify
          opportunities for growth.
        </p>

        <form onSubmit={handleSubmit}>

          {/* NAME */}

          <div className="form-group">

            <label>
              Full Name
            </label>

            <input
              type="text"
              placeholder="Enter your full name"
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

          <div className="form-group">

            <label>
              Work Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
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

          <button
            type="submit"
            className="submit-btn"
          >
            Start Assessment
          </button>

        </form>

      </div>

    </div>

  );
}