const express = require('express');
const { createProfile, getProfile } = require('../controllers/profileController');
const authenticateToken = require('../middleware/auth');
const router = express.Router();
router.post('/', authenticateToken, createProfile);
router.get('/', authenticateToken, getProfile);
module.exports = router;
