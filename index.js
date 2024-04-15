const express = require("express");
const { environment } = require("./config/environment");
const cors = require("cors");
const connectDB = require("./config/db");
const logger = require("morgan");
const memeRouter = require("./routes/memes.route");
const snsRouter = require("./routes/sns.route");

connectDB();
const app = express();
app.use(cors());
app.use(express.json());
app.use(logger("dev"));

app.get("/hello-world", (req, res) => {
  res.send("Hello World!");
});

app.use("/memes", memeRouter);
app.use("/sns", snsRouter);

const port = environment.port;
app.listen(port, () => {
  console.log(`Mememorize app listening on port ${port}`);
});
