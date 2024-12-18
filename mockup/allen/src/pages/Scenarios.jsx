import "../Scenarios.css";

import ScenarioCard from "../components/ScenarioCard.jsx";

function Scenarios() {
  return (
    <section className="flex-1 flex-col flex">
      <div className="grid grid-cols-1 max-w-7xl mx-auto gap-10 py-40 lg:grid-cols-3 md:grid-cols-2 px-20">
        <ScenarioCard />
      </div>
    </section>
  );
}

export default Scenarios;
