import { BrowserRouter, Routes, Route } from "react-router";
import Scenarios from "./pages/Scenarios.jsx";
import MainPageLayout from "./pages/layouts/MainPageLayout.jsx";
import Challenge from "./components/Challenge.jsx";

export default function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainPageLayout />}>
          <Route path="/" element={<Scenarios />} />
          <Route path="challenge/:scenarioId" element={<Challenge />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
