import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

function Blog5Details() {
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents default form submission behavior

    // Check if the form is valid before opening the PDF
    if (validateForm()) {
      window.open("impact-of-data-driven-transformation.pdf", "_blank"); // Opens PDF in new tab
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
      <title>The Impact of Data-Driven Transformation in the IT Industry.</title>
  <meta name="description" content="Discover how AI, ML, cybersecurity, and cloud computing are transforming IT across USA, ASEAN, JPAC, ANZ, and EMEA, reshaping business operations globally."/>
  <meta name="keywords" content="Data-driven transformation, IT industry, cloud computing, artificial intelligence, AI, ML, cybersecurity, USA, ASEAN, JPAC, ANZ, EMEA, regulatory compliance, operational efficiency, innovation"/>
  <meta name="author" content="ProPlus Data" />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="https://proplusdata.co/blog5details" />
  <meta property="og:url" content="https://proplusdata.co/blog5details" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="The Impact of Data-Driven Transformation in the IT Industry." />
  <meta property="og:description"
      content="Explore the data-driven transformation in the IT industry across USA, ASEAN, JPAC, ANZ, and EMEA regions." />
      </Helmet>
    <ul className="breadcrumb">
      <li><Link to="/blogs">Blogs</Link></li>
      <li><Link to="/blog5details">Blog 5</Link></li>
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

export default Blog5Details;
