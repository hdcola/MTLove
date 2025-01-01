import { Link } from "react-router";
import { PageNotFound } from "./Icons";
export default function ErrorPage() {
  return (
    <>
      <div className="flex flex-col-reverse items-center justify-center h-screen">
        <Link
          to="/mtlove"
          className="text-2xl font-semibold text-white bg-red-500 p-2 rounded hover:scale-105 hover:bg-blue-500 "
        >
          Back
        </Link>
        <p className="text-xl font-bold pb-10 italic">
          - Big Brother is Watching You
        </p>
        <h1 className="text-3xl font-bold text-red-500">
          Ops! 404 Page Not Found
        </h1>
        <PageNotFound />
      </div>
    </>
  );
}
