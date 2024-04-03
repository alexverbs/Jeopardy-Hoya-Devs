import React from "react";
import { CategoryType } from "../types";
import Category from "./Category";
import "./Gameboard.css";

interface GameboardProps {
  categories: CategoryType[];
}

const Gameboard: React.FC<GameboardProps> = ({ categories }) => {
  return (
    <>
    <div className="game-container">
      <h1>Alex Verbesey's Jeopardy</h1>
      <div className="board">
        {categories.map((category, index) => {
          return (
            <Category
              key={index}
              title={category.name}
              questions={category.questions}
            />
          );
        })}
      </div>
    </div>
    </>
  );
};

export default Gameboard;