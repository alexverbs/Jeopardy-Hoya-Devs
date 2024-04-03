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

  return (
    <div className={questionClass} onClick={handleClick}>
      {isAnswerShown ? answer : isBeingAnswered ? question : points}
    </div>
  );
};

export default Question;

