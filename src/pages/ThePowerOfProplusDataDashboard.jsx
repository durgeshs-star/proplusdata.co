import React from 'react';
import { Helmet } from 'react-helmet-async';

import { Link } from 'react-router-dom';

function ThePowerOfProplusDataDashboard() {
  // Local form validation function
  const validateForm = () => {
    const form = document.forms["myForm"];
    const email = form["email"].value;
    const name = form["name"].value;
    const company = form["company"].value;

    if (!email || !name || !company) {
      alert("Please fill out all fields.");
      return false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return false;
    }

    return true;
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents default form submission behavior

    // Use local validateForm function
    if (validateForm()) {
      window.open("PPD-Success-Stories-3.pdf", "_blank"); // Opens PDF in new tab
    }
  };

  return (
    <section>
       <Helmet>
      <title>ProPlus Data's Dashboard Outshines Aggregated Tools</title>
    <meta name="description" content="Centralized, customizable dashboards for comprehensive campaign analysis, real-time tracking, and interactive insights to optimize global marketing."/>
    <meta name="keywords" content="centralized dashboard, customizable interfaces, campaign data, real-time tracking, interactive insights, marketing optimization, ROI, trend analysis"/>
    <link rel="canonical" href="https://proplusdata.co/the-power-of-proplus-data-dashboard"/>
    <meta property="og:url" content="https://proplusdata.co/the-power-of-proplus-data-dashboard" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="ProPlus Data's Dashboard Outshines Aggregated Tools" />
    <meta property="og:description"
        content="Customizable dashboards for campaign analysis, real-time tracking, and insights to optimize global marketing." />
      </Helmet>
      <ul className="breadcrumb">
        <li><Link to="/use-cases">Use Cases</Link></li>
        <li><Link to="/the-power-of-proplus-data-dashboard">The Power of ProPlus Data's Dashboard</Link></li>
      </ul>
      <center>
      <div className=" usecase1">
        <h1>To Read Our Story</h1>
        <form onSubmit={handleSubmit} name="myForm">
          <div className="form-group iq-pb-10">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group iq-pb-50">
            <label htmlFor="company">Company</label>
            <input type="text" id="company" name="company" required />
          </div>
          <div className="form-group">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
      </center>
    </section>
  );
}

export default ThePowerOfProplusDataDashboard;
