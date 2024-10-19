import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./screens/Home";
import Sports from "./screens/Sports";
import Entertainment from "./screens/Entertainment";
import Bussiness from "./screens/Bussiness";
import LandingPage from "./screens/LandingPage";
import Health from "./screens/Health";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/sports",
        element: <Sports />,
      },
      {
        path: "/entertainment",
        element: <Entertainment />,
      },
      {
        path: "/bussiness",
        element: <Bussiness />,
      },
      {
        path: "/health",
        element: <Health />,
      },
    ],
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
