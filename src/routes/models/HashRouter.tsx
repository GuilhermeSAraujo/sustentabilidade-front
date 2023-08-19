import { createHashRouter } from "react-router-dom";
import { routes } from './Routes';

console.log('routes', routes)
const hashRouter = createHashRouter(routes);

export default hashRouter;
