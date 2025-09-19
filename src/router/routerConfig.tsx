import { createBrowserRouter } from "react-router-dom";

import RouteLayout from "../components/RouteLayout";
import ErrorPage from "../Pages/ErrorPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RouteLayout />,
    errorElement:<ErrorPage />,
    children:[
      {
        path:"/",
        element:<div>Home</div>,
      }
    ]
  },
]);

export default router;
