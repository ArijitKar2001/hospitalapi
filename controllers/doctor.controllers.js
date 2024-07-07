// Import modules
import Doctor from "../models/doctor.model.js";
import { generateToken } from "../utils/jwt.utils.js";
import { comparePassword, hashPassword } from "../utils/password.utils.js";

// Function to register doctor
export const doctorRegister = async (req, res) => {
  try {
    const { name, username, password } = req.body;

    let doctor = await Doctor.findOne({ username });
    if (doctor) {
      return res.status(403).json({
        success: false,
        message: "Doctor already exists",
        data: {
          user: doctor._id,
          error: null,
        },
      });
    }
    const hash = await hashPassword(password);
    doctor = new Doctor({ name, username, password: hash.data.hashPass });
    await doctor.save();
    res.status(201).json({
      success: true,
      message: "Registration successfull",
      data: {
        doctorId: doctor._id,
        error: null,
      },
    });
  } catch (error) {
    res.status(500).json({
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
    let doctor = await Doctor.findOne({ username });
    if (!doctor) {
      return res.status(404).json({
        success: false,
        message: "Doctor not found, please register first",
        data: null,
      });
    }
    const isValid = await comparePassword(password, doctor.password);
    if (!isValid.success) {
      return res.status(401).json({
        success: false,
        message: "Wrong password",
        data: null,
      });
    }
    const id = doctor._id;
    const token = generateToken({ id });
    res.status(200).json({
      success: true,
      message: "Login successfull",
      data: {
        token: token.data.token,
        error: null,
      },
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong in login",
      data: {
        data: null,
        error: error,
      },
    });
  }
};
