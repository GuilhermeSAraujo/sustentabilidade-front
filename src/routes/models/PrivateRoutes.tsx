import { HashRouter, Route, Routes } from "react-router-dom";
import { Home } from "../../pages/Home";
import { Navbar } from "../../shared/components";

const PrivateRoutes = () => {
  return (
    <>
      <Navbar />
      <HashRouter>
        <Routes>
          <Route path="*" element={<Home />} />
        </Routes>
      </HashRouter>
    </>
  );
};

export default PrivateRoutes;
