import React from "react";
import { createRoot } from "react-dom/client";
import { AverageComponent } from "./averageComponent";
import { TotalScoreComponent } from "./totalScoreComponent";
import logo from "./assets/logo_1.png";

const root = createRoot(document.getElementById("root"));
root.render(
  <div>
    <h1>Hello from React DOM</h1>
    <img src={logo} style={{ width: 150 }} alt="Logo" />
    <AverageComponent />
    <TotalScoreComponent />
  </div>
);
