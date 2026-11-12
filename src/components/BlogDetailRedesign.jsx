import React, { useState } from 'react';
import "./BlogDetailRedesign.css";

function BlogDetailRedesign({ title, description, pdfFile, helmet }) {
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {
      window.open(pdfFile, "_blank");
    }
  };

  const validateForm = () => {
    if (!email) {
      alert("Please enter an email address.");
      return false;
    }
    return true;
  };

  return (
    <main className="ppd-blog-detail-page">
      <section className="ppd-blog-detail-hero">
        <div className="ppd-blog-detail-hero-inner">
          <span className="ppd-blog-detail-eyebrow">
            WHITEPAPER DOWNLOAD
          </span>
          <h1 className="ppd-blog-detail-title">
            {title}
          </h1>
          <p className="ppd-blog-detail-lead">
            {description}
          </p>
        </div>
      </section>

      <section className="ppd-blog-detail-body-section">
        <div className="ppd-blog-detail-content">
          <div className="ppd-blog-detail-form-wrapper">
            <h2 className="ppd-blog-detail-form-title">To Read Our Whitepaper</h2>
            <p className="ppd-blog-detail-form-subtitle">Enter your email to access the full document</p>
            <form onSubmit={handleSubmit} className="ppd-blog-detail-form">
              <div className="ppd-blog-detail-form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Enter your email"
                />
              </div>
              <button type="submit" className="ppd-blog-detail-submit-btn">
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

export default BlogDetailRedesign;
