const HeroGtm = () => {
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
          87% of accounts don't buy, <br />
          target the ones who will!
        </h2>

        <p className="ppd-hero-text">
          Empowering your business with accurate, verified data that brings
          clarity <br />
          to go-to-market decisions and helps teams focus on accounts
          <br />
          that truly have buying potential.
        </p>

        {/* ✅ Web3Forms START */}
        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          className="ppd-hero-cta"
        >
          {/* REQUIRED */}
          <input
            type="hidden"
            name="access_key"
            value="9df4c372-c813-4806-97bb-685a8358a058"
          />

          {/* REDIRECT */}
          <input
            type="hidden"
            name="redirect"
            value="https://www.proplusdata.co/thank-you-gtm-intelligence"
          />

          {/* OPTIONAL META */}
          <input
            type="hidden"
            name="subject"
            value="Free Sample Request – GTM Intelligence"
          />

          {/* Email Field */}
          <input
            type="email"
            name="email"
            className="ppd-hero-input"
            placeholder="Business Email"
            required
          />

          {/* Submit Button */}
          <button type="submit" className="ppd-hero-btn">
            Free Sample
          </button>
        </form>
        {/* ✅ Web3Forms END */}

        <small className="ppd-hero-note text-left">
          By submitting this form, you agree to our <a href="/privacy-policy">Privacy Policy</a> & Terms of Service.
        </small>
      </div>
    </div>
  );
};

export default HeroGtm;
