const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usersController');

router.get('/login', usuariosController.login);
router.post('/register', usuariosController.register)
router.get('/register', usuariosController.register);

module.exports = router;