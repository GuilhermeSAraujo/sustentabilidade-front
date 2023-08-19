import { HashRouter, Route, Routes } from "react-router-dom";
import { SignUp } from "../../pages/SignUp";
import { SignIn } from "../../pages/SignIn";

const SignRoutes = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<SignIn />} />
      </Routes>
    </HashRouter>
  );
};

export default SignRoutes;
