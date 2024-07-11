import React from "react";
import { getTotalScore } from "./averageService";
import * as classes from "./totalScoreComponentStyles.scss";
import "bootstrap/dist/css/bootstrap.css";

export const TotalScoreComponent: React.FC = () => {
  const [totalScore, setTotalScore] = React.useState(0);

  React.useEffect(() => {
    const scores = [10, 20, 30, 40, 50];
    setTotalScore(getTotalScore(scores));
  }, []);

  return (
    <div>
      <span className={classes.resultBackground}>
        Students total score: {totalScore}
      </span>
    </div>
  );
};
