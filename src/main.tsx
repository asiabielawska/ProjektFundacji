import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./components/Home";
import { OFundacji } from "./components/OFundacji";
import { Historia } from "./components/Historia";
import { Oferta } from "./components/Oferta";
import { Galeria } from "./components/Galeria";
import { Kontakt } from "./components/Kontakt";

const router = createBrowserRouter([
  {
    path: "",
    element: <Home />,
  },
  {
    path: "o-fundacji",
    element: <OFundacji />,
  },
  {
    path: "historia",
    element: <Historia />,
  },
  {
    path: "oferta",
    element: <Oferta />,
  },
  {
    path: "galeria",
    element: <Galeria />,
  },
  {
    path: "kontakt",
    element: <Kontakt />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
