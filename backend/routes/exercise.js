const express = require("express");

const { createExercise } = require("../controllers/exericseController");

const router = express.Router();

router.post("/create-exercise", createExercise);

module.exports = router;