import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { SaasFuturisticApp } from "./SaasFuturisticApp/SaasFuturisticApp";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <SaasFuturisticApp />
  </StrictMode>,
);
