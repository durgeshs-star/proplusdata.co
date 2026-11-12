import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const clients = [
  "8x8.png",
  "Adobe.png",
  "AWS.png",
  "aviso.png",
  "Blancco.png",
  "cisco.png",
  "Commvault.png",
  "crestron.png",
  "Databricks Logo.png",
  "Datarade logo.png",
];

const marqueeClients = [...clients, ...clients];

const Hero1 = () => {
  const [trialExpanded, setTrialExpanded] = useState(false);
  const [trialData, setTrialData] = useState({ email: "", fullName: "", phone: "", jobTitle: "" });
  const [trialError, setTrialError] = useState("");
  const [trialStatus, setTrialStatus] = useState("");
  const [trialLoading, setTrialLoading] = useState(false);

  useEffect(() => {
    if (window.scrollCue) window.scrollCue.init();
  }, []);

  const updateTrialField = (event) => {
    setTrialData((current) => ({ ...current, [event.target.name]: event.target.value }));
    setTrialError("");
    setTrialStatus("");
  };

  const handleTrialSubmit = async (event) => {
    event.preventDefault();
    setTrialError("");
    setTrialStatus("");

    if (!trialExpanded) {
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trialData.email.trim())) {
        setTrialError("Enter a valid email address to continue.");
        return;
      }
      setTrialData((current) => ({ ...current, email: current.email.trim() }));
      setTrialExpanded(true);
      return;
    }

    if (!trialData.fullName.trim() || !trialData.jobTitle.trim()) {
      setTrialError("Enter your full name and job title.");
      return;
    }

    setTrialLoading(true);
    try {
      const response = await fetch("/api/nexora-free-trial.php", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          email: trialData.email.trim(),
          fullName: trialData.fullName.trim(),
          phone: trialData.phone.trim(),
          jobTitle: trialData.jobTitle.trim(),
        }),
      });
      const responseText = await response.text();
      let result;
      try {
        result = JSON.parse(responseText);
      } catch {
        throw new Error("The PHP form endpoint returned a webpage instead of JSON. Confirm /api/nexora-free-trial.php is deployed and PHP is enabled on the web server.");
      }
      if (!response.ok || !result.success) throw new Error(result.message || "We couldn’t submit your request. Please try again.");
      setTrialStatus("Thanks! Your free trial request has been submitted.");
    } catch (error) {
      setTrialError(error.message || "Submission failed. Please try again.");
    } finally {
      setTrialLoading(false);
    }
  };

  return (
    <>
      <section className="ppd-home-hero ppd-home-hero--split">
        <div className="ppd-home-hero__background" aria-hidden="true" />
        <div className="ppd-home-hero__layout">
          <div className="ppd-home-hero__copy">
            <h1 className="ppd-home-hero__title scroll-cue" data-scroll-cue="slide-up">
              <span>Your GTM has enough surprises.</span>
              <span>Your pipeline shouldn’t.</span>
            </h1>
            <p className="scroll-cue" data-scroll-cue="slide-up" data-scroll-cue-delay="100">
              We combine proprietary AI and account intelligence to help your teams identify buying opportunities, prioritize accounts, and build a more predictable pipeline.
            </p>
            <form className={`ppd-trial-form${trialExpanded ? " is-expanded" : ""}`} onSubmit={handleTrialSubmit} noValidate>
              <div className="ppd-trial-form__fields">
                <label className="ppd-trial-form__field ppd-trial-form__email">
                  <span className="ppd-trial-form__sr-only">Work email</span>
                  <input autoComplete="email" type="email" name="email" value={trialData.email} onChange={updateTrialField} placeholder="Enter your work email" required aria-invalid={Boolean(trialError)} />
                </label>
                <label className="ppd-trial-form__field ppd-trial-form__name">
                  <span className="ppd-trial-form__sr-only">Full name, required</span>
                  <input autoComplete="name" type="text" name="fullName" value={trialData.fullName} onChange={updateTrialField} placeholder="Full name *" required tabIndex={trialExpanded ? 0 : -1} />
                </label>
                <div className="ppd-trial-form__field ppd-trial-form__phone">
                  <label className="ppd-trial-form__sr-only" htmlFor="ppd-trial-phone">Phone number (optional)</label>
                  <PhoneInput
                    country="in"
                    value={trialData.phone}
                    onChange={(phone) => updateTrialField({ target: { name: "phone", value: phone } })}
                    inputProps={{ id: "ppd-trial-phone", name: "phone", autoComplete: "tel", tabIndex: trialExpanded ? 0 : -1, "aria-label": "Phone number (optional)" }}
                    containerClass="ppd-trial-phone-input"
                    inputClass="ppd-trial-phone-input__control"
                    buttonClass="ppd-trial-phone-input__country"
                    dropdownClass="ppd-trial-phone-input__dropdown"
                    enableSearch
                    disableSearchIcon
                    countryCodeEditable={false}
                    specialLabel=""
                    placeholder="Phone number (optional)"
                  />
                </div>
                <label className="ppd-trial-form__field ppd-trial-form__job">
                  <span className="ppd-trial-form__sr-only">Job title, required</span>
                  <input autoComplete="organization-title" type="text" name="jobTitle" value={trialData.jobTitle} onChange={updateTrialField} placeholder="Job title *" required tabIndex={trialExpanded ? 0 : -1} />
                </label>
                <button className="ppd-trial-form__submit" type="submit" disabled={trialLoading || Boolean(trialStatus)}>
                  {trialLoading ? "Submitting…" : trialStatus ? "Submitted" : "Get Started"}
                </button>
              </div>
              <p className="ppd-trial-form__disclaimer">By submitting this form, you agree to ProPlus Data&apos;s <Link to="/privacy-policy">Privacy Policy</Link> and <a href="mailto:info@proplusdata.co?subject=Terms%20of%20Use">Terms of Use</a>. You may unsubscribe at any time.</p>
              <p className="ppd-trial-form__message" role="status" aria-live="polite">{trialError || trialStatus}</p>
            </form>
            <div className="ppd-home-hero__trust" role="group" aria-label="Customer logos">
              <div className="ppd-home-hero__trust-inner">
                <span>Trusted by teams at</span>
                <div className="hero-logos-marquee">
                  <div className="hero-logos-track">
                    {marqueeClients.map((client, index) => (
                      <div className="hero-logo-item" key={`${client}-${index}`}>
                        <img src={`/assets/images/brand/${client}`} alt={index < clients.length ? client.replace(".png", "") : ""} aria-hidden={index >= clients.length} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ppd-home-hero__visual" aria-hidden="true">
            <div className="ppd-hero-orbit ppd-hero-orbit--outer"><i /><i /><i /></div>
            <div className="ppd-hero-orbit ppd-hero-orbit--inner"><i /><i /><i /></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero1;
