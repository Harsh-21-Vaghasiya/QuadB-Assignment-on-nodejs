const express = require('express');
const router = express.Router();
const { getAllData } = require("../controllers/products");




router.route("/").get(getAllData);
module.exports = router; 
