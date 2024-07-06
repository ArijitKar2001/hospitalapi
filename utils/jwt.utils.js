// Import module
import jwt from "jsonwebtoken";

// Function to generate token
export const generateToken = (data) => {
  try {
    const token = jwt.sign(data, "xr56ewui8", { expiresIn: "1d" });
    return {
      success: true,
      message: "Token has been generated",
      data: {
        token: token,
        error: null,
      },
    };
  } catch (error) {
    return {
      success: false,
      message: "Something went wrong while generating token",
      data: {
        token: null,
        error: error,
      },
    };
  }
};

// Function to verify token
export const verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, "xr56ewui8");
    console.log(decoded);
    return {
      success: true,
      message: "Verification successfull",
      data: {
        decoded: decoded,
        error: null,
      },
    };
  } catch (error) {
    return {
      success: false,
      message: "Verification unsuccessfull",
      data: {
        decoded: null,
        error: error,
      },
    };
  }
};
