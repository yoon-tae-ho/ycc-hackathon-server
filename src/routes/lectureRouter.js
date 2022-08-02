import express from "express";
import { postMileage, searchLectures } from "../controllers";

const lectureRouter = express.Router();

lectureRouter.post("/", searchLectures);
lectureRouter.post("/mileage", postMileage);

export default lectureRouter;
