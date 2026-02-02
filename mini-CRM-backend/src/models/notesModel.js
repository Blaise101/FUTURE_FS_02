import mongoose from "mongoose";

const noteSchema = new mongoose.Schema(
  {
    lead: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Lead",
      required: true
    },
    content: {
      type: String,
      required: true
    },
    author: {
      type: String,
      default: "Admin"
    }
  },
  { timestamps: true }
);

export default mongoose.model("Note", noteSchema);