const multer = require("multer");
const express = require("express");
const { uploadImg } = require("../controllers/upload.controllers");

const router = express.Router();
const upload = multer({
  storage: multer.memoryStorage(),
});

router.route("/:id").post(upload.single("image"), uploadImg);

module.exports = router;
