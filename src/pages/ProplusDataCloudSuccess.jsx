import React from 'react';
import { Helmet } from 'react-helmet-async';

import { Link } from 'react-router-dom';

function ProplusDataCloudSuccess() {
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
      window.open("PPD-Success-Stories-4.pdf", "_blank"); // Opens PDF in new tab
    }
  };

  return (
    <section>
      <Helmet>
      <title>ProPlus Data Uncovers Hidden Gems for Cloud Giant.</title>
    <meta name="description" content="ProPlus Data helped a cloud computing giant identify high-value customers with advanced data analysis and email campaigns, boosting conversions."/>
    <meta name="keywords" content="cloud computing, high-value customers, advanced data analysis, multi-touch email campaigns, MQLs, sales leads, conversion optimization"/>
    <link rel="canonical" href="https://proplusdata.co/proplus-data-cloud-success"/>
    <meta property="og:url" content="https://proplusdata.co/proplus-data-cloud-success" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="ProPlus Data Uncovers Hidden Gems for Cloud Giant." />
    <meta property="og:description"
        content="ProPlus Data helped a cloud computing giant identify high-value customers with advanced data analysis and email campaigns, boosting conversions." />
      </Helmet>
      <ul className="breadcrumb">
        <li><Link to="/use-cases">Use Cases</Link></li>
        <li><Link to="/proplus-data-cloud-success">ProPlus Data Cloud Success</Link></li>
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

export default ProplusDataCloudSuccess;
