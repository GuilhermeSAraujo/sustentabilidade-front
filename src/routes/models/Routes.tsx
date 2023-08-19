import { Home } from "../../pages/Home";
import { SignUp } from "../../pages/SignUp";

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
    path: '/home',
    element: <Home/>
  }
];
