import React, { useState } from "react";
import NavBar from "../../components/NavBar";
import QuestionTypeA from "../../components/subComponents/QuestionTypeA";
import QuestionTypeB from "../../components/subComponents/QuestionTypeB";
import QuestionTypeC from "../../components/subComponents/QuestionTypeC";

function ChallengePage() {
  const [challenge] = useState({
    id: 10,
    name: "Challenge 10",
    topic: "React",
    difficulty: "Medium",
    questions: [
      {
        type: "fourChoice",
        question: "What is the output of the following code ?",
      },
      {
        type: "sixChoice",
        question: "What is the output of the following code ?",
      },
      {
        type: "rerange",
        question: "Rearrange the following code to make it work properly",
      },
    ],
  });

  return (
    <>
      <NavBar />
      <div className="challenge__container w-full h-full bg-light-yellow rounded-3xl px-9">
        <h1
          className="page__title"
          style={{
            margin: "auto",
            textAlign: "center",
          }}
        >
          #{challenge.name}
        </h1>
        <div className="grid grid-col-[1fr_1fr]">
          <button> Prev </button>
          <button> Next </button>
        </div>
        import QuestionTypeC from
        "../../components/subComponents/QuestionTypeC";
        <div className="question__container">
          {challenge.questions.map((question) => {
            if (question.type === "fourChoice") {
              return <QuestionTypeA type: string ={question.type} question={question} />;
            }
            if (question.type === "sixChoice") {
              return <QuestionTypeB question={question} />;
            }
            if (question.type === "rerange") {
              return <QuestionTypeC question={question} />;
            }
            return null; // Add this line to avoid missing return error
          })}
        </div>
      </div>
    </>
  );
}

export default ChallengePage;
