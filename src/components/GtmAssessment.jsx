import React, { useState, useMemo } from "react";

// import GtmToolFormSection from "../components/GtmToolFormSection";
import CategorySection from "../components/CategorySection";
import ScoreSummary from "../components/ScoreSummary";
import ResultDashboard from "../components/ResultDashboard";
import CustomPieChart from "../components/CustomPieChart";
import CustomRadarChart from "../components/CustomRadarChart";

export default function GTMAssessment() {

  // STEP CONTROL

  const [step, setStep] = useState(1);
  console.log("CURRENT STEP:", step);


  const [answers, setAnswers] = useState({});

  // QUESTIONS

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
      return "Strong GTM Foundation";
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
      score: 4,
    },

    {
      category: "Data",
      score: 5,
    },

    {
      category: "Execution",
      score: 3,
    },

    {
      category: "Optimization",
      score: 4,
    },

    {
      category: "Infrastructure",
      score: 2,
    },

  ];

  return (

    <div className="assessment-page">

      {/* STEP 1 → FORM */}

{step === 1 && (

  <div className="container py-5">

    <h1 className="mb-4">
      See Your GTM Truth in 60 Seconds
    </h1>

    <form
      onSubmit={async (e) => {

        e.preventDefault();

        const response = await fetch(
          "https://api.web3forms.com/submit",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify({
              access_key:
                "9df4c372-c813-4806-97bb-685a8358a058",
              name: e.target.name.value,
              email: e.target.email.value,
              subject: "New GTM Assessment Lead",
            }),
          }
        );

        const result = await response.json();

        console.log(result);

        if (result.success) {

          setStep(2);

        }

      }}
    >

      <div className="mb-3">

        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Name"
          required
        />

      </div>

      <div className="mb-3">

        <input
          type="email"
          name="email"
          className="form-control"
          placeholder="Email"
          required
        />

      </div>

      <button
        type="submit"
        className="btn btn-primary"
      >
        Begin Assessment
      </button>

    </form>

  </div>

)}

      {/* STEP 2 → QUESTIONS */}

     {step === 2 && (

  <div className="container py-5">

    <h1>
      QUESTIONS PAGE WORKING
    </h1>

  </div>

)}
      {/* STEP 3 → RESULTS */}

      {step === 3 && (

        <div className="container py-5">

          {/* SCORE */}

          <ScoreSummary
            percentage={percentage}
            totalScore={totalScore}
            maxScore={maxScore}
            getAssessmentLevel={getAssessmentLevel}
          />

          {/* PIE CHART */}

          <CustomPieChart
            percentage={percentage}
          />

          {/* RADAR CHART */}

          <CustomRadarChart
            radarData={radarData}
          />

          {/* RESULT DASHBOARD */}

          <ResultDashboard
            score={percentage}
          />

        </div>

      )}

    </div>

  );

}