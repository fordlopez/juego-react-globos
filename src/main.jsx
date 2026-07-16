import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { GloboProvider } from "./GloboContex/GloboContex";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GloboProvider>
      <App />
    </GloboProvider>
  </StrictMode>
);