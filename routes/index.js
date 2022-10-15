const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');

router.use("/products", require('./product'));
router.get("/products", productsController.eachProducts);

module.exports = router;