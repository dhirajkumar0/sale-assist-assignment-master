import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ReviewProvider } from "./context/Reviews";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ReviewProvider>
      <App />
    </ReviewProvider>
  </React.StrictMode>
);
