import express, { Request, Response } from "express";
import { auth } from "../middlewares/auth";
const gameRoute = express.Router();

gameRoute.get("/", auth, (req: Request, res: Response) => {
  res.send("Game Route");
});

export default gameRoute;
