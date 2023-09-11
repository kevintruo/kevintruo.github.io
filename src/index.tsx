// import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import ThemeProvider from "./hooks/useTheme/Provider";
import MouseTrackingProvider from "./hooks/useMouseTracking/Provider";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  // <React.StrictMode>
  <ThemeProvider>
    <MouseTrackingProvider>
      <App />
    </MouseTrackingProvider>
  </ThemeProvider>
  // </React.StrictMode>
);
