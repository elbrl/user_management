import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  { name: String, mail: String, status: String, role: String },
  {
    timestamps: true,
  }
);

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
