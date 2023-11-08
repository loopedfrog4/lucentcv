const mongoose = require("mongoose");
const Exercise = require("../models/exericseModel");

const createExercise = async (req, res) => {
  
  try {
    const {
      exerciseName,
      exerciseDescription,
      exerciseDifficulty,
      exerciseSets,
      exerciseRepetition,
    } = req.body;

    console.log(exerciseName);
    // Create a new exercise object using the Exercise model
    const exercise = new Exercise({
      exerciseName,
      exerciseDescription,
      exerciseDifficulty,
      exerciseSets,
      exerciseRepetition,
    });

    // Save the exercise to the database
    await exercise.save();

    // Respond with a success message or the created exercise
    res
      .status(201)
      .json({ message: "Exercise created successfully", exercise });
  } catch (err) {
    console.error("Error creating exercise:", err);
    res.status(500).json({ error: "Failed to create exercise" });
  }
};

module.exports = { createExercise };