import express from "express";
import routes from "../routes";
import { joinController, loginController, confirmAccountController } from "../controller/userController";
import { homeController } from "../controller/courseController";

const globalRouter = express.Router();

globalRouter.get(routes.home, homeController);
globalRouter.get(routes.join, joinController);
globalRouter.get(routes.login, loginController);
globalRouter.get(routes.confirmAccount, confirmAccountController);

export default globalRouter;
