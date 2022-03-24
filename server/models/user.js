import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: { type: String, required:  true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  id: { type: String },
  role: { type: String, default: "subscriber"},
  savedPosts: [{type: mongoose.Schema.Types.ObjectId, ref: 'PostMessage'}],
});

export default mongoose.model("User", userSchema);