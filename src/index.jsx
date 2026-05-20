import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { BrowserRouter as Router } from "react-router-dom";
import { AnniversaryProvider } from "./Context/AnniversaryContext";
import Context2 from "./Context/moviePopUpContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <AnniversaryProvider>
        <Context2>
          <App />
        </Context2>
      </AnniversaryProvider>
    </Router>
  </React.StrictMode>
);
