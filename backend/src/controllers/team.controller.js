import Team from "../models/Team.js";

// Get only shortlisted teams
export const getShortlistedTeams = async (req, res) => {
  try {
    const teams = await Team.find({ status: "shortlisted" });

    res.status(200).json({
      success: true,
      count: teams.length,
      teams
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// Add a new team
export const addTeam = async (req, res) => {
  try {
    const team = await Team.create(req.body);

    res.status(201).json({
      success: true,
      team
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

// Update team status
export const updateStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const team = await Team.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true, runValidators: true }
    );

    if (!team) {
      return res.status(404).json({
        success: false,
        message: "Team not found"
      });
    }

    res.status(200).json({
      success: true,
      team
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};
