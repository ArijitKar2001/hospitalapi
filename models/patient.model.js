// Import module
import mongoose from "mongoose";

// Schema define
const patientSchema = new mongoose.Schema(
  {
    number: {
      type: Number,
      reqired: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    reports: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Report",
      },
    ],
  },
  {
    timestamps: true,
  }
);
// Model making and export
const Patient = mongoose.model("Patient", patientSchema);
export default Patient;
