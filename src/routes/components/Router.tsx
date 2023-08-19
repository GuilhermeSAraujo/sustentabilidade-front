import { HashRouter, Routes, Route } from "react-router-dom";
import { SignUp } from "../../pages/SignUp";
import { SignIn } from "../../pages/SignIn";
import { Home } from "../../pages/Home";
import { AuthProvider } from "../../contexts/auth";

const Router = () => {
  return (
    <AuthProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </HashRouter>
    </AuthProvider>
  );
};

export default Router;
