import express, { Request, Response } from "express";
import {
  createUserService,
  loginUserService,
  forgotPasswordService,
  resetPasswordService,
} from "../services/User.services";

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

userRoute.post("/forgotpassword", (req: Request, res: Response) =>
  forgotPasswordService(req, res)
);

userRoute.post("/resetpassword", (req: Request, res: Response) => {
  resetPasswordService(req, res);
});

export default userRoute;
