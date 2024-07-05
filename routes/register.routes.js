// Import modules
import express from "express";
import { doctorRegister } from "../controllers/doctor.controllers.js";

export const registerRoutes = express.Router();

registerRoutes.post("/doctor", doctorRegister);
