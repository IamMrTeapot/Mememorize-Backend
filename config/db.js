const mongoose = require("mongoose");
const { environment } = require("./environment");

const connectDB = async () => {
  mongoose.set("strictQuery", true);
  const conn = await mongoose.connect(environment.mongoUri);

  console.log(`MongoDB Connected: ${conn.connection.host}`);
};

module.exports = connectDB;
