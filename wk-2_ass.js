require("dotenv").config();

const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT;

// Add JSON middle-ware
app.use(express.json());

// Adding my customize middle-ware
app.use((request, response, next) => {
  console.log(
    `Request Type: ${request.body}, URL: ${request.url} Request Time: ${new Date()}`,
  );
  next();
});

app.get("/", (request, response) => {
  response.send("My Week 2 API!");
});

// Accepting data from client site
app.post("/user", (request, response) => {
  const { name, email } = request.body;
  if (!name || !email) {
    return response.status(400).send("Enter full user info");
  }
  response.json({ userInfo: `Hello, ${name}! Mail: ${email}` });
});

// using params to accept user info
app.get("/user/:id", (request, response) => {
  const user_profile = request.params.id;
  response.send(user_profile);
});

// Serve static file
app.use(express.static(path.join(__dirname, "public")));

app.get("/static-file", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "wk-2_ass.html"));
});

app.listen(PORT, () => {
  console.log(
    `Week-2 assignment is hosted on http://localhost:${PORT} server!`,
  );
});
