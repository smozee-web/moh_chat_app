const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  // try {
  //   const r = await axios.put(
  //     "https://api.chatengine.io/users/",
  //     { username: username, secret: username, first_name: username },
  //     { headers: { "private-key": "4d446e29-800b-4eba-95bb-f03c18146d6c" } }
  //   )
  //   return res.status(r.status).json(r.data);

  // } catch (e) {
  //   return res.status(e.response.status).json(e.response.data);

  // }

  try {
    const r = await axios.put(
      "https://api.chatengine.io/users/",
      { username: username, secret: username, first_name: username },
      { headers: { "Private-Key": "4d446e29-800b-4eba-95bb-f03c18146d6c" } }
    );
    return res.status(r.status).json(r.data);
  } catch (e) {
    return res.status(e.response.status).json(e.response.data);
  }
  // return res.json({ username: username, secret: "sha256..." });
});

app.listen(3001);