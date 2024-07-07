// Import module
import express from "express";
import { isLogin } from "../middlewares/doctor.middlewares.js";
import { getFilteredReport } from "../controllers/report.controllers.js";

// Initialize report router
const reportRoutes = express.Router();

// All routes
reportRoutes.get("/:status", isLogin, getFilteredReport);

// Export
export default reportRoutes;
