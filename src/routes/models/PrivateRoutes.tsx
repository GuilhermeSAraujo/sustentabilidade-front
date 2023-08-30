import { HashRouter, Route, Routes } from "react-router-dom";
import { Home } from "../../pages/Home";
import { Products } from "../../pages/Products";
import { Navbar } from "../../shared/assets/components";

const PrivateRoutes = () => {
  return (
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/produtos" element={<Products />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </HashRouter>
  );
};

export default PrivateRoutes;
