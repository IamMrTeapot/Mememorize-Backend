const mongoose = require("mongoose");

const MemeSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    maxlength: [50, "Name can not be more than 50 characters"],
  },
  url: {
    type: String,
    required: [true, "Please add a URL"],
  },
  description: {
    type: String,
    required: [true, "Please add a description"],
  },
});

module.exports = mongoose.model("Meme", MemeSchema);
