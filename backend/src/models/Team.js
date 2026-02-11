import mongoose from "mongoose";

const teamSchema = new mongoose.Schema(
  {
    teamName: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },

    leaderName: {
      type: String,
      required: true
    },

    members: [
      {
        type: String
      }
    ],

    college: {
      type: String
    },

    email: {
      type: String
    },

    status: {
      type: String,
      enum: ["applied", "shortlisted", "rejected"],
      default: "applied"
    }
  },
  { timestamps: true }
);

export default mongoose.model("Team", teamSchema);
