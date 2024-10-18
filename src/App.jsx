import Navbar from "./components/Navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./screens/Home";
import Sports from "./screens/Sports";
import Entertainment from "./screens/Entertainment";
import Bussiness from "./screens/Bussiness";
import City from "./screens/City";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar /> <Home />
      </>
    ),
  },
  {
    path: "/sports",
    element: (
      <>
        <Navbar /> <Sports />
      </>
    ),
  },
  {
    path: "/entertainment",
    element: (
      <>
        <Navbar /> <Entertainment />
      </>
    ),
  },
  {
    path: "/bussiness",
    element: (
      <>
        <Navbar /> <Bussiness />
      </>
    ),
  },
  {
    path: "/city",
    element: (
      <>
        <Navbar /> <City />
      </>
    ),
  },
]);

function App() {
  return (
    <>
      <div>
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
