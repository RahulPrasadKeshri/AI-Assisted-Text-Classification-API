const express = require("express");
const router = express.Router();
const { classifyText } = require("../controllers/classifyController");

router.post("/", classifyText);

module.exports = router;
