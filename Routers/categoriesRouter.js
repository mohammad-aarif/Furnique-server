const express = require('express');
const { getCatagories } = require('../Controller/Categories/getCategories');

const categoriesRouter = express.Router()
categoriesRouter.get('/', getCatagories)

module.exports = categoriesRouter