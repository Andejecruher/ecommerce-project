import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router/dom";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import router from "./router/routes";
import "./styles/globals.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
