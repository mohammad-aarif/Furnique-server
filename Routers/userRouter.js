const express = require('express');
const { getSingleUser } = require('../Controller/Users/getUsers');
const { newUser } = require('../Controller/Users/postUsers');

const router = express.Router()

router.post('/', newUser)
router.get('/user/:email', getSingleUser)

module.exports = router;