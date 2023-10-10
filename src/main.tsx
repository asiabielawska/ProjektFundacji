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
import { Layout } from "./components/Layout";

const router = createBrowserRouter([
  {
    path: "",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
  {
    path: "o-fundacji",
    element: (
      <Layout>
        <AboutFundation />
      </Layout>
    ),
  },
  {
    path: "historia",
    element: (
      <Layout>
        <History />
      </Layout>
    ),
  },
  {
    path: "oferta",
    element: (
      <Layout>
        <Offer />
      </Layout>
    ),
  },
  {
    path: "galeria",
    element: (
      <Layout>
        <Gallery />
      </Layout>
    ),
  },
  {
    path: "kontakt",
    element: (
      <Layout>
        <Contact />
      </Layout>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
