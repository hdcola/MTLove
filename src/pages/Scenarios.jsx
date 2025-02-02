import ScenarioCard from "../components/ScenarioCard";

export default function Scenarios() {
  return (
    <section className="min-h-screen bg-gray-50">
      <div className="text-center py-12">
        <h1 className="text-5xl font-bold text-blue-600 mb-4">MTLove</h1>
        <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
      </div>
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          <ScenarioCard />
        </div>
      </div>
    </section>
  );
}
