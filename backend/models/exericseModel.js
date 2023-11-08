//Require mongoose
const mongoose = require("mongoose");

//Create schema contains a single field named 'name.'
//The 'name' field is of type String
const ExerciseSchema = new mongoose.Schema({
  name: String,
  description: String, // Add a 'description' field of type String
  difficulty: String, // Add a 'completed' field of type Boolean
  sets: Number,
  repetition: Number,
});

//Export the Mongoose model with the collection name "Todo"
module.exports = mongoose.model("Exercise", ExerciseSchema);
