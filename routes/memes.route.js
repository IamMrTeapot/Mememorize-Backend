const express = require("express");
const { getMemes, createMeme } = require("../controllers/memes.controllers");

const router = express.Router();

router.route("/").get(getMemes).post(createMeme);

module.exports = router;
