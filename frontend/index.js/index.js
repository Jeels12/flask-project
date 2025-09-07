const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const axios = require("axios");

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Serve form page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "form.html"));
});

// Handle form submission
app.post("/submit", async (req, res) => {
  try {
    const { name, email } = req.body;
    const response = await axios.post("http://backend:5000/process", { name, email });
    res.send(`<h2>Response from Flask:</h2><p>${response.data.message}</p>`);
  } catch (err) {
    res.send("Error connecting to backend: " + err.message);
  }
});

app.listen(PORT, () => {
  console.log(`Frontend running on http://localhost:${PORT}`);
});
