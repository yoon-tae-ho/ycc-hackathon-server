import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";

const app = express();

// middlewares
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(morgan("dev"));

// routes
app.get("/", (req, res) => {
  res.send("hello!");
});

export default app;
