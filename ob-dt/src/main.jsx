import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import ZoomPage from './pages/zoomPage.jsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErrorPage from './error-page.jsx';
import { Home } from './pages/home.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <ErrorPage />,
  },{
    path: "/detection",
    element: <ZoomPage />,
    errorElement: <ErrorPage />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);