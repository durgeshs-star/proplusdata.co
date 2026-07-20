import React from "react";

export default function QuestionCard({
  question,
  handleAnswer,
}) {

  return (
    <div className="question-card">

      <h4 className="question-text">
        {question}
      </h4>

      <div className="options">

        <label>
          <input
            type="radio"
            name={question}
            onChange={() => handleAnswer(question, 5)}
          />
          Strongly Agree
        </label>

        <label>
          <input
            type="radio"
            name={question}
            onChange={() => handleAnswer(question, 4)}
          />
          Agree
        </label>

        <label>
          <input
            type="radio"
            name={question}
            onChange={() => handleAnswer(question, 3)}
          />
          Neutral
        </label>

        <label>
          <input
            type="radio"
            name={question}
            onChange={() => handleAnswer(question, 2)}
          />
          Disagree
        </label>

        <label>
          <input
            type="radio"
            name={question}
            onChange={() => handleAnswer(question, 1)}
          />
          Strongly Disagree
        </label>

      </div>

    </div>
  );
}