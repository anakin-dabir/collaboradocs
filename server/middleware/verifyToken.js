import jwt from "jsonwebtoken";

const verifyToken = async (req, res, next) => {
  // const token = req.cookies.jwt_token;
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Unauthorized: No token provided" });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || "token:secret");
    console.log(decoded);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Unauthorized Request" });
  }
};

export default verifyToken;
