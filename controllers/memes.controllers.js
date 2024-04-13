const Meme = require("../models/memes.model");

exports.getMemes = async (req, res, next) => {
  try {
    const memes = await Meme.find();
    res.status(200).json({ success: true, data: memes });
  } catch (error) {
    res.status(500).json({ success: false, message: error });
  }
};

exports.createMeme = async (req, res, next) => {
  let { name, url, description } = req.body;
  console.log(name, url, description);
  try {
    const newMeme = await Meme.create({ name, url, description });
    res.status(201).json({ success: true, data: newMeme });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error });
  }
};
