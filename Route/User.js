const express = require('express');
const router = express.Router();

const postUser = require('../Controller/userController');

    router.post('/create', postUser );
  module.exports = router; 