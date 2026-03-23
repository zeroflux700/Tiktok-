const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/user/:username", (req, res) => {
  const username = req.params.username.toLowerCase();

  const user = {
    username,
    name: username.charAt(0).toUpperCase() + username.slice(1)
  };

  res.json(user);
});

// IMPORTANT: Use process.env.PORT
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
