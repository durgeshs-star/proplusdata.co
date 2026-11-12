import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaCalendarAlt, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import "./ContactInfo.css";

const ContactInfo = () => {
  const heroRef = useRef(null);
  const [heroVisible, setHeroVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    const section = heroRef.current;
    if (!section) return undefined;

    if (!("IntersectionObserver" in window)) {
      setHeroVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeroVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const email = formData.email.trim().toLowerCase();
    const blockedDomains = [
      "gmail.com",
      "yahoo.com",
      "hotmail.com",
      "outlook.com",
      "rediffmail.com",
      "icloud.com"
    ];
    const domain = email.split("@")[1];

    if (blockedDomains.includes(domain)) {
      setIsSubmitting(false);
      window.alert("Please enter your business email address.");
      return;
    }

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('subject', formData.subject);
      formDataToSend.append('message', formData.message);
      formDataToSend.append('access_key', '9df4c372-c813-4806-97bb-685a8358a058');
      formDataToSend.append('redirect', '/thankyou');

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
        alert('Failed to submit form. Please try again.');
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error('Error submitting form:', error);
      alert('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="ppd-contact">
      <section
        ref={heroRef}
        className={`ppd-contact-hero${heroVisible ? " is-visible" : ""}`}
        aria-labelledby="ppd-contact-title"
      >
        <div className="ppd-contact-grid" aria-hidden="true" />
        <div className="ppd-contact-container container">
          <div className="ppd-contact-row row align-items-center">
            <article className="ppd-contact-copy col-lg-6 col-md-6">
              <div className="ppd-contact-eyebrow">
                <span className="ppd-contact-eyebrow-dot" aria-hidden="true" />
                <span>GET IN TOUCH</span>
              </div>

              <h1 className="ppd-contact-title" id="ppd-contact-title">
                Let's <span>Connect</span>
              </h1>

              <div className="ppd-contact-accent" aria-hidden="true">
                <span />
              </div>

              <div className="ppd-contact-text">
                <p className="ppd-contact-lead">
                  Ready to transform your GTM strategy with data-driven insights? Our team is here to help you unlock the full potential of your marketing and sales efforts.
                </p>

                <p className="ppd-contact-detail">
                  Whether you need prospect intelligence, intent data, or comprehensive data solutions, we're committed to delivering measurable results. Let's discuss how we can help you achieve your growth goals.
                </p>
              </div>

              <div className="ppd-contact-actions" aria-label="Contact options">
                <a
                  className="ppd-contact-action"
                  href="https://calendly.com/amit-chatterjee_proplus"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="ppd-contact-action__icon" aria-hidden="true">
                    <FaCalendarAlt />
                  </span>
                  <span className="ppd-contact-action__copy">
                    <span className="ppd-contact-action__label">Calendar</span>
                    <span className="ppd-contact-action__title">Book a Meeting</span>
                  </span>
                  <FaArrowRight className="ppd-contact-action__arrow" aria-hidden="true" />
                </a>

                <a className="ppd-contact-action" href="mailto:info@proplusdata.co">
                  <span className="ppd-contact-action__icon" aria-hidden="true">
                    <FaEnvelope />
                  </span>
                  <span className="ppd-contact-action__copy">
                    <span className="ppd-contact-action__label">Email</span>
                    <span className="ppd-contact-action__title">info@proplusdata.co</span>
                  </span>
                  <FaArrowRight className="ppd-contact-action__arrow" aria-hidden="true" />
                </a>

                <a
                  className="ppd-contact-action"
                  href="https://wa.me/+919112110691"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="ppd-contact-action__icon" aria-hidden="true">
                    <FaWhatsapp />
                  </span>
                  <span className="ppd-contact-action__copy">
                    <span className="ppd-contact-action__label">WhatsApp</span>
                    <span className="ppd-contact-action__title">Chat With Us!</span>
                  </span>
                  <FaArrowRight className="ppd-contact-action__arrow" aria-hidden="true" />
                </a>
              </div>
            </article>

            <div className="ppd-contact-form-column col-lg-6 col-md-6">
              <div className="ppd-contact-form-container">
                {submitStatus === 'success' ? (
                  <div className="ppd-contact-form-success">
                    <div className="ppd-contact-form-success-icon">✓</div>
                    <h3>Message Sent Successfully!</h3>
                    <p>Thank you for reaching out. We will get back to you soon.</p>
                    <button
                      className="ppd-contact-form-reset"
                      onClick={() => setSubmitStatus(null)}
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form className="ppd-contact-form" onSubmit={handleSubmit}>
                    <div className="ppd-contact-form-row">
                      <div className="ppd-contact-form-group">
                        <label htmlFor="contact-name">Your Name *</label>
                        <input
                          type="text"
                          id="contact-name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Enter your full name"
                        />
                      </div>

                      <div className="ppd-contact-form-group">
                        <label htmlFor="contact-email">Business Email *</label>
                        <input
                          type="email"
                          id="contact-email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="Enter your business email"
                        />
                      </div>
                    </div>

                    <div className="ppd-contact-form-group">
                      <label htmlFor="contact-subject">Subject *</label>
                      <input
                        type="text"
                        id="contact-subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        placeholder="Enter the subject"
                      />
                    </div>

                    <div className="ppd-contact-form-group">
                      <label htmlFor="contact-message">Message *</label>
                      <textarea
                        id="contact-message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="5"
                        required
                        placeholder="Write your message here..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="ppd-contact-form-submit"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactInfo;
