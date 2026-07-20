import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";


export default function GTMAssessmentQuestions() {
  const navigate = useNavigate();

  // ANSWERS

  const [answers, setAnswers] = useState({});

  const [showResult, setShowResult] = useState(false);

  const assessmentData = [

    {
      category: "Strategy & Alignment",

      questions: [
        "Is your GTM strategy clearly defined and documented?",
        "Are leadership teams aligned on GTM goals and metrics?",
        "Do you have a defined ICP based on firmographic and technographic data?",
        "Do you prioritize markets using intent and potential indicators?",
      ],
    },

    {
      category: "Data & Insights",

      questions: [
        "Is intent and technographic data central to your GTM planning?",
        "How clean and updated is your contact database?",
        "Are buying signals integrated into your marketing and sales processes?",
        "Do you act on insights derived from GTM data consistently?",
      ],
    },

    {
      category: "Execution & Activation",

      questions: [
        "Are GTM campaigns aligned across marketing, sales, and customer success?",
        "Do you personalize messaging based on buyer intent or technographics?",
        "Are qualified leads effectively followed up and nurtured?",
        "Are lead-to-close conversion rates improving over time?",
      ],
    },

    {
      category: "Measurement & Optimization",

      questions: [
        "Do you track performance KPIs across all GTM motions?",
        "Can you attribute revenue accurately to GTM activities?",
        "Do you periodically review data to optimize campaigns?",
        "Is AI or predictive analytics part of your optimization strategy?",
      ],
    },

    {
      category: "Enablement & Infrastructure",

      questions: [
        "Is your tech stack integrated across CRM, MAP, and BI layers?",
        "Do teams use documented GTM playbooks and workflows?",
        "Are employees trained to act on intent and data-driven insights?",
        "Do you have governance policies for data and performance?",
      ],
    },

  ];

  // HANDLE ANSWERS

  const handleAnswer = (question, value) => {

    setAnswers({
      ...answers,
      [question]: Number(value),
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
      (acc, value) => acc + value,
      0
    );

  }, [answers]);

  // MAX SCORE

  const maxScore = totalQuestions * 5;

  // PERCENTAGE

  const percentage = Math.round(
    (totalScore / maxScore) * 100
  ) || 0;

  // LEVEL

  const getLevel = () => {

    if (percentage >= 80) {
      return "Excellent GTM Readiness";
    }

    if (percentage >= 60) {
      return "Strong GTM Foundation";
    }

    if (percentage >= 40) {
      return "Moderate GTM Readiness";
    }

    return "Needs Improvement";

  };

  return (

    <div className="container py-5">

      <h1 className="mb-5 text-center">
        GTM Assessment Questions
      </h1>

      {/* QUESTIONS */}

      {assessmentData.map((section, index) => (

        <div
          key={index}
          className="mb-5"
        >

          <h3 className="mb-4 text-left">
            {section.category}
          </h3>

        <div className="row">

  {section.questions.map((question, qIndex) => (

    <div
      key={qIndex}
      className="col-lg-6 mb-4"
    >

      <div className="card h-100 shadow-sm border-1 p-3">

        <label className="form-label fw-semibold mb-3 text-left">

          {question}

        </label>

        <select
          className="form-select"
          defaultValue=""
          onChange={(e) =>
            handleAnswer(
              question,
              e.target.value
            )
          }
        >

          <option value="" disabled>
            Select Answer
          </option>

          <option value="1">
            No, Not at all
          </option>

          <option value="2">
            Somewhat
          </option>

          <option value="3">
            Mostly
          </option>

          <option value="4">
            Yes, Definitely
          </option>


        </select>

      </div>

    </div>

  ))}

</div>

        </div>

      ))}

      <div className="text-center mt-5">

  <button
  className="btn btn-primary px-5"
  onClick={() => {

    // SAVE DATA

    localStorage.setItem(
      "gtmScore",
      percentage
    );

    localStorage.setItem(
      "gtmTotal",
      totalScore
    );

    localStorage.setItem(
      "gtmMax",
      maxScore
    );

    // REDIRECT

    navigate("/gtm-assessment-results");

  }}
>

  Submit Assessment

</button>

</div>

      {/* RESULT */}

      

{showResult && (

  <div className="card p-4 mt-5 text-center">

    <h2 className="mb-3">

      Your GTM Readiness Score:
      {percentage}%

    </h2>

    <h4 className="mb-3">

      {getLevel()}

    </h4>

    <p>

      Total Score:
      {totalScore} / {maxScore}

    </p>

  </div>

)}

     

    </div>

  );

}
