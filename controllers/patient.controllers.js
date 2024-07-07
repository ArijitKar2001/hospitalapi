// Import modules
import Patient from "../models/patient.model.js";
import Report from "../models/report.model.js";
import { verifyToken } from "../utils/jwt.utils.js";

// Function to register patient
export const patientRegister = async (req, res) => {
  try {
    const { name, number } = req.body;
    let patient = await Patient.findOne({ number });
    if (patient) {
      return res.status(403).json({
        success: false,
        message: "Patient already exists",
        data: {
          patientId: patient._id,
          error: null,
        },
      });
    }
    patient = new Patient({ name, number });
    await patient.save();
    res.status(201).json({
      success: true,
      message: "Registration successfull",
      data: {
        patientId: patient._id,
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

// Function to create report
export const createReport = async (req, res) => {
  try {
    const patientId = req.params.id;
    if (patientId) {
      const patient = await Patient.findById({ _id: req.params.id });
      if (!patient) {
        return res.status(404).json({
          success: false,
          message: "Patient does not exist, please register the patient first",
          data: null,
        });
      }
      const token = req.headers["authorization"];
      const doctor = verifyToken(token);
      const doctorId = doctor.data.decoded.id;
      const report = new Report({
        doctor: doctorId,
        patient: patientId,
        status: req.body.status,
        date: new Date(),
      });
      patient.reports.push(report);
      await patient.save();
      await report.save();
      return res.status(201).json({
        success: true,
        message: "Report created successfully",
        data: report._id,
      });
    }
    res.json({ success: false, message: "Could not fine patient", data: null });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong in report creation",
      data: null,
    });
  }
};

// Functiom to get all the report of a patient
export const getAllReports = async (req, res) => {
  try {
    const patientId = req.params.id;
    let reports = await Report.find({ patient: patientId })
      .populate("doctor", "name")
      .populate("patient", "name");
    if (!reports) {
      return res.status(200).json({
        success: true,
        message: "No report found",
        data: null,
      });
    }
    res.status(200).json({
      success: true,
      message: "All reports fetched successfully",
      data: { reports },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong in getting reports ",
      data: null,
    });
  }
};
