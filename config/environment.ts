const dotenv = require("dotenv");

dotenv.config();

exports.environment = {
  mongoUri: process.env.MONGO_URI || "mongodb://localhost:27017/mean-stack",
};
