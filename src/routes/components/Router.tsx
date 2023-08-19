import { RouterProvider } from "react-router-dom";
import routes from "../models/Routes";

const Router = () => {

	return(
			<RouterProvider router={routes} />
	)
}

export default Router;