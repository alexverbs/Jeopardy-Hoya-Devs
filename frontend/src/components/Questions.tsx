/*
import React from "react";
import "./Questions.css";

interface QuestionProps {
  points: number;
  question: string;
  answer: string;
}

const Question: React.FC<QuestionProps> = ({ points, question, answer }) => {
  const [isBeingAnswered, setIsBeingAnswered] = React.useState(false);
  const [answered, setAnswered] = React.useState(false);

  const handleClick = () => {
    if (answered) return;
    if (isBeingAnswered) {
      setIsBeingAnswered(false);
      setAnswered(true);
      return;
    }
    setIsBeingAnswered(true);
  };

  let questionClass = "question";
  if (isBeingAnswered && !answered) {
    questionClass += " full-screen";
  }

  if (answered) return <div className="question">{answer}</div>;
  if (isBeingAnswered)
    return (
      <div className="question" onClick={handleClick}>
        {question}
      </div>
    );

  return (
    <div className="question" onClick={handleClick}>
      {points}
    </div>
  );
};

export default Question;
*/
/*
import React from "react";
import "./Questions.css";

interface QuestionProps {
  points: number;
  question: string;
  answer: string;
}

const Question: React.FC<QuestionProps> = ({ points, question, answer }) => {
  const [isBeingAnswered, setIsBeingAnswered] = React.useState(false);
  const [answered, setAnswered] = React.useState(false);

  const handleClick = () => {
    if (answered) return;
    setIsBeingAnswered(!isBeingAnswered);
    if (isBeingAnswered) {
      setAnswered(true);
    }
  };

  let questionClass = "question";
  if (isBeingAnswered && !answered) {
    questionClass += " full-screen";
  }

  // Display the answer if the question has been answered
  if (answered) {
    questionClass = "question"; // Reset to default class if needed
    return <div className={questionClass}>{answer}</div>;
  }

  // Handle the display of the question or the points value
  return (
    <div className={questionClass} onClick={handleClick}>
      {isBeingAnswered ? question : points}
    </div>
  );
};

export default Question;
*/

import React from "react";
import "./Questions.css";

interface QuestionProps {
  points: number;
  question: string;
  answer: string;
}

const Question: React.FC<QuestionProps> = ({ points, question, answer }) => {
  const [isBeingAnswered, setIsBeingAnswered] = React.useState(false);
  const [isAnswerShown, setIsAnswerShown] = React.useState(false);
  const [answered, setAnswered] = React.useState(false);

  const handleClick = () => {
    if (answered) {
      // If it's already answered, clicking should do nothing
      return;
    }

    if (isBeingAnswered) {
      // If it's in the 'being answered' state, display the answer
      setIsAnswerShown(true);
    } else {
      // If it's the first click, set it to 'being answered' state
      setIsBeingAnswered(true);
    }

    // If the answer is shown, the next click will mark it as answered and shrink it back
    if (isAnswerShown) {
      setAnswered(true);
      setIsBeingAnswered(false);
    }
  };

  // Determine the CSS class
  let questionClass = "question";
  if (isBeingAnswered) {
    questionClass += " full-screen";
  }

  return (
    <div className={questionClass} onClick={handleClick}>
      {isAnswerShown ? answer : isBeingAnswered ? question : points}
    </div>
  );
};

export default Question;

