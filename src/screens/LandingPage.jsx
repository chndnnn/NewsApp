import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const LandingPage = () => {
  return (
    <div className="border">
      <div className="fixed w-full">
        <Navbar />
      </div>
      <div className="mt-14">
        <Outlet />
      </div>
    </div>
  );
};

export default LandingPage;
