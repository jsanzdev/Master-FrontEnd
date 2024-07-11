import React from "react";
import { getAvg } from "./averageService";
import * as classes from "./averageComponentStyles.scss";

export const AverageComponent = () => {
  const [average, setAverage] = React.useState(0);

  console.log(classes);

  React.useEffect(() => {
    const scores = [90, 75, 60, 99, 94, 30];
    setAverage(getAvg(scores));
  }, []);

  return (
    <div>
      <span className={classes.resultBackground}>
        Students average: {average}
      </span>
    </div>
  );
};
