import { HashRouter, Route, Routes } from "react-router-dom";
import { Home } from "../../pages/Home";
import MenuMobile from "../../shared/components/MenuMobile";

const PrivateRoutes = () => {
  return (
    <>
      <MenuMobile
      />
      <HashRouter>
        <Routes>
          <Route path="*" element={<Home />} />
        </Routes>
      </HashRouter>
    </>
  );
};

export default PrivateRoutes;
