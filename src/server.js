import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import { getCampuses, getMajorAreas } from "./controllers";
import { corsMiddleware } from "./middlewares";
import lectureRouter from "./routes/lectureRouter";

const app = express();
app.use(corsMiddleware);
// middlewares
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(morgan("dev"));
//app.use(corsMiddleware);

// routes
app.get("/campuses", getCampuses);
app.get("/majorareas", getMajorAreas);
app.use("/lectures", lectureRouter);

export default app;
