const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors({
  origin: "*"
}));

app.use(express.json());

app.get("/user/:username", (req, res) => {
  const username = req.params.username.toLowerCase();

  const user = {
    username,
    name: username.charAt(0).toUpperCase() + username.slice(1)
  };

  res.json(user);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
