import { createBrowserRouter } from "react-router-dom";
import { SignIn } from "../../pages/SignIn";

const routes = createBrowserRouter([
  {
    path: "/signin",
    element: <SignIn />,
  }
]);

export default routes;
