// Import module
import express from "express";
import cors from "cors";
import connectDB from "./configs/dbconnection.js";
import doctorRoutes from "./routes/doctor.routes.js";
import patientRoutes from "./routes/patient.routes.js";
import reportRoutes from "./routes/report.routes.js";

// Initialized app using express
const app = express();

// Initialized PORT
const PORT = 3000;

// Middlewares
app.use(express.json());
app.use(cors());

// Connect database
connectDB();

// Routes
app.use("/api/doctor", doctorRoutes);
app.use("/api/patient", patientRoutes);
app.use("/api/reports", reportRoutes);
app.use("/", (req, res) => {
  res.status(200).json({
    Registration: {
      "Doctor Registration [POST]": "/api/doctor/register",
      "Patient Registration [POST]": "/api/patient/register",
    },
    Login: {
      "Doctor Login [POST]": "/api/doctor/login",
    },
    Report: {
      "Create report of a specific patient" : "/api/patient/:id/create_report",
      "Get all reports of a patient [GET]": "/api/patient/:id/all_reports",
      "Get all reports by status [GET}": "/api/reports/:status",
    },
  });
});

// Listening on PORT
app.listen(PORT, () => {
  console.log("Server is listening on port :", PORT);
});
