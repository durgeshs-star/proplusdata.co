import { useEffect, useRef } from "react";
import "./NexoraShowcase.css";

export default function NexoraShowcase() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || !("IntersectionObserver" in window)) {
      section?.classList.add("is-visible");
      return undefined;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        section.classList.add("is-visible");
        observer.disconnect();
      }
    }, { threshold: 0.18 });

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="nexora-showcase" ref={sectionRef} aria-labelledby="nexora-showcase-title">
      <div className="nexora-showcase__inner">
        <div className="nexora-showcase__copy">
          <img className="nexora-showcase__logo" src="/assets/images/Nexora%20Logo_Blue.svg" alt="Nexora" />
          <h2 id="nexora-showcase-title">The unified AI platform for <em>Revenue GTM</em></h2>
          <p className="nexora-showcase__description">
            Nexora<sup>®</sup> transforms ProPlus Data&apos;s intelligence into an AI-powered GTM experience, bringing the right opportunities, context, and actions into one place.
          </p>
          <p className="nexora-showcase__promise">Less searching. <strong>More seeing what matters.</strong></p>
          <div className="nexora-showcase__actions">
            <a className="nexora-showcase__primary" href="https://nexora.proplusdata.co" target="_blank" rel="noopener noreferrer">Get Free Access</a>
          </div>
          <p className="nexora-showcase__note"><span aria-hidden="true">✓</span> No credit card required</p>
        </div>

        <div className="nexora-showcase__visual" aria-label="Preview of the Nexora revenue intelligence dashboard">
          <span className="nexora-showcase__glow" aria-hidden="true" />
          <div className="nexora-showcase__device">
            <div className="nexora-showcase__screen">
              <img src="/assets/images/nexora.png" alt="Nexora dashboard showing account, technographic, renewal, intent, and buying group intelligence" loading="lazy" decoding="async" />
            </div>
            <div className="nexora-showcase__laptop-base" aria-hidden="true"><span /></div>
          </div>
        </div>
      </div>
    </section>
  );
}
