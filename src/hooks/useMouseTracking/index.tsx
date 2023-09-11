import * as React from "react";
import { mouseTrackingContext } from "./Provider";

export default function useMouseTracking() {
  const context = React.useContext(mouseTrackingContext);
  if (!context) {
    throw new Error(
      "MouseTrackingProvider is not found. Please ensure to provide a MouseTrackingProvider"
    );
  }

  const [mousePos] = context;

  return { ...mousePos };
}
