import express from "express";
import {
  getShortlistedTeams,
  addTeam,
  updateStatus
} from "../controllers/team.controller.js";

const router = express.Router();

// Get shortlisted teams
router.get("/shortlisted", getShortlistedTeams);

// Add new team
router.post("/", addTeam);

// Update status
router.put("/:id/status", updateStatus);

export default router;
