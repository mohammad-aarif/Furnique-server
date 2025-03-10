const express = require('express');
const { getCatagories } = require('../Controller/Categories/getCategories');

const Router = express.Router()
Router.get('/', getCatagories)

module.exports = Router