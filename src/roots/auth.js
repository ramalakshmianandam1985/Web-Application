const express = require('express');
const UserManager = require('../models/UserManager');
const UserDatabase = require('../models/UserDatabase');
const router = express.Router();
 
const userManager = new UserManager();
const userDatabase = new UserDatabase();
 
router.post('/register', async (req, res) => {
  const { username, password } = req.body;
  const user = userManager.createUser(username, password);
  await userDatabase.saveUser(user);
  res.status(201).json({ message: 'User registered successfully' });
});
 
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = userManager.loginUser(username, password);
  if (user) {
    res.json({ message: 'Login successful' });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});
 
router.post('/change-password', async (req, res) => {
  const { username, newPassword } = req.body;
  const user = userManager.changePassword(username, newPassword);
  if (user) {
    res.json({ message: 'Password changed successfully' });
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});
 
router.get('/dashboard', (req, res) => {
  if (userManager.currentUser) {
    res.sendFile('views/dashboard.html', { root: __dirname + '/../' });
  } else {
    res.status(401).json({ message: 'Please login to access this page' });
  }
});
 
module.exports = router;