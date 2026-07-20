const HeroRenewalLp = () => {
  return (
    <div className="ppd-hero position-relative">
      {/* Background Image */}
      <img
        src="/assets/images/slider/hero1.png"
        alt="Hero Banner"
        className="ppd-hero-bg"
      />

      {/* Content */}
      <div className="ppd-hero-content text-center mt-100">
        <h2 className="ppd-hero-title">
          Turn Renewals into Revenue Growth
        </h2>

        <p className="ppd-hero-text">
          Purpose-built for enterprises across industries, Renewal Intelligence delivers the clarity and foresight needed to protect revenue, reduce churn, and uncover new growth. By uniting timely contract signals with actionable insights, it empowers organizations to engage at the right moment, with the right message, transforming renewals from routine transactions into strategic growth opportunities.
        </p>

        {/* ⭐ Trust Section */}
        <div className="ppd-hero-trust d-flex justify-content-center align-items-center gap-1 mb-4">
          {/* Stars */}
          <div>
            <i className="bi bi-star-fill text-warning"></i>
            <i className="bi bi-star-fill text-warning"></i>
            <i className="bi bi-star-fill text-warning"></i>
            <i className="bi bi-star-fill text-warning"></i>
            <i className="bi bi-star-half text-warning"></i>
          </div>

          <span className="mx-2 text-white">|</span>

          {/* Award + Text */}
          <div className="d-flex align-items-center gap-1">
            <i className="bi bi-award-fill text-info"></i>
            <span className="ppd-trust-text text-white">
              Trusted by Fortune 500 companies
            </span>
          </div>
        </div>

        {/* Web3Forms */}
        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          className="ppd-hero-cta"
        >
          <input
            type="hidden"
            name="access_key"
            value="9df4c372-c813-4806-97bb-685a8358a058"
          />

          <input
            type="hidden"
            name="redirect"
            value="https://www.proplusdata.co/thank-you-gtm-intelligence"
          />

          <input
            type="hidden"
            name="subject"
            value="Free Sample Request – GTM Intelligence"
          />

          <input
            type="email"
            name="email"
            className="ppd-hero-input"
            placeholder="Business Email"
            required
          />

          <button type="submit" className="ppd-hero-btn">
            Free Sample
          </button>
        </form>

        <small className="ppd-hero-note text-center">
          By submitting this form, you agree to our{" "}
          <a href="/privacy-policy">Privacy Policy</a> & Terms of Service.
        </small>
      </div>
    </div>
  );
};

export default HeroRenewalLp;
