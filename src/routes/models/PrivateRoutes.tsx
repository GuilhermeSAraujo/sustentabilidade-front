import { Route, Routes, HashRouter } from "react-router-dom";
import { Home } from "../../pages/Home";
import { useState } from "react";
import MenuMobile from "../../shared/Components/MenuMobile";

const PrivateRoutes = () => {
  const [menuIsVisible, setMenuIsVisible] = useState(true);

  return (
    <>
      <MenuMobile
        menuIsVisible={menuIsVisible}
        setMenuIsVisible={setMenuIsVisible}
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
