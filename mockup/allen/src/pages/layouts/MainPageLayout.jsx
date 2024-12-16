import { Outlet } from "react-router";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function MainPageLayout() {
  return (
    <>
      <main className="h-screen flex flex-col">
        <Navbar />
        <Outlet />
        <Footer />
      </main>
    </>
  );
}
