const express = require("express");
const { publish, subscribe } = require("../controllers/sns.controllers");

const router = express.Router();

router.route("/").get(publish).post(subscribe);

module.exports = router;
