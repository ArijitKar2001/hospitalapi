// Import modules
import { verifyToken } from "../utils/jwt.utils.js";

// Function of register credential validation
export const isValidRegCred = async (req, res, next) => {
  if (!req.body.username || !req.body.password || !req.body.name) {
    return res.status(401).json({
      success: false,
      message: "Provide the credentials",
      data: null,
    });
  }
  next();
};

// Function for login credential validation
export const isValidLoginCred = async (req, res, next) => {
  if (!req.body.username || !req.body.password) {
    return res.status(401).json({
      success: false,
      message: "Provide the credentials",
      data: null,
    });
  }
  next();
};

// Function for login validation
export const isLogin = (req, res, next) => {
  const token = req.headers["authorization"];
  if (!token) {
    return res.status(401).json({
      success: false,
      message: "You are not logged in, please log in",
      data: null,
    });
  }
  const valid = verifyToken(token);
  if (!valid.success) {
    return res.status(401).json({
      success: false,
      message: "Invalid login",
      data: null,
    });
  }
  next();
};
