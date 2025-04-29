
const express = require('express');
const router = express.Router();
const User = require('../models/userModel');

router.post('/save-user', async (req, res) => {
  const { name, email } = req.body;

  try {
    let user = await User.findOne({ email });
    if (!user) {
      user = await User.create({ name, email });
      return res.status(201).json({ message: 'User created', user });
    } else {
      return res.status(200).json({ message: 'User already exists', user });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;