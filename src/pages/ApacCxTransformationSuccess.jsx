import React from 'react';
import { Helmet } from 'react-helmet-async';

import { Link } from 'react-router-dom';

function ApacCxTransformationSuccess() {
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
      window.open("PPD-Success-Stories-1.pdf", "_blank"); // Opens PDF in new tab
    }
  };

  return (
    <section>
       <Helmet>
      <title>Cracking The Code: APAC CX Transformation Success Unveiled !</title>
    <meta name="description" content="Cloud-based CX solutions driven by CX one. Addressing APAC pain points with advanced intent signals and streamlined processes for active seekers."/>
    <meta name="keywords" content="Cloud-based Customer Experience,  APAC, intent signal identification, technographic categories, multi-touchpoint qualification, EDM campaigns, high propensity accounts, market presence, technology solutions, customer experience, business empowerment"/>
    <link rel="canonical" href="https://proplusdata.co/apac-cx-transformation-success" />
    <meta property="og:url" content="https://proplusdata.co/apac-cx-transformation-success" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Cracking The Code: APAC CX Transformation Success Unveiled !" />
    <meta property="og:description"
        content="Cloud-based CX solutions via CX one. Solving APAC pain points with advanced intent signals and streamlined processes for active seekers." />
      </Helmet>
      <ul className="breadcrumb">
        <li><Link to="/use-cases">Use Cases</Link></li>
        <li><Link to="/apac-cx-transformation-success">APAC CX Transformation Success Unveiled !</Link></li>
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

export default ApacCxTransformationSuccess;
