//Import module
import express from "express";
import {
  isValidLoginCred,
  isValidRegCred,
} from "../middlewares/doctor.middlewares.js";
import {
  doctorLogin,
  doctorRegister,
} from "../controllers/doctor.controllers.js";

// Initialize doctor router
const doctorRoutes = express.Router();

// All routes
doctorRoutes.post("/register", isValidRegCred, doctorRegister);
doctorRoutes.post("/login", isValidLoginCred, doctorLogin);

// Export
export default doctorRoutes;
