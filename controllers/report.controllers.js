// Import modules
import Report from "../models/report.model.js";

// Function to get reports based on status
export const getFilteredReport = async (req, res) => {
  try {
    const status = req.params.status;
    const reports = await Report.find({ status })
      .populate("doctor", "name")
      .populate("patient", "name")
      .exec();
    if (!reports) {
      return res.status(200).json({
        success: true,
        message: "No data found",
        data: null,
      });
    }
    res.status(200).json({
      success: true,
      message: "Retrieved successfully",
      data: reports,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong in data fetching",
      data: null,
    });
  }
};
