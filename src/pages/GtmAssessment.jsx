import React, { useState, useMemo } from "react";

import GtmToolFormSection from "../components/GtmToolFormSection";
import CategorySection from "../components/CategorySection";
import ScoreSummary from "../components/ScoreSummary";
import CustomPieChart from "../components/CustomPieChart";
import CustomRadarChart from "../components/CustomRadarChart";

export default function GTMAssessment() {

  // STEP CONTROL

  const [step, setStep] = useState(1);

  // ANSWERS

  const [answers, setAnswers] = useState({});

  // QUESTIONS

  const assessmentData = [

    {
      category: "Strategy & Alignment",

      questions: [
        "Is your GTM strategy clearly defined?",
        "Are leadership teams aligned?",
      ],
    },

    {
      category: "Data & Insights",

      questions: [
        "Do you use intent data?",
        "Is your contact database clean?",
      ],
    },

  ];

  // SAVE ANSWERS

  const handleAnswer = (question, value) => {

    setAnswers({
      ...answers,
      [question]: value,
    });

  };

  // TOTAL QUESTIONS

  const totalQuestions = assessmentData.reduce(
    (acc, item) => acc + item.questions.length,
    0
  );

  // TOTAL SCORE

  const totalScore = useMemo(() => {

    return Object.values(answers).reduce(
      (acc, value) => acc + Number(value),
      0
    );

  }, [answers]);

  // MAX SCORE

  const maxScore = totalQuestions * 5;

  // PERCENTAGE

  const percentage = Math.round(
    (totalScore / maxScore) * 100
  ) || 0;

  // RESULT LEVEL

  const getAssessmentLevel = () => {

    if (percentage >= 80) {
      return "Excellent GTM Readiness";
    }

    if (percentage >= 60) {
      return "Good GTM Foundation";
    }

    if (percentage >= 40) {
      return "Moderate GTM Readiness";
    }

    return "Needs Improvement";

  };

  // RADAR DATA

  const radarData = [

    {
      category: "Strategy",
      score: 3,
    },

    {
      category: "Data",
      score: 4,
    },

  ];

  return (

    <div className="assessment-page">

      {/* STEP 1 */}

      {step === 1 && (

        <GtmToolFormSection
          setStep={setStep}
        />

      )}

      {/* STEP 2 */}

      {step === 2 && (

        <div className="container py-5">

          <h1 className="mb-5">
            GTM Assessment Questions
          </h1>

          {assessmentData.map((section, index) => (

            <CategorySection
              key={index}
              section={section}
              handleAnswer={handleAnswer}
            />

          ))}

          <div className="text-center mt-5">

            <button
              className="btn btn-primary"
              onClick={() => setStep(3)}
            >
              Submit Assessment
            </button>

          </div>

        </div>

      )}

      {/* STEP 3 */}

      {step === 3 && (

        <div className="container py-5">

          <ScoreSummary
            percentage={percentage}
            totalScore={totalScore}
            maxScore={maxScore}
            getAssessmentLevel={getAssessmentLevel}
          />

          <CustomPieChart
            percentage={percentage}
          />

          <CustomRadarChart
            radarData={radarData}
          />

        </div>

      )}

    </div>

  );

}