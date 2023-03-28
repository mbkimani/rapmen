const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 3000;

app.use(cors());

const rapmen = {
  "mwas the rapper": {
    age: 23,
    birthName: "Paul Mwas",
    birthLocation: "Ruai",
  },
  kielekezo: {
    age: 32,
    birthName: "Kiele Makezo",
    birthLocation: "Cape  Town",
  },
  unknown: {
    age: 0,
    birthName: "unknown",
    birthLocation: "unknown",
  },
};
app.get("/", (request, response) => {
  response.sendFile(__dirname + "/index.html");
});

app.get("/api/:rapman", (req, res) => {
  const rapmister = req.params.rapman.toLocaleLowerCase();
  if (rapmen[rapmister]) {
    res.json(rapmen[rapmister]);
  } else {
    res.json(rapmen["unknown"]);
  }
});

app.listen(process.env.PORT || PORT);
