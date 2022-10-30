// ENTRY FILE FOR ALL OUR FURTHER ROUTES

const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');

// USING /products AS OUR START ROUTE 

router.use("/products", require('./product'));

// GET REQUEST TO GET ALL THE PRODUCT 

router.get("/products", productsController.eachProducts);

module.exports = router;