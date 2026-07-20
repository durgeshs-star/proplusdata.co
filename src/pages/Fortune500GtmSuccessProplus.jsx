import React from 'react';
import { Helmet } from 'react-helmet-async';

import { Link } from 'react-router-dom';

function Fortune500GtmSuccessProplus() {
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
      window.open("/how-a-fortune-500-manufacturer-transformed-gtm-with-proplus", "_blank"); // Opens PDF in new tab
    }
  };

  return (
    <section>
      <Helmet>
      <title>How a Fortune 500 Manufacturer Transformed GTM Across 11 Regions | ProPlus Data</title>
    <meta name="description" content="Discover how a Fortune 500 manufacturing conglomerate optimized its global go-to-market strategy across 11 regions and 10+ industries with ProPlus Data. See how intent signals, technographics, and renewal intelligence drove 2.8X engagement and 52% target account reach."/>
    <meta name="keywords" content="Fortune 500 case study, GTM strategy, manufacturing GTM, ProPlus Data, technographic intelligence, renewal intelligence, intent signals, B2B demand generation, account-based marketing, sales and marketing alignment"/>
    <link rel="canonical" href="https://proplusdata.co/how-a-fortune-500-manufacturer-transformed-gtm-with-proplus"/>
    <meta property="og:url" content="https://proplusdata.co/how-a-fortune-500-manufacturer-transformed-gtm-with-proplus" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="How a Fortune 500 Manufacturer Transformed GTM Across 11 Regions | ProPlus Data" />
    <meta property="og:description"
        content="Discover how a Fortune 500 manufacturing conglomerate optimized its global go-to-market strategy across 11 regions and 10+ industries with ProPlus Data. See how intent signals, technographics, and renewal intelligence drove 2.8X engagement and 52% target account reach." />
      </Helmet>
      <ul className="breadcrumb">
        <li><Link to="/use-cases">Use Cases</Link></li>
        <li><Link to="/fortune-500-gtm-success-proplus">A Fortune 500 GTM Success With Proplus</Link></li>
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

export default Fortune500GtmSuccessProplus;
