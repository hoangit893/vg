import { Request, Response, NextFunction } from "express";

const jwt = require("jsonwebtoken");
const { config } = require("../configs/config");

export const auth = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (req.headers.authorization !== undefined) {
      const token = req.headers.authorization.split(" ")[1];
      console.log(token);
      const decoded = await jwt.verify(token, config.jwt.secret);
      console.log(decoded);
      req.body.username = decoded.username;
      next();
    } else {
      console.log("x");
      res.status(401).send("Unauthorized");
    }
  } catch (error) {
    console.log(error);
    res.status(401).send("Unauthorized");
  }
};
