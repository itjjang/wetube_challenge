import express from "express";
import routes from "../routes";
import { apiV2RemoveController, apiV2EditController } from "../controller/apiController";

const apiV2Router = express.Router();

apiV2Router.get(routes.V2Remove, apiV2RemoveController);
apiV2Router.get(routes.V2Edit, apiV2EditController);

export default apiV2Router;
