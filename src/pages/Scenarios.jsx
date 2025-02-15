import ScenarioCard from "../components/ScenarioCard";

export default function Scenarios() {
  return (
    <section className="min-h-screen bg-gradient-to-r from-pink-500 via-rose-400 via-violet-400 to-pink-500 animate-gradient">
      <div className="text-center py-12">
        <h1 className="text-5xl font-bold text-white mb-4">MTLove</h1>
        <div className="w-24 h-1 bg-purple-600 mx-auto rounded-full"></div>
      </div>
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          <ScenarioCard />
        </div>
      </div>


      <style jsx>{`
        @keyframes gradientAnimation {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradientAnimation 10s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
