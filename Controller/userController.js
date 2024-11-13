const User = require('../models/user');
const postUser = async (req, res) => {
    try {
      const newUser = new User(req.body);
      await newUser.save();
      res.json({ success: true, data: newUser });
    } catch (err) {
      res.status(500).json({ success: false, message: err.message });
    }
  }
  module.exports = postUser;