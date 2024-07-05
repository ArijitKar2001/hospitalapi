// Import module
import bcrypt from "bcrypt";

// Function to hash password
export const hashPassword = async (password) => {
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    return {
      success: true,
      message: "Hash password has been generated",
      data: {
        hashPass: hashedPassword,
        error: null,
      },
    };
  } catch (error) {
    return {
      success: false,
      message: "Something went wrong in hashing",
      data: {
        hashPass: null,
        error: error,
      },
    };
  }
};

// Function to compare password
export const comparePassword = async (password, hashedPassword) => {
  try {
    const decoded = await bcrypt.compare(password, hashedPassword);
    if (decoded) {
      return {
        success: true,
        message: "Password matched",
        data: {
          password: decoded,
          error: null,
        },
      };
    } else {
      return {
        success: false,
        message: "Wrong Password",
        data: {
          password: null,
          error: null,
        },
      };
    }
  } catch (error) {
    return {
      success: false,
      message: "Something went wrong in comparing password",
      data: {
        password: null,
        error: error,
      },
    };
  }
};
