import "./App.css";
import ChatPage from "./pages/ChatPage";
import AdminPage from "./pages/admin";
import ScenarioForm from "./pages/admin/ScenarioForm";
import { BrowserRouter, Routes, Route } from "react-router";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="flex flex-col h-screen">
              <ChatPage />
            </div>
          }
        />
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
