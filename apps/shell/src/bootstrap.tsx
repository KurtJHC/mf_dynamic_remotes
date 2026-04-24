import { registerRemotes } from "@module-federation/enhanced/runtime";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";

const counter =
    "http://localhost:5174/mf-manifest.json"
  
registerRemotes([
  { name: "remote_counter", entry: counter },
]);

const el = document.getElementById("root");
if (!el) throw new Error("Missing #root");

createRoot(el).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
