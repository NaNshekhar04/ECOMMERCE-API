// FURTHER ROUTINGS WITH HANDLED CONTROLLERS ACTIONS 

const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');

// POST REQUEST FOR CREATING NEW PRODUCTS 

router.post('/create', productsController.createProduct);

// DELETE REQUEST FOR DELETING PRODUCT WITH SPECIFIC ID  

router.delete('/:id', productsController.deleteProduct);

// POST REQUEST FOR UPDATING PRODUCT WITH SPECIFIC ID 

router.post('/:id/updateQuantity/:num', productsController.updateProduct); 

module.exports = router;