import "@fontsource/barlow-condensed/500.css";
import "@fontsource/barlow-condensed/600.css";
import "@fontsource/barlow-condensed/700.css";
import "@fontsource/vt323/400.css";
import "@fontsource/dm-sans/400.css";
import "@fontsource/dm-sans/500.css";

import "@fontsource/dm-sans/700.css";

import React from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";
import "./style.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);