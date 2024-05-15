import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/styles/global.css";
import Router from "./components/ui/Router";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
