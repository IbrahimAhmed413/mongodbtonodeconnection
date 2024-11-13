const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.post('/create', async (req, res) => {
    try {
      const newUser = new User(req.body);
      await newUser.save();
      res.json({ success: true, data: newUser });
    } catch (err) {
      res.status(500).json({ success: false, message: err.message });
    }
  });
  module.exports = router; 