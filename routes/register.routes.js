// Import modules
import express from "express";
import { doctorRegister } from "../controllers/doctor.controllers.js";

// Initialize register router
export const registerRoutes = express.Router();

registerRoutes.post("/doctor", doctorRegister);
