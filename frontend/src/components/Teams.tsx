import React from "react";
import Team from "./Team";
import "./Teams.css";

const Teams: React.FC = () => {
  const [points1, setPoints1] = React.useState<number>(0);
  const [points2, setPoints2] = React.useState<number>(0);
  const [points3, setPoints3] = React.useState<number>(0);

  const handleSetPoints1 = (points: number) => {
    setPoints1(points1 + points);
  };

  const handleSetPoints2 = (points: number) => {
    setPoints2(points2 + points);
  };

  const handleSetPoints3 = (points: number) => {
    setPoints3(points3 + points);
  };

  const handleRemovePoints1 = (points: number) => {
    setPoints1(points1 - points);
  };

  const handleRemovePoints2 = (points: number) => {
    setPoints2(points2 - points);
  };

  const handleRemovePoints3 = (points: number) => {
    setPoints3(points3 - points);
  };

  return (
    <div className="teams">
      <Team
        name={"Team 1"}
        points={points1}
        setPoints={handleSetPoints1}
        removePoints={handleRemovePoints1}
        key={1}
      />
      <Team
        name={"Team 2"}
        points={points2}
        setPoints={handleSetPoints2}
        removePoints={handleRemovePoints2}
        key={2}
      />
      <Team
        name={"Team 3"}
        points={points3}
        setPoints={handleSetPoints3}
        removePoints={handleRemovePoints3}
        key={3}
      />
    </div>
  );
};

export default Teams;