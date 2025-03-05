const express = require('express');
const { getAllProducts, getFeaturedProducts } = require('../Controller/Products/getProduct');

const router = express.Router()

// Getting All Products 
router.get('/', getAllProducts)
// Getting Featured Products
router.get('/featured', getFeaturedProducts)

module.exports = router