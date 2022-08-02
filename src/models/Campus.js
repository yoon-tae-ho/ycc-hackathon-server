import mongoose from "mongoose";

const CampusSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
});

const Campus = mongoose.model("Campus", CampusSchema);

export default Campus;
