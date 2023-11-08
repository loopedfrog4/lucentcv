import "bootstrap/dist/css/bootstrap.min.css";

import React, { useState } from "react";
import axios from "axios";

const Input = () => {

  const [exerciseData, setExerciseData] = useState({
    exerciseName: "",
    exerciseDescription: "",
    exerciseDifficulty: "",
    exerciseSets: 1,
    exerciseRepetition: 2,
  });

  const [apiResponse, setApiResponse] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExerciseData({
      ...exerciseData,
      [name]: value,
    });
  };

  const handleButtonClick = async () => {
    console.log(exerciseData);
    // Make an API request using axios or fetch here
    try {
      const response = await axios.post(
        "http://localhost:3000/api/exercise/create-exercise",
        exerciseData
      );
      setApiResponse(response.data);
    } catch (error) {
      console.error("API request failed:", error);
      // Handle error here
    }
  };

  return (
    <>
      <div class="form-floating mb-3">
        <input
          type="text"
          class="form-control"
          name="exerciseName"
          id="exerciseName"
          placeholder="Push ups"
          value={exerciseData.exerciseName}
          onChange={handleChange}
        />
        <label for="exerciseName">Exercise Name</label>
      </div>
      <div class="form-floating">
        <input
          type="text"
          class="form-control"
          name="exerciseDescription"
          id="exerciseDescription"
          placeholder="A chest exercise"
          value={exerciseData.exerciseDescription}
          onChange={handleChange}
        />
        <label for="exerciseDescription">Exercise Description</label>
      </div>
      <div class="form-floating">
        <input
          type="text"
          class="form-control"
          name="exerciseDifficulty"
          id="exerciseDifficulty"
          placeholder="Intermediate"
          value={exerciseData.exerciseDifficulty}
          onChange={handleChange}
        />
        <label for="exerciseDifficulty">Exercise Difficulty</label>
      </div>

      <div class="form-floating">
        <input
          type="number"
          class="form-control"
          name="exerciseSets"
          id="exerciseSets"
          placeholder="1"
          value={exerciseData.exerciseSets}
          onChange={handleChange}
        />
        <label for="exerciseSets">Number of Sets</label>
      </div>

      <div class="form-floating">
        <input
          type="number"
          class="form-control"
          name="exerciseRepetition"
          id="exerciseRepetition"
          placeholder="2"
          value={exerciseData.exerciseRepetition}
          onChange={handleChange}
        />
        <label for="exerciseRepetition">Number of Repetition</label>
      </div>

      <button onClick={handleButtonClick}>Call API</button>
    </>
  );
};

export default Input;
