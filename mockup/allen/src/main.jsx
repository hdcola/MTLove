import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import Scenarios from "./pages/Scenarios.jsx";
import MainPageLayout from "./pages/layouts/MainPageLayout.jsx";
import Challenge from "./components/Challenge.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<MainPageLayout />}>
          <Route path="/" element={<Scenarios />} />
          <Route path="challenge" element={<Challenge />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
