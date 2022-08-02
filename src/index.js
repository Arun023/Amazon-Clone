import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { StateProvider } from "./Components/StateProvider";
import reducer, { initialState } from "./reducer";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </>
);
reportWebVitals();
