const express = require("express");
const { environment } = require("./config/environment");

const app = express();

app.get("/hello-world", (req, res) => {
  res.send("Hello World!");
});

const port = environment.port;

app.listen(port, () => {
  console.log(`Mememorize app listening on port ${port}`);
});
