// Import modules
import express from "express";
import {
  createReport,
  getAllReports,
  patientRegister,
} from "../controllers/patient.controllers.js";
import { isValidRegCred } from "../middlewares/patient.middlewares.js";
import { isLogin } from "../middlewares/doctor.middlewares.js";

// Initialize patient router
const patientRoutes = express.Router();

// All routes
patientRoutes.post("/register", isValidRegCred, isLogin, patientRegister);
patientRoutes.post("/:id/create_report", isLogin, createReport);
patientRoutes.get("/:id/all_reports", isLogin, getAllReports);

//Export
export default patientRoutes;
