import React from "react";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

export default function SolutionBreadcrumb({ label, parentHref }) {
  return (
    <nav className="ppd-solution-breadcrumb" aria-label="Breadcrumb">
      <ol>
        <li><Link to="/">Home</Link></li>
        <li><FaChevronRight aria-hidden="true" /></li>
        <li><Link to={parentHref}>GTM Solutions</Link></li>
        <li><FaChevronRight aria-hidden="true" /></li>
        <li aria-current="page">{label}</li>
      </ol>
    </nav>
  );
}
