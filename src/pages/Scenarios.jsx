import ScenarioCard from "../components/ScenarioCard";
import "../index.css";

export default function Scenarios() {
  return (
    <section className="h-dvh w-dvw flex flex-col justify-scenter items-center">
      <div className="fixed top-0 md:top-4 left-1/2 transform -translate-x-1/2 bg-white/30 backdrop-blur-sm shadow-lg md:rounded-2xl px-28 md:px-96 py-8 md:py-12 flex flex-col justify-center items-center gap-4 z-50 mtlove">
        <h1 className="text-5xl font-bold text-blue-600">MTLove</h1>
        <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
      </div>
      <div className="px-4 py-52 sm:px-6 lg:px-8 h-dvh w-dvw overflow-y-auto">
        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          <ScenarioCard />
        </div>
      </div>
    </section>
  );
}
