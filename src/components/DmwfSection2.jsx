import React from "react";
import "./Dmwf.css"

const DmwfSection2 = () => {
  return (
    <section className="ppd-dmwf-event ppd-dmwf-help">
      <div className="ppd-dmwf-help-inner">
        <h2 className="ppd-dmwf-help-title">How ProPlus Data Helps</h2>
        <p className="ppd-dmwf-help-intro"><a href="https://proplusdata.co/">ProPlus Data</a> enables GTM teams to move earlier and move smarter by combining:</p>
        
        <div className="ppd-dmwf-help-grid">
          <div className="ppd-dmwf-help-item">
            <span className="ppd-dmwf-help-number">01</span>
            <p className="ppd-dmwf-help-text">Verified renewal timelines</p>
          </div>
          <div className="ppd-dmwf-help-item">
            <span className="ppd-dmwf-help-number">02</span>
            <p className="ppd-dmwf-help-text">Installed technology insights</p>
          </div>
          <div className="ppd-dmwf-help-item">
            <span className="ppd-dmwf-help-number">03</span>
            <p className="ppd-dmwf-help-text">Account-level intelligence</p>
          </div>
          <div className="ppd-dmwf-help-item">
            <span className="ppd-dmwf-help-number">04</span>
            <p className="ppd-dmwf-help-text">Decision-maker mapping</p>
          </div>
        </div>

        <p className="ppd-dmwf-help-closing">All designed to support pipeline creation, expansion, and competitive displacement.</p>

        <div className="ppd-dmwf-missed">
          <h3 className="ppd-dmwf-missed-title">Missed Us at DMWF?</h3>
          <p className="ppd-dmwf-missed-description">If you didn't get a chance to connect with us at DMWF Europe or want to continue the conversation, we'd be happy to show you how Renewal Intelligence fits into your GTM strategy.</p>
          <div className="ppd-dmwf-next-steps">
            <div className="ppd-dmwf-next-step">Explore Renewal Intelligence</div>
            <div className="ppd-dmwf-next-step">Book a conversation with our team</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DmwfSection2;
