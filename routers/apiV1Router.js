import express from "express";
import routes from "../routes";
import { apiV1BuyController, apiV1RefundController } from "../controller/apiController";

const apiV1Router = express.Router();

apiV1Router.get(routes.V1Buy, apiV1BuyController);
apiV1Router.get(routes.V1Refund, apiV1RefundController);

export default apiV1Router;
