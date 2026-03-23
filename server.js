const express = require("express");
const cors = require("cors");

const app = express();

// 🔥 IMPORTANT: dynamic port for Render
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get("/user/:username", (req, res) => {
  const username = req.params.username.toLowerCase();

  const user = {
    username,
    name: username.charAt(0).toUpperCase() + username.slice(1),
    avatar: `https://ui-avatars.com/api/?name=${username}`
  };

  res.json(user);
});

// 🔥 IMPORTANT: bind to all networks
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
