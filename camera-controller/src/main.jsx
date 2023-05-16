import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from "./routes/root";
import Zoom from "./routes/zoom";
import ErrorPage from "./error-page";
import Auto from "./routes/auto";
import Settings from "./routes/settings";
import Test from "./routes/test";
import { Detection } from "./routes/detection";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },{
    path: "/zoom/:id",
    element: <Zoom />,
    errorElement: <ErrorPage />,
  },{
    path: "/auto",
    element: <Auto />,
    errorElement: <ErrorPage />,
  },{
    path: "/settings",
    element: <Settings />,
    errorElement: <ErrorPage />,
  }
  ,{
    path: "/test",
    element: <Test />,
    errorElement: <ErrorPage />,
  },{
    path: "/detection",
    element: <Detection/> ,
    errorElement: <ErrorPage />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);