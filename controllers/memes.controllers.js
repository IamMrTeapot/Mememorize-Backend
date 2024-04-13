const Meme = require("../models/memes.model");

exports.getMemes = async (req, res, next) => {
  try {
    const Memes = await Meme.find();
    res.status(200).json({ success: true, data: Memes });
  } catch (error) {
    res.status(500).json({ success: false, message: error });
  }
};

exports.createMeme = async (req, res, next) => {
  let { name, url, description } = req.body;
  console.log(name, url, description);
  try {
    const Meme = await Meme.create({ name, url, description });
    res.status(201).json({ success: true, data: Meme });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error });
  }
};
