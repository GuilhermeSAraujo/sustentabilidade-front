import { Home } from "../../pages/Home";
import { SignUp } from "../../pages/SignUp";
import { SignIn } from "../../pages/SignIn";

export const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: '/home',
    element: <Home/>
  }
];
