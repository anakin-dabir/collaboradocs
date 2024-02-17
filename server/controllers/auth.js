import User from "../models/user.js";
import jwt from "jsonwebtoken";

const login = async (req, res) => {
  console.log(req.body);
  res.cookie("auth", { id: 123 }, { path: "/", httpOnly: true });
  return res.status(200).json({ msg: "Successfull" });
};

const register = () => {};

async function createUser(req, res) {
  const { name, email, password } = req.body;
  try {
    const user = new User({ name, email, password });
    await user.save();
    const token = jwt.sign({ user }, "my-secret");
    res.cookie("jwt_token", token);
    return res.status(200).json({ user, msg: "User created successfully" });
  } catch (err) {
    return res.status(500).json({ msg: "Internal server error" });
  }
}

export { login, register, createUser };
