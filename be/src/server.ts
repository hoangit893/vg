import express, { Request, Response } from "express";
import { config } from "./configs/config";
import { connectDB } from "./configs/db";
const logger = require("morgan");
import cors from "cors";
import http from "http";
import Logging from "./library/Logging";
const jwt = require("jsonwebtoken");

//Routes
import userRoute from "./routes/userRoute";
import gameRoute from "./routes/gameRoute";
import { auth } from "./middlewares/auth";

const app = express();

// app.use(logger({ path: "log.txt" }));

app.use("/auth", async (req: Request, res: Response) => {
  try {
    if (req.headers.authorization !== undefined) {
      const token = req.headers.authorization.split(" ")[1];
      const decoded = await jwt.verify(token, config.jwt.secret);

      req.headers.username = decoded.username;
      res.status(200).send("Authorized");
    } else {
      res.status(401).send("Unauthorized");
    }
  } catch (error) {
    console.log(error);
    res.status(401).send("Unauthorized");
  }
});
app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
  // log request
  Logging.info(
    `Request URL: ${req.originalUrl} | Request Type: ${
      req.method
    } | Request IP: ${req.ip} | Request Time: ${new Date().toLocaleString()}`
  );
  next();
});

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World");
});

app.use("/user", userRoute);

app.use("/game", gameRoute);

connectDB().then((res) => {
  app.listen(config.server.port, () => {
    Logging.info(`Server is running on port ${config.server.port}`);
  });
  console.log(res);
});
