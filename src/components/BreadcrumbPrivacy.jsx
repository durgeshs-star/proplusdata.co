import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

export default function BreadcrumbPrivacy() {
  return (
    <section className="ppd-privacy-hero" aria-labelledby="privacy-policy-title">
      <div className="ppd-privacy-grid" aria-hidden="true" />
      <div className="ppd-privacy-shell">
        <h1 id="privacy-policy-title">Privacy Policy</h1>
        <nav className="ppd-privacy-breadcrumb" aria-label="Breadcrumb">
          <ol>
            <li><a href="/">Home</a></li>
            <li><FontAwesomeIcon icon={faAngleRight} aria-hidden="true" /></li>
            <li><a href="/privacy-policy">Company</a></li>
            <li><FontAwesomeIcon icon={faAngleRight} aria-hidden="true" /></li>
            <li aria-current="page">Privacy Policy</li>
          </ol>
        </nav>
      </div>
    </section>
  );
}
