import { useAuth } from "../../hooks/useAuth";
import PrivateRoutes from "../models/PrivateRoutes";
import SignRoutes from "../models/SignRoutes";

const Router = () => {
  const { signed } = useAuth();

  return signed ? <PrivateRoutes /> : <SignRoutes />;
};

export default Router;
