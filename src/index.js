//// imports React Library
import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

/// imports styles
import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.css";

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(<App />);
