import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header1 from "../components/Header1";
import "./GtmAssessmentQuestions.css";

const assessmentData = [
  {
    category: "Strategy & Alignment",
    description: "A shared direction gives every GTM team a clearer path to revenue.",
    questions: [
      "Is your GTM strategy clearly defined and documented?",
      "Are leadership teams aligned on GTM goals and metrics?",
      "Do you have a defined ICP based on firmographic and technographic data?",
      "Do you prioritize markets using intent and potential indicators?",
    ],
  },
  {
    category: "Data & Insights",
    description: "Reliable signals help your teams see the right accounts and opportunities.",
    questions: [
      "Is intent and technographic data central to your GTM planning?",
      "How clean and updated is your contact database?",
      "Are buying signals integrated into your marketing and sales processes?",
      "Do you act on insights derived from GTM data consistently?",
    ],
  },
  {
    category: "Execution & Activation",
    description: "Turn shared insight into consistent, relevant action across the buyer journey.",
    questions: [
      "Are GTM campaigns aligned across marketing, sales, and customer success?",
      "Do you personalize messaging based on buyer intent or technographics?",
      "Are qualified leads effectively followed up and nurtured?",
      "Are lead-to-close conversion rates improving over time?",
    ],
  },
  {
    category: "Measurement & Optimization",
    description: "Understand what is working, then use it to make your next move smarter.",
    questions: [
      "Do you track performance KPIs across all GTM motions?",
      "Can you attribute revenue accurately to GTM activities?",
      "Do you periodically review data to optimize campaigns?",
      "Is AI or predictive analytics part of your optimization strategy?",
    ],
  },
  {
    category: "Enablement & Infrastructure",
    description: "The right tools, workflows, and skills help your strategy scale.",
    questions: [
      "Is your tech stack integrated across CRM, MAP, and BI layers?",
      "Do teams use documented GTM playbooks and workflows?",
      "Are employees trained to act on intent and data-driven insights?",
      "Do you have governance policies for data and performance?",
    ],
  },
];

const answerOptions = [
  { value: 1, label: "Not at all" },
  { value: 2, label: "A little" },
  { value: 3, label: "Mostly" },
  { value: 4, label: "Consistently" },
];

export default function GTMAssessmentQuestions() {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState({});
  const totalQuestions = assessmentData.reduce((sum, section) => sum + section.questions.length, 0);
  const answeredCount = Object.keys(answers).length;
  const progress = Math.round((answeredCount / totalQuestions) * 100);
  const totalScore = useMemo(() => Object.values(answers).reduce((sum, value) => sum + value, 0), [answers]);
  const isComplete = answeredCount === totalQuestions;

  const handleSubmit = () => {
    if (!isComplete) return;
    const maxScore = totalQuestions * 4;
    localStorage.setItem("gtmScore", String(Math.round((totalScore / maxScore) * 100)));
    localStorage.setItem("gtmTotal", String(totalScore));
    localStorage.setItem("gtmMax", String(maxScore));
    navigate("/gtm-assessment-results");
  };

  return (
    <div className="gtm-assessment-page">
      <Header1 darkMode />
    <main className="gtm-questions-page">
      <div className="gtm-questions-shell">
        <header className="gtm-questions-hero">
          <div className="gtm-questions-kicker"><span /> THE GTM CLARITY CHECK</div>
          <h1>Is your go-to-market engine built to <span>win?</span></h1>
          <p className="gtm-questions-lede">
            Take a clear-eyed look at the strategy, data, and execution behind your growth. Answer 20 quick questions to uncover where your GTM motion is strong—and where it can go further.
          </p>
          <div className="gtm-questions-meta">
            <span><b>20</b> questions</span><i />
            <span><b>5</b> key areas</span><i />
            <span><b>~3 min</b> to complete</span>
          </div>
        </header>

        <div className="gtm-progress-card" aria-live="polite">
          <div className="gtm-progress-copy">
            <div><strong>Your assessment</strong><span>{answeredCount} of {totalQuestions} answered</span></div>
            <b>{progress}%</b>
          </div>
          <div className="gtm-progress-track" role="progressbar" aria-valuenow={progress} aria-valuemin="0" aria-valuemax="100" aria-label="Assessment completion">
            <span style={{ width: `${progress}%` }} />
          </div>
        </div>

        <div className="gtm-question-sections">
          {assessmentData.map((section, sectionIndex) => (
            <section className="gtm-question-section" key={section.category}>
              <div className="gtm-section-heading">
                <span className="gtm-section-number">0{sectionIndex + 1}</span>
                <div><h2>{section.category}</h2><p>{section.description}</p></div>
              </div>
              <div className="gtm-question-list">
                {section.questions.map((question, questionIndex) => {
                  const questionId = `gtm-q-${sectionIndex}-${questionIndex}`;
                  return (
                    <article className="gtm-question-card" key={question}>
                      <h3 className="gtm-question-title" id={`${questionId}-label`}>
                        <span>{String(sectionIndex * 4 + questionIndex + 1).padStart(2, "0")}</span>
                        {question}
                      </h3>
                      <div className="gtm-answer-options" role="radiogroup" aria-labelledby={`${questionId}-label`}>
                        {answerOptions.map((option) => (
                          <label className={`gtm-answer-option ${answers[question] === option.value ? "is-selected" : ""}`} key={option.value}>
                            <input
                              type="radio"
                              name={questionId}
                              value={option.value}
                              checked={answers[question] === option.value}
                              onChange={() => setAnswers((current) => ({ ...current, [question]: option.value }))}
                            />
                            <span>{option.label}</span>
                          </label>
                        ))}
                      </div>
                    </article>
                  );
                })}
              </div>
            </section>
          ))}
        </div>

        <footer className="gtm-submit-panel">
          <div><strong>Ready to see your GTM picture?</strong><p>{isComplete ? "Your answers are in. Get your personalized assessment." : `Answer ${totalQuestions - answeredCount} more ${totalQuestions - answeredCount === 1 ? "question" : "questions"} to reveal your results.`}</p></div>
          <button type="button" onClick={handleSubmit} disabled={!isComplete}>See my results <span aria-hidden="true">→</span></button>
        </footer>
      </div>
    </main>
    </div>
  );
}
