import React from "react";
import "./Team.css";

interface TeamProps {
  name: string;
  points: number;
  setPoints: (points: number) => void;
  removePoints: (points: number) => void;
}

const Team: React.FC<TeamProps> = ({ name, points, setPoints, removePoints }) => {
  return (
    <div>
      <div className="points">
        <h2>{name}:</h2>
        <h2>{points}</h2>
      </div>
      <div>
        <div className="add">
        <button onClick={() => setPoints(-points)}>clear</button>
        <button onClick={() => setPoints(100)}>100</button>
        <button onClick={() => setPoints(200)}>200</button>
        <button onClick={() => setPoints(300)}>300</button>
        <button onClick={() => setPoints(400)}>400</button>
        <button onClick={() => setPoints(500)}>500</button>
        </div>
        <div className="remove">
        <button onClick={() => removePoints(100)}>-100</button>
        <button onClick={() => removePoints(200)}>-200</button>
        <button onClick={() => removePoints(300)}>-300</button>
        <button onClick={() => removePoints(400)}>-400</button>
        <button onClick={() => removePoints(500)}>-500</button>
        </div>
      </div>
    </div>
  );
};

export default Team;