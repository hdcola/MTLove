import "./App.css";
import { useState } from "react";
import Challenge from "./components/Challenge.jsx";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";
import ScenarioCard from "./components/ScenarioCard.jsx";

function App() {
  const [page, setPage] = useState(true);

  function handlePage() {
    setPage((e) => !e);
  }

  const scenarios = (
    <div className="grid grid-cols-1 max-w-7xl mx-auto gap-10 py-40 lg:grid-cols-3 md:grid-cols-2 px-20">
      <ScenarioCard handlePage={handlePage} />
    </div>
  );
  const challenge = (
    <div className="flex pt-[88px] max-w-7xl mx-auto">
      <Challenge />
    </div>
  );

  return (
    <main className="h-screen flex flex-col">
      <Navbar pageName="scenarios" />
      <section className="flex-1 flex-col flex">
        {page ? scenarios : challenge}
      </section>

      <Footer />
    </main>
  );
}

export default App;
