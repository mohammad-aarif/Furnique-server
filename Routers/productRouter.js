const express = require('express');
const { getAllProducts, getFeaturedProducts, getTotalProducts, getNewArriavalProducts } = require('../Controller/Products/getProduct');

const router = express.Router()

// Getting All Products 
router.get('/', getAllProducts)
// Getting All Products 
router.get('/count', getTotalProducts)
// Getting New Arrival Products
router.get('/new-arrival', getNewArriavalProducts)
// Getting Featured Products
router.get('/featured', getFeaturedProducts)

module.exports = router