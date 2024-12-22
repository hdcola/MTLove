import ChallengeBtn from "../components/ChallengeBtn";

export default function CreateNewScenario() {
  return (
    <div className="flex-1 flex-col flex pt-24 pb-2 max-w-7xl mx-auto justify-evenly text-center">
      <div className="bg-slate-400 px-80 py-8 rounded-lg shadow-lg flex flex-col">
        <h2 className="text-white text-xl font-semibold drop-shadow-lg">
          Scenario Name
        </h2>
        <input
          type="text"
          placeholder="Give a creative name..."
          className="rounded mt-10 w-64 outline-none p-2 capitalize"
        />
      </div>
      <div className="bg-slate-400 px-80 py-10 rounded-lg shadow-lg flex flex-col my-5">
        <h2 className="text-white text-xl font-semibold drop-shadow-lg">
          Scenario Description
        </h2>
        <textarea
          type="text"
          placeholder="Describe your scenario..."
          className="rounded mt-10 w-64 h-52 outline-none p-2 capitalize"
        />
      </div>
      <div className="flex justify-center gap-10">
        <ChallengeBtn name="home" />
        <ChallengeBtn name="submit" />
      </div>
    </div>
  );
}
