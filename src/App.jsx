import "./App.css";
import Messages from "./components/Messages";
import ChatPage from "./pages/ChatPage";
import AdminPage from "./pages/admin";
import Scenario from "../src/pages/Scenarios";
import ScenarioForm from "./pages/admin/ScenarioForm";
import { BrowserRouter, Routes, Route } from "react-router";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/scenario"
          element={
            <div className="flex flex-col h-screen">
              <Scenario />
            </div>
          }
        />
        <Route
          path="/scenario/game"
          element={
            <div className="flex flex-col h-screen">
              <ChatPage />
            </div>
          }
        >
          <Route path="/scenario/game/:sid" element={<Messages />} />
        </Route>
        <Route
          path="/admin"
          element={
            <div className="flex flex-col h-screen">
              <AdminPage />
            </div>
          }
        />
        <Route
          path="/admin/:id"
          element={
            <div className="flex flex-col h-screen">
              <ScenarioForm />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
