import { Outlet } from "react-router";
import Navbar from "../navbar/Navbar";

function Home() {
  return (
    <div className="mx-2 sm:mx-4 md:mx-6 lg:mx-12 xl:mx-16">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default Home;
