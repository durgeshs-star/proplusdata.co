import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

export default function BreadcrumbPressReleases() {
  return (
    <section className="ppd-press-hero" aria-labelledby="press-releases-title">
      <div className="ppd-press-grid-bg" aria-hidden="true" />
      <div className="ppd-press-shell">
        <h1 id="press-releases-title">Press Releases</h1>
        <nav className="ppd-press-breadcrumb" aria-label="Breadcrumb">
          <ol>
            <li><a href="/">Home</a></li>
            <li><FontAwesomeIcon icon={faAngleRight} aria-hidden="true" /></li>
            <li><a href="/press-releases">Company</a></li>
            <li><FontAwesomeIcon icon={faAngleRight} aria-hidden="true" /></li>
            <li aria-current="page">Press Releases</li>
          </ol>
        </nav>
      </div>
    </section>
  );
}
