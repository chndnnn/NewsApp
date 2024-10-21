import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  let nav = useNavigate();
  let location = useLocation();
  return (
    <header className="md:h-14 h-16  w-[100%] bg-black md:rounded rounded text-white md:flex justify-between items-center px-2 md:px-5">
      <div>
        <h2 className="text-2xl">निकिता समाचार</h2>
      </div>
      <div className="flex justify-between md:gap-10">
        <span
          onClick={() => nav("/")}
          className={`hover:scale-110 cursor-pointer hover:text-red-500 ${
            location.pathname === "/" && "text-red-500 font-bold"
          }`}
        >
          मुख्य पृष्ठ {/* Home */}
        </span>
        <span
          onClick={() => nav("/sports")}
          className={`hover:scale-110 cursor-pointer hover:text-red-500 ${
            location.pathname === "/sports" && "text-red-500 font-bold"
          }`}
        >
          खेल {/* Sports */}
        </span>
        <span
          onClick={() => nav("/entertainment")}
          className={`hover:scale-110 cursor-pointer hover:text-red-500 ${
            location.pathname === "/entertainment" && "text-red-500 font-bold"
          }`}
        >
          मनोरंजन {/* Entertainment */}
        </span>
        <span
          onClick={() => nav("/bussiness")}
          className={`hover:scale-110 cursor-pointer hover:text-red-500 ${
            location.pathname === "/bussiness" && "text-red-500 font-bold"
          }`}
        >
          व्यवसाय {/* Business */}
        </span>
        <span
          onClick={() => nav("/health")}
          className={`hover:scale-110 cursor-pointer hover:text-red-500 ${
            location.pathname === "/health" && "text-red-500 font-bold"
          }`}
        >
          स्वास्थ्य {/* Health */}
        </span>
      </div>
    </header>
  );
};

export default Navbar;
