const path = require("path");
const express = require("express");
const router = express.Router();
router
    .route("/")
    .get((req, res) => res.render(path.resolve('./views/index.ejs')))
module.exports = router;