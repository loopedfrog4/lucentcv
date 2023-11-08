require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const exerciseRoutes = require("./routes/exercise");

//Execute express
const app = express();

//Middlewares
app.use(express.json());
app.use(cors());

// API Routes
app.use('/api/exercise', exerciseRoutes);

// DB
const connectionString = process.env.MONGO_URI;
mongoose
  .connect(connectionString)
  .then(() => console.log("Connected to the database…"))
  .catch((err) => console.error("Connection error:", err));

const port = 3000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
