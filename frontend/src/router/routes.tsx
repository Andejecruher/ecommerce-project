import NotFound404 from "@/components/NotFound404";
import { BaseLayout } from "@/layouts/BaseLayout";
import { Home } from "@/pages/Home";
import { ProductDetails } from "@/pages/ProductDetails";
import { Products } from "@/pages/Products";
import { Services } from "@/pages/Services";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    element: <BaseLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "products/:id",

        element: <ProductDetails />,
      },
      {
        path: "services",
        element: <Services />,
      },
    ],
  },
  {
    path: "/*",
    element: <NotFound404 />,
  },
]);

export default router;
