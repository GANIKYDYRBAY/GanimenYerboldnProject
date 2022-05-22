/*const path = require ('path');
const express = require("express");
const router = express.Router();
router
    .route("/")
    .get((req, res) => res.render(path.resolve("./views/toys.ejs")))
module.exports = router;*/

const express = require('express')
const controller = require('../controller/controllerofProduct')
const router = express.Router();

router.get('/', controller.findAll);
router.post('/', controller.create);

module.exports = router;