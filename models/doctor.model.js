// Import modules
import mongoose from "mongoose";

// Schema define
const doctorSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
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
export const Doctor = mongoose.model("Doctor", doctorSchema);
