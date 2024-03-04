import { Request, Response } from "express";
import bcrypt from "bcrypt";
import argon2 from "argon2";
import User from "../models/userSchema";
import { config } from "../configs/config";
import { ExpressValidator } from "express-validator";
const jwt = require("jsonwebtoken");

const findByUsername = async (username: string) => {
  return User.findOne({ username: username });
};

const validateInput = (req: Request) => {
  const error: any = {};

  let username = req.body.username?.trim();
  if (!username) {
    error["username"] = "Username is required";
  } else if (username.length < 6) {
    error["username"] = "Username must be at least 6 characters";
  } else if (username.split(" ").length > 1) {
    error["username"] = "Username must not contain spaces";
  }

  let name = req.body.name?.trim();
  if (!name) {
    error["name"] = "Name is required";
  } else if (name.length < 6) {
  }

  let email = req.body.email?.trim();
  if (!email) {
    error["email"] = "Email is required";
  }

  let password = req.body.password?.trim();
  if (!password) {
    error["password"] = "Password is required";
  } else if (password.length < 8) {
    error["password"] = "Password must be at least 8 characters";
  } else if (password.split(" ").length > 1) {
    error["password"] = "Password must not contain spaces";
  } else if (password.search(/[a-z]/) < 0) {
    error["password"] = "Password must contain at least 1 lowercase letter";
  } else if (password.search(/[A-Z]/) < 0) {
    error["password"] = "Password must contain at least 1 uppercase letter";
  } else if (password.search(/[0-9]/) < 0) {
    error["password"] = "Password must contain at least 1 number";
  } else if (password.search(/[!@#$%^&*]/) < 0) {
    error["password"] = "Password must contain at least 1 special character";
  }

  return error;
};

const createUserService = async (req: Request, res: Response) => {
  const error = validateInput(req);

  if (Object.keys(error).length > 0) {
    res.status(400).json(error);
    return;
  }

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
    password: await argon2.hash(password),
  });
  await user.save();
  const token = jwt.sign({ username: user.username }, config.jwt.secret);
  console.log(token);
  res.status(200).json({
    token: token,
    username: user.username?.trim(),
    message: "User created !!",
  });
};

const loginUserService = async (req: Request, res: Response) => {
  const error = validateInput(req);

  if (error.username || error.password) {
    res.status(400).json({
      message: "Wrong username or password",
    });
    return;
  }

  const { username, password } = req.body;
  const user = await findByUsername(username);

  if (user == null || user == undefined) {
    res.status(400).send("Người dùng không tồn tại");
    return;
  } else {
    if (user.password !== null && user.password !== undefined) {
      try {
        const match = await argon2.verify(user.password, password);
        if (match) {
          const token = jwt.sign(
            { username: user.username },
            config.jwt.secret
          );
          res.status(200).json({
            username: user.username,
            token: token,
          });
        } else {
          res.status(400).json({
            message: "Wrong username or password",
          });
        }
      } catch (error) {
        console.log(error);
        res.status(400).json({
          message: "Wrong username or password",
        });
      }
    }
  }
};

export { createUserService, loginUserService };
