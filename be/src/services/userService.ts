import { Request, Response } from "express";
import bcrypt from "bcrypt";
import User from "../models/userSchema";
import { config } from "../configs/config";
const jwt = require("jsonwebtoken");

const findByUsername = async (username: string) => {
  return User.findOne({ username: username });
};

const createUserService = async (req: Request, res: Response) => {
  const { name, username, email, password } = req.body;

  const userExists = await findByUsername(username);
  if (userExists) {
    res.status(400).send("Username already exists");
    return;
  }

  const user = new User({
    name,
    username,
    email,
    password: bcrypt.hashSync(password, config.saltRounds),
  });
  await user.save();
  const token = jwt.sign({ username: user.username }, config.jwt.secret);
  console.log(token);
  res.send("User Created");
};

const loginUserService = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  const user = await findByUsername(username);

  if (user == null || user == undefined) {
    res.status(400).send("Người dùng không tồn tại");
    return;
  } else {
    if (user.password !== null && user.password !== undefined) {
      const match = await bcrypt.compare(password, user.password);
      if (match) {
        const token = jwt.sign({ username: user.username }, config.jwt.secret);
        res.status(200).send(token);
      } else {
        res.status(400).send("Sai mật khẩu !");
      }
    }
  }
};

export { createUserService, loginUserService };
