import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./components/Home";
import { AboutFundation } from "./components/AboutFundation";
import { History } from "./components/History";
import { Offer } from "./components/Offer";
import { Gallery } from "./components/Gallery";
import { Contact } from "./components/Contact";

const router = createBrowserRouter([
  {
    path: "",
    element: <Home />,
  },
  {
    path: "o-fundacji",
    element: <AboutFundation />,
  },
  {
    path: "historia",
    element: <History />,
  },
  {
    path: "oferta",
    element: <Offer />,
  },
  {
    path: "galeria",
    element: <Gallery />,
  },
  {
    path: "kontakt",
    element: <Contact />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
