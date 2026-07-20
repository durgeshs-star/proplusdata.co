import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

function Blog4Details() {
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents default form submission behavior

    // Check if the form is valid before opening the PDF
    if (validateForm()) {
      window.open("cloud-infrastructure.pdf", "_blank"); // Opens PDF in new tab
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
      <title>Why Companies Are Taking Control of Cloud Infrastructure</title>
  <meta name="description" content="Discover why companies are shifting to hybrid cloud models, addressing data security, vendor lock-in, and regulations, with data for smooth transitions."/>
  <meta name="keywords" content="cloud infrastructure, private cloud, hybrid cloud, cloud migration, data security, vendor lock-in, regulatory challenges, cloud services, cloud transition, business needs"/>
  <meta name="author" content="ProPlus Data" />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="https://proplusdata.co/blog4details" />
  <meta property="og:url" content="https://proplusdata.co/blog4details" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Why Companies Are Taking Control of Cloud Infrastructure" />
  <meta property="og:description"
      content="Learn why businesses are shifting to private or hybrid cloud models. Explore data and strategies to ensure effective and secure cloud transitions." />
      </Helmet>
    <ul className="breadcrumb">
      <li><Link to="/blogs">Blogs</Link></li>
      <li><Link to="/blog4details">Blog 4</Link></li>
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

export default Blog4Details;
