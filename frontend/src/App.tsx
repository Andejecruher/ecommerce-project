import { Home } from "@/pages/Home";
import { Products } from "@/pages/Products";
import { Route, Routes } from "react-router";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";


function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="products" element={<Products />} />
      <Route path="services" element={<>
        <div>
          <h2>Step services</h2>
        </div>
      </>} />
      <Route path="article" element={<>
        <div>
          <h2>Step article</h2>
        </div>
      </>} />
      <Route path="about" element={<>
        <div>
          <h2>Step about</h2>
        </div>
      </>} />

    </Routes>
  );
}

export default App;
