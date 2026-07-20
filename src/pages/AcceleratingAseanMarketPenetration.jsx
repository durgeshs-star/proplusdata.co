import React from 'react';
import { Helmet } from 'react-helmet-async';

import { Link } from 'react-router-dom';

function AcceleratingAseanMarketPenetration() {
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
      window.open("PPD-Success-Stories-2.pdf", "_blank"); // Opens PDF in new tab
    }
  };

  return (
    <section>
      <Helmet>
      <title>ProPlus Data Boosts ASEAN Penetration for Cyber Leader</title>
    <meta name="description" content="Cybersecurity leader expanding into ASEAN markets. Using technographics and precision targeting to protect against evolving threats."/>
    <meta name="keywords" content="cybersecurity, endpoint protection, ASEAN markets, technographics analysis, EDM campaigns, innovative solutions, cybersecurity threats, malware, ransomware, zero-day attacks, market entry, industry dominance"/>
    <link rel="canonical" href="https://proplusdata.co/accelerating-asean-market-penetration"/>
    <meta property="og:url" content="https://proplusdata.co/accelerating-asean-market-penetration" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="ProPlus Data Boosts ASEAN Penetration for Cyber Leader" />
    <meta property="og:description"
        content="Cybersecurity leader expanding into ASEAN markets. Using technographics and precision targeting to protect against evolving threats." />
      </Helmet>
      <ul className="breadcrumb">
        <li><Link to="/use-cases">Use Cases</Link></li>
        <li><Link to="/accelerating-asean-market-penetration">Accelerating ASEAN Market Penetration</Link></li>
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

export default AcceleratingAseanMarketPenetration;
