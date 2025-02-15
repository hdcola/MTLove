import ScenarioCard from "../components/ScenarioCard";
import "../index.css";
import "./Scenarios.css"; // Import the CSS file

export default function Scenarios() {
  return (
    <section className="min-h-screen bg-gradient-to-r from-pink-500 via-rose-400 via-violet-400 to-pink-500 animate-gradient">
      <div className="text-center py-12">
        <h1 className="text-5xl font-bold text-white mb-4">MTLove</h1>
        <div className="w-24 h-1 bg-purple-600 mx-auto rounded-full"></div>
      </div>
      <div className="px-4 py-36 sm:px-6 lg:px-8 h-dvh w-dvw overflow-y-auto">
        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          <ScenarioCard />
        </div>
      </div>
    </section>
  );
}
