import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

export default function BreadcrumbBuyerPersona() {
  return (
    <div className="breatcome_area d-flex align-items-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="breatcome_title">
              <div className="breatcome_title_inner pb-2 mt-40">
                <h2>Buying Group</h2>
              </div>
              <div className="breatcome_content mr-4">
                <ul>
                  <li>
                    <a href="/">Home</a>
                    <FontAwesomeIcon icon={faAngleRight} />{" "}
                    <a href="/buyer-persona-insights">Solutions</a>
                    <FontAwesomeIcon icon={faAngleRight} />{" "}
                    <span>Buying Group</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
