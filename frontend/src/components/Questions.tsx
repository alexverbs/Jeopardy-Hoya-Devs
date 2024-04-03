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
      return;
    }

    if (isBeingAnswered) {
      setIsAnswerShown(true);
    } else {
      setIsBeingAnswered(true);
    }

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

  let displayText;
  if (isAnswerShown) {
    displayText = answer;
  } else if (isBeingAnswered) {
    displayText = question;
  } else {
    displayText = points;
  }

  return (
    <div className={questionClass} onClick={handleClick}>
      {displayText}
    </div>
  );
};

export default Question;

