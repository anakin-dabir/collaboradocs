import config from "../config/config.js";
import User from "../models/user.js";
import jwt from "jsonwebtoken";
import sendEmail from "../services/email.js";
import uploadFile from "../services/fileUpload.js";
import { generateToken } from "../middleware/verifyToken.js";

async function createUser(req, res) {
  const { name, email, password } = req.body;
  try {
    const user = new User({ name, email, password, isVerified: true });
    await user.save();
    const token = generateToken(user);
    res.cookie("jwt_token", token, { httpOnly: true });
    return res.status(200).json({ user, msg: "User created successfully" });
  } catch (err) {
    return res.status(500).json({ msg: "Internal server error" });
  }
}

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const userFound = await User.findOne({ email });
    if (!userFound) return res.status(404).json({ msg: "Please register first" });
    if (!userFound.isVerified)
      return res.status(401).json({ msg: "Please check your email for verification link" });
    if (password !== userFound.password)
      return res.status(401).json({ msg: "Incorrect password, Try again" });

    const token = generateToken(userFound);
    console.log(token);
    res.cookie("jwt_token", token, { httpOnly: true });
    return res
      .status(200)
      .json({ user: userFound, msg: `${userFound.email} logged in successfully` });
  } catch (err) {}
};

const register = async (req, res) => {
  const { email, name, password } = req.body;
  try {
    const userFound = await User.findOne({ email });
    if (userFound) return res.status(401).json({ msg: "User already exists" });
    const user = new User({ name, email, password });
    await user.save();
    const token = generateToken(user);
    sendEmail(
      email,
      "Collaboradocs: Activate your account",
      `Click on this <a href="${
        config.CLIENT || process.env.CLIENT || "http://localhost:5173"
      }/verify-email/${token}?token=${
        config.TOKEN
      }">link</a> to activate your collaboradocs account`
    );
    return res.status(200).json({ msg: "Check your email to activate your account" });
  } catch (err) {}
};

async function verify(req, res) {
  const { token: myToken } = req.body;
  try {
    const decoded = jwt.verify(myToken, config.TOKEN || process.env.TOKEN || "my-secret");
    const user = await User.findOne({ email: decoded.user.email });
    user.isVerified = true;
    await user.save();
    const token = generateToken(user);
    res.cookie("jwt_token", token, { httpOnly: true });
    return res.status(200).json({ user, msg: "Account activated & logged in" });
  } catch (error) {
    return res.status(500).json({ msg: "Account activation failed" });
  }
}

async function updateImage(req, res) {
  const img = uploadFile(req.files.file);
  try {
    await User.findOneAndUpdate({ _id: req.user._id }, { img });
    return res.status(200).json({ msg: "Image update successfully" });
  } catch (error) {
    return res.status(500).json({ msg: "My-error" });
  }
}

async function remove(req, res) {
  const _id = req.user._id;
  try {
    await User.deleteOne({ _id });
  } catch (error) {}
}

async function updateName(req, res) {
  const { name, img } = req.body;
  try {
    const user = await User.findOneAndUpdate(
      { _id: req.user._id },
      { name, img: img },
      { new: true, projection: { name: 1, img: 1, email: 1 } }
    );
    const token = generateToken(user);
    res.cookie("jwt_token", token);
    return res.status(200).json({ user, msg: "Name updated successfully" });
  } catch (error) {}
}

async function get(req, res) {
  try {
    const user = await User.findById(req.user._id);
    const token = generateToken(user);
    res.cookie("jwt_token", token);
    return res.status(200).json({ user: req.user, msg: "Success" });
  } catch (error) {}
}

async function search(req, res) {
  const { name } = req.body;
  try {
    const user = await User.find(
      {
        isVerified: true,
        name: { $regex: name, $options: "i" },
      },
      "name email img"
    );
    return res.status(200).json({ user, msg: "User founded" });
  } catch (error) {
    return res.status(500).json({ msg: "User not found" });
  }
}

export { login, register, createUser, verify, updateImage, remove, updateName, get, search };
