import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter
      basename={process.env.NODE_ENV === "production" ? "/schedule" : "/"}
    >
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
