import express from "express";
import routes from "../routes";
import { homeController, loginController, photosController, profileController } from "../controller/globalController";

const globalRouter = express.Router();

globalRouter.get(routes.home, homeController);
globalRouter.get(routes.login, loginController);
globalRouter.get(routes.photos, photosController);
globalRouter.get(routes.profile, profileController);

export default globalRouter;
