const express = require('express');
const { newUser } = require('../Controller/Users/postUsers');

const router = express.Router()

router.post('/', newUser)

module.exports = router;