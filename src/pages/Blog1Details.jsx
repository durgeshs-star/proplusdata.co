import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

function Blog1Details() {
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents default form submission behavior

    // Check if the form is valid before opening the PDF
    if (validateForm()) {
      window.open("Data-Driven-Strategies.pdf", "_blank"); // Opens PDF in new tab
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
       <title>Maximizing Data-Driven Business Strategies | ProPlus Data</title>
  <meta name="description" content="Learn to harness data-driven strategies for business success. Explore data integration challenges and see how ProPlus Data can revolutionize your approach."/>
  <meta name="keywords" content="data-driven strategies, business growth, data integration, actionable insights, ProPlus Data, data solutions, real-time data, data quality, business optimization"/>
  <meta name="author" content="ProPlus Data"/>
  <meta name="robots" content="index, follow"/>
  <link rel="canonical" href="https://proplusdata.co/blog1details"/>
  <meta property="og:url" content="https://proplusdata.co/blog1details" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Maximizing Data-Driven Business Strategies | ProPlus Data" />
  <meta property="og:description"
      content="Unlock the potential of your business with data-driven strategies. Discover how ProPlus Data helps overcome challenges in data integration, real-time insights, and more." />
    </Helmet>
    <ul className="breadcrumb">
      <li><Link to="/blogs">Blogs</Link></li>
      <li><Link to="/blog1details">Blog 1</Link></li>
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

export default Blog1Details;
