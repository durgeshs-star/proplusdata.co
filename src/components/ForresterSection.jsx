import React from "react";
import "./Forrester.css"

const ForresterSection = () => {
  return (
    <section className="ppd-forrester-event ppd-forrester-content">
      <div className="ppd-forrester-content-inner">
        <div className="ppd-forrester-section">
          <h2 className="ppd-forrester-section-title">What We Brought to the Table</h2>
          <p className="ppd-forrester-intro">At the heart of our presence was the commitment to helping modern enterprises make faster, smarter, and more confident decisions. Our suite of solutions—engineered for marketing, sales, and revenue leaders—drew considerable attention from executives looking to:</p>
          
          <ul className="ppd-forrester-insights">
            <li className="ppd-forrester-insight">
              <span className="ppd-forrester-insight-number">01</span>
              <span className="ppd-forrester-insight-content">Accelerate go-to-market strategies with actionable insights.</span>
            </li>
            <li className="ppd-forrester-insight">
              <span className="ppd-forrester-insight-number">02</span>
              <span className="ppd-forrester-insight-content">Optimize marketing ROI through enriched customer insights</span>
            </li>
            <li className="ppd-forrester-insight">
              <span className="ppd-forrester-insight-number">03</span>
              <span className="ppd-forrester-insight-content">And scale personalization with intelligence-led engagement.</span>
            </li>
          </ul>
        </div>

        <div className="ppd-forrester-section">
          <h2 className="ppd-forrester-section-title">A Convergence of Leaders and Ideas</h2>
          <div className="ppd-forrester-highlight">
            <p>The Forrester B2B Summit was more than a showcase, it was a convergence of strategy, innovation, and future-focused dialogue. We were privileged to interact with forward-thinking leaders across industries who shared their ambitions, challenges, and evolving priorities.</p>
          </div>
        </div>

        <div className="ppd-forrester-section">
          <h2 className="ppd-forrester-section-title">What's Next?</h2>
          <div className="ppd-forrester-closing">
            <p>As we reflect on the success of the Forrester B2B Summit, we remain energized and committed to leading the charge in data intelligence. With key insights gained and new partnerships forged, we're moving ahead with sharper focus and deeper resolve.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForresterSection;
