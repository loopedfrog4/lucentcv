const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000; // Choose a port of your choice

// Define a route
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.get("/example", (req, res) => {
  console.log("Pizza");
  res.send("Pizza's here");
});

app.use(cors())

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
