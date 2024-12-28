import { BrowserRouter, Routes, Route } from "react-router";
import Scenarios from "./pages/Scenarios.jsx";
import MainPageLayout from "./pages/layouts/MainPageLayout.jsx";
import ChallengeLayout from "./pages/layouts/ChallengeLayout.jsx";
import Challenge from "./pages/Challenge.jsx";
import Finished from "./pages/Finished.jsx";
import CreateNewScenario from "./pages/CreateNewScenario.jsx";

export default function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainPageLayout />}>
          <Route index element={<Scenarios />} />
          <Route path="create" element={<CreateNewScenario />} />

          <Route path="challenge">
            <Route element={<ChallengeLayout />}>
              <Route path=":scenarioId" element={<Challenge />} />
              <Route path=":scenarioId/finished" element={<Finished />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
