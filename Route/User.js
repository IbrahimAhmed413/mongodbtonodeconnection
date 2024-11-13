const express = require('express');
const router = express.Router();
// const User = require('../models/user');
const postUser = require('../Controller/userController');

console.log(postUser);
router.post('/create', postUser );
  module.exports = router; 