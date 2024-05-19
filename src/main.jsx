import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css"; // Import Tailwind CSS

import Home from "./components/pages/Home";
// import About from "./components/About";
// import Portfolio from "./components/Portfolio";
// import Contact from "./components/Contact";
// import Resume from "./components/Resume";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
