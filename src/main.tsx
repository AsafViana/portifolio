import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

const root = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    <AnimatePresence exitBeforeEnter>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AnimatePresence>
  </React.StrictMode>,
  root
);

reportWebVitals();
