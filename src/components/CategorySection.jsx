import React from "react";
import QuestionCard from "./QuestionCard";

export default function CategorySection({
  section,
  handleAnswer,
}) {

  return (
    <div className="category-box">

      <h3 className="category-title">
        {section.category}
      </h3>

      {section.questions.map((question, index) => (

        <QuestionCard
          key={index}
          question={question}
          handleAnswer={handleAnswer}
        />

      ))}

    </div>
  );
}