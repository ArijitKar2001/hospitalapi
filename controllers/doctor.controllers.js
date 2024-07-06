// Import module
import Doctor from "../models/doctor.model.js";
import { generateToken } from "../utils/jwt.utils.js";
import { hashPassword } from "../utils/password.utils.js";

// Function to register doctor
export const doctorRegister = async (req, res) => {
  try {
    const { name, username, password } = req.body;
    if (name && username && password) {
      let doctor = await Doctor.findOne({ username });
      if (doctor) {
        return res.json({
          success: false,
          message: "User already exists",
          data: {
            user: doctor,
            error: null,
          },
        });
      }
      const hashedPass = await hashPassword(password);
      doctor = new Doctor({ name, username, hashedPass });
      await doctor.save();
      res.json({
        success: true,
        message: "Registration successfull",
        data: {
          user: doctor,
          error: null,
        },
      });
    } else {
      return res.json({
        success: false,
        message: "Provide all the details",
        data: null,
      });
    }
  } catch (error) {
    res.json({
      success: false,
      message: "Something went wrong in registration",
      data: {
        data: null,
        error: error,
      },
    });
  }
};

// Function to login doctor
export const doctorLogin = async (req, res) => {
  try {
    const { username, password } = req.body;
    if (username && password) {
      let doctor = await Doctor.findOne({ username });
      if (!doctor) {
        return res.json({
          success: false,
          message: "User not found, please register first",
          data: null,
        });
      }
      const isValid = await comparePassword(password, doctor.password);
      if (!isValid.data.password) {
        return {
          success: false,
          message: "Wrong password",
          data: null,
        };
      }
    } else {
      return res.json({
        success: false,
        message: "Provide all the details",
        data: null,
      });
    }
  } catch (error) {
    return res.json({
      success: false,
      message: "Something went wrong in login",
      data: {
        data: null,
        error: error,
      },
    });
  }
};
