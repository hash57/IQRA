const express = require('express');
const router = express.Router();

const usersRoutes = require('./usersRoutes');
const authRoutes = require('./authRoutes');

router.use('/users', usersRoutes);
router.use('/auth', authRoutes);

module.exports = router;