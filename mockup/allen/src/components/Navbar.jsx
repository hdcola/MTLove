import { UserIcon } from "./Icons";
import { Link } from "react-router";
/* eslint-disable react/prop-types */
export default function Navbar({ pageName }) {
  return (
    <>
      <nav className="fixed top-0 w-screen bg-slate-200 shadow-md z-50 dark:bg-gray-800 dark:text-white select-none">
        <div className="max-w-7xl mx-auto flex justify-between items-center p-5 md:px-8">
          <Link
            to="/"
            className="font-bold text-xl hover:scale-110 active:scale-100"
          >
            MTLove
          </Link>
          {/* Page name */}
          <div className="flex text-center items-center font-bold capitalize text-2xl">
            {pageName || "Scenario"}
          </div>
          <div className="flex">
            <div className="p-2">
              <UserIcon />
            </div>
            <div className="flex text-center items-center">
              <p>username</p>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
