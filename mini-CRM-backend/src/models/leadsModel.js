import mongoose from "mongoose"

const leadSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    phone: String,
    company: String,
    status: {
      type: String,
      enum: ["NEW", "CONTACTED", "QUALIFIED", "PROPOSAL", "CLOSED", "LOST"],
      default: "NEW"
    },
    source: String,
    message: text
  },
  { timestamps: true }
);

export default mongoose.model("Lead", leadSchema);