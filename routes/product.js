const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');

router.post('/create', productsController.createProduct);

router.delete('/:id', productsController.deleteProduct);

router.post('/:id/updateQuantity/:num', productsController.updateProduct); 

module.exports = router;