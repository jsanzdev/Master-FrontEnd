import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./app";
import "./style.css";

const rootElement = document.getElementById("root");
if (rootElement) {
  createRoot(rootElement).render(<App />);
}
