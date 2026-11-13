import React from "react";
import "./TechStackRenewal.css";

const renewalWindows = [
  { name: "< 100 days", className: "days", renewing: [0] },
  { name: "6 months", className: "6months", renewing: [1] },
  { name: "Multi-year", className: "multiyear", renewing: [] },
];

export default function TechStackRenewal() {
  return (
    <div className="ppd-tech-stack-renewal" aria-label="Technology renewal timelines">
      <div className="ppd-tech-stack-renewal__heading">
        <strong>Renewal windows</strong>
        <span><i aria-hidden="true" /> Upcoming renewal</span>
      </div>

      <div className="ppd-tech-stacks" aria-hidden="true">
        {renewalWindows.map((window) => (
          <div className="ppd-tech-stack" key={window.className}>
            <span className="ppd-tech-stack-label">{window.name}</span>
            <div className="ppd-tech-stack-items">
              {[0, 1, 2].map((item) => (
                <span
                  className={`ppd-tech-stack-block ppd-tech-stack-block--${window.className}${window.renewing.includes(item) ? " ppd-tech-stack-block--renewing" : ""}`}
                  key={item}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
