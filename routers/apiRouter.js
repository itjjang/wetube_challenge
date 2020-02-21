import express from "express";
import routes from "../routes";
import apiV1Router from "./apiV1Router";
import apiV2Router from "./apiV2Router";
import { apiDocumentationController } from "../controller/apiController";

const apiRouter = express.Router();

apiRouter.get(routes.apiDocumentation, apiDocumentationController);
apiRouter.use(routes.V1, apiV1Router);
apiRouter.use(routes.V2, apiV2Router);

export default apiRouter;
