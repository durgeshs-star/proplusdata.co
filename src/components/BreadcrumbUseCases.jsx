import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

export default function BreadcrumbUseCases() {
  return (
    <section className="ppd-usecases-hero" aria-labelledby="usecases-title">
      <div className="ppd-usecases-grid-bg" aria-hidden="true" />
      <div className="ppd-usecases-shell">
        <h1 id="usecases-title">Use Cases</h1>
        <nav className="ppd-usecases-breadcrumb" aria-label="Breadcrumb">
          <ol>
            <li><a href="/">Home</a></li>
            <li><FontAwesomeIcon icon={faAngleRight} aria-hidden="true" /></li>
            <li aria-current="page">Use Cases</li>
          </ol>
        </nav>
      </div>
    </section>
  );
}
