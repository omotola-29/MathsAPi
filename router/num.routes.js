const express = require("express");
const { numberHandler } = require("../handler/num.handler");

const router = express.Router();

// Number properties endpoint
router.get("/:num", numberHandler);

module.exports = router;
