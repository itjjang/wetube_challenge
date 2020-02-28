import express from "express";
import routes from "../routes";
import { courseController, courseNewController, courseMineController } from "../controller/courseController";

const courseRouter = express.Router();

courseRouter.get(routes.home, courseController);
courseRouter.get(routes.courseNew, courseNewController);
courseRouter.get(routes.courseMine, courseMineController);

export default courseRouter;
