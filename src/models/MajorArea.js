import mongoose from "mongoose";

const MajorAreaSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  campus: [{ type: mongoose.ObjectId, ref: "Campus" }],
});

MajorAreaSchema.virtual("lectures", {
  ref: "Lecture",
  localField: "_id",
  foreignField: "majorArea",
});

const MajorArea = mongoose.model("MajorArea", MajorAreaSchema);

export default MajorArea;
