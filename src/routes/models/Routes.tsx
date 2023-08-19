import { createHashRouter } from "react-router-dom";
import { SignUp } from "../../pages/SignUp";

const routes = createHashRouter([
  {
    path: "/",
    element: <SignUp />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  }
]);

export default routes;
