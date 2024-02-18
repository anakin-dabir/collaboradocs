import jwt from "jsonwebtoken";
import config from "../config/config.js";

const verifyToken = async (req, res, next) => {
  const token = req.cookies.jwt_token;
  // const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Unauthorized: No token provided" });
  }
  try {
    const decoded = jwt.verify(token, config.TOKEN || process.env.TOKEN || "my-secret");
    req.user = decoded.user;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Unauthorized Request" });
  }
};

export const generateToken = (user) => {
  const token = jwt.sign({ user }, config.TOKEN || process.env.TOKEN);
  return token;
};

export default verifyToken;
