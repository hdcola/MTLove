import { BrowserRouter, Routes, Route } from "react-router";
import Scenarios from "./pages/Scenarios";
import ChatPage from "./pages/ChatPage";
// import Messages from "./components/Messages";
import AdminPage from "./pages/admin";
import ScenarioForm from "./pages/admin/ScenarioForm";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Scenarios />} />
        <Route path="/game">
          <Route path="/game/:sid" element={<ChatPage />} />
        </Route>

        <Route path="/admin" element={<AdminPage />} />
        <Route path="/admin/:id" element={<ScenarioForm />} />
      </Routes>
    </BrowserRouter>
  );
}
