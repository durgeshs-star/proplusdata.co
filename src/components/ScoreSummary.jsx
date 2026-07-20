import React from "react";

export default function ScoreSummary({
  percentage,
  totalScore,
  maxScore,
  getAssessmentLevel,
}) {

  return (
    <div className="score-content">

      <h2>
        Overall GTM Score
      </h2>

      <h1 className="score-number">
        {percentage}%
      </h1>

      <p className="assessment-level">
        {getAssessmentLevel()}
      </p>

      <p>
        Score: {totalScore} / {maxScore}
      </p>

    </div>
  );
}