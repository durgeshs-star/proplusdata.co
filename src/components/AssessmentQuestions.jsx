import React, { useState } from "react";

export default function AssessmentQuestions() {

  // STORE ANSWERS

  const [answers, setAnswers] = useState({});

  // QUESTIONS DATA

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

  ];

  // SAVE ANSWERS

  const handleAnswer = (question, value) => {

    setAnswers({
      ...answers,
      [question]: value,
    });

  };

  // SUBMIT

  const handleSubmit = () => {

    console.log(answers);

  };

  return (

    <div className="assessment-page">

      <h1 className="main-title">
        GTM Assessment Tool
      </h1>

      {/* LOOP CATEGORIES */}

      {
        assessmentData.map((section, index) => (

          <div
            className="category-box"
            key={index}
          >

            {/* CATEGORY TITLE */}

            <h2 className="category-title">
              {section.category}
            </h2>

            {/* LOOP QUESTIONS */}

            {
              section.questions.map((question, qIndex) => (

                <div
                  className="question-card"
                  key={qIndex}
                >

                  <h3 className="question-text">
                    {question}
                  </h3>

                  <div className="options">

                    {/* OPTION 1 */}

                    <label>

                      <input
                        type="radio"
                        name={question}
                        onChange={() =>
                          handleAnswer(question, 5)
                        }
                      />

                      Strongly Agree

                    </label>

                    {/* OPTION 2 */}

                    <label>

                      <input
                        type="radio"
                        name={question}
                        onChange={() =>
                          handleAnswer(question, 4)
                        }
                      />

                      Agree

                    </label>

                    {/* OPTION 3 */}

                    <label>

                      <input
                        type="radio"
                        name={question}
                        onChange={() =>
                          handleAnswer(question, 3)
                        }
                      />

                      Neutral

                    </label>

                    {/* OPTION 4 */}

                    <label>

                      <input
                        type="radio"
                        name={question}
                        onChange={() =>
                          handleAnswer(question, 2)
                        }
                      />

                      Disagree

                    </label>

                    {/* OPTION 5 */}

                    <label>

                      <input
                        type="radio"
                        name={question}
                        onChange={() =>
                          handleAnswer(question, 1)
                        }
                      />

                      Strongly Disagree

                    </label>

                  </div>

                </div>

              ))
            }

          </div>

        ))
      }

      <button
        className="submit-btn"
        onClick={handleSubmit}
      >
        Submit Assessment
      </button>

    </div>

  );
}