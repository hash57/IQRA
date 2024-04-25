const express = require('express');
const router = express.Router();

const usersController = require('../controllers/usersController');

router.get('/', usersController.getUsers);
router.post('/addUser', usersController.addUser);

module.exports = router;