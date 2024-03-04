import { create } from "domain";
import express, { Request, Response } from "express";
import { createUserService, loginUserService } from "../services/userService";

const userRoute = express.Router();

userRoute.get("/", (req: Request, res: Response) => {
  res.send("Hello World");
});

// userRoute.get("/", (req: Request, res: Response) => {
//   res.send("Hello World");
// });

userRoute.post("/create", (req: Request, res: Response) =>
  createUserService(req, res)
);

userRoute.post("/login", (req: Request, res: Response) =>
  loginUserService(req, res)
);

export default userRoute;
