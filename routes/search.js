const express = require("express");
const searchController = require("../controllers/search/searchController");
const { check } = require("express-validator");

const router = express.Router();

// Search
router.get(
  "/subData",
  [check("query", "query is Required").not().isEmpty()],
  searchController.subData
);

module.exports = router;
