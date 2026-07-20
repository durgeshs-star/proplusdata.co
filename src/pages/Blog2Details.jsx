import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

function Blog2Details() {
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents default form submission behavior

    // Check if the form is valid before opening the PDF
    if (validateForm()) {
      window.open("How-Data-Adoption-is-helping-telecom-industry-across-the-globe.pdf", "_blank"); // Opens PDF in new tab
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
      <title>Data Adoption & the Future of Connectivity | ProPlus Data</title>
  <meta name="description" content="Explore how data adoption shapes global telecom across JPAC, ASEAN, USA, EMEA, and ANZ. Discover key trends, growth opportunities, and regional impacts."/>
  <meta name="keywords" content="data adoption, telecommunications, connectivity, 5G, global telecom, regional analysis, JPAC, ASEAN, USA, EMEA, ANZ, ProPlus Data, telecom trends, data-driven strategies"/>
  <meta name="author" content="ProPlus Data"/>
  <meta name="robots" content="index, follow"/>
  <link rel="canonical" href="https://proplusdata.co/blog2details"/>
  <meta property="og:url" content="https://proplusdata.co/blog2details" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Data Adoption & the Future of Connectivity | ProPlus Data" />
  <meta property="og:description"
      content="Analyze how data adoption is transforming global telecommunications across regions like JPAC, ASEAN, USA, EMEA, and ANZ. Learn about 5G, cloud services, and market growth trends." />
      </Helmet>
    <ul className="breadcrumb">
      <li><Link to="/blogs">Blogs</Link></li>
      <li><Link to="/blog2details">Blog 2</Link></li>
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

export default Blog2Details;
