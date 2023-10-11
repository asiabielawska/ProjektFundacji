import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./components/Home/Home.tsx";
import { AboutFundation } from "./components/AboutFundation/AboutFundation.tsx";
import { History } from "./components/History/History.tsx";
import { Offer } from "./components/Offer/Offer.tsx";
import { Gallery } from "./components/Gallery/Gallery.tsx";
import { Contact } from "./components/Contact/Contact.tsx";
import { Layout } from "./components/Layout/Layout.tsx";

const router = createBrowserRouter([
  {
    path: "",
    element: (
      <Layout isMainPage>
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
