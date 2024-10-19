import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  let nav = useNavigate();
  let location = useLocation();
  return (
    <div className="h-14 w-[100%] bg-black rounded text-white flex justify-between items-center px-5">
      <div>
        <h2>News Reporter</h2>
      </div>
      <div className="flex gap-10">
        <span
          onClick={() => nav("/")}
          className={`hover:scale-110 cursor-pointer hover:text-red-500 ${
            location.pathname === "/" && "text-red-500 font-bold"
          }`}
        >
          Home
        </span>
        <span
          onClick={() => nav("/sports")}
          className={`hover:scale-110 cursor-pointer hover:text-red-500 ${
            location.pathname === "/sports" && "text-red-500 font-bold"
          }`}
        >
          Sports
        </span>
        <span
          onClick={() => nav("/entertainment")}
          className={`hover:scale-110 cursor-pointer hover:text-red-500 ${
            location.pathname === "/entertainment" && "text-red-500 font-bold"
          }`}
        >
          Entertainment
        </span>
        <span
          onClick={() => nav("/bussiness")}
          className={`hover:scale-110 cursor-pointer hover:text-red-500 ${
            location.pathname === "/bussiness" && "text-red-500 font-bold"
          }`}
        >
          Bussiness
        </span>
        <span
          onClick={() => nav("/health")}
          className={`hover:scale-110 cursor-pointer hover:text-red-500 ${
            location.pathname === "/health" && "text-red-500 font-bold"
          }`}
        >
          Health
        </span>
      </div>
    </div>
  );
};

export default Navbar;
