import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

function Blog3Details() {
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents default form submission behavior

    // Check if the form is valid before opening the PDF
    if (validateForm()) {
      window.open("Tech-Data-Enabled-GTM.pdf", "_blank"); // Opens PDF in new tab
    }
  };

  // Validation function to check if the email is valid
  const validateForm = () => {
    if (!email) {
      alert("Please enter an email address.");
      return false;
    }
    // Add more validation logic here if needed (e.g., regex for email format)
    return true;
  };

  return (
    <section>
       <Helmet>
      <title>Why Data & Tech Innovation is Key for Industrial Companies</title>
  <meta name="description" content="Learn how industrial companies can innovate go-to-market strategies with digital transformation, using tech and data to boost revenue and profitability."/>
  <meta name="keywords" content="industrial companies, digital transformation, go-to-market strategies, technology, data, B2B, digital maturity, Digital Quotient, millennials, revenue, profitability, innovation"/>
  <meta name="author" content="ProPlus Data"/>
  <meta name="robots" content="index, follow"/>
  <link rel="canonical" href="https://proplusdata.co/blog3details"/>
  <meta property="og:url" content="https://proplusdata.co/blog3details" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Why Data & Tech Innovation is Key for Industrial Companies" />
  <meta property="og:description"
      content="Explore how industrial companies can drive profitability and revenue growth through digital transformation and innovative go-to-market strategies." />
      </Helmet>
    <ul className="breadcrumb">
      <li><Link to="/blogs">Blogs</Link></li>
      <li><Link to="/blog3details">Blog 3</Link></li>
    </ul>
    <center>
    <div className=" usecase1">
      <h1>To Read Our Blog</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <br />
        </div>
        <br />
        <div className="form-group">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
    </center>
    </section>
  );
}

export default Blog3Details;
