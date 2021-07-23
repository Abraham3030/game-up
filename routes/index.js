// Configuracion express
const express = require('express');
const router = express.Router();

// Configuracion controller productsController
const indexController = require('../controllers/indexController');

// /* CRUD de productos */
// Pagina Principal
router.get('/', indexController.index);

// Buscar producto
router.get('/search', indexController.search);

// Vista PlayStation
router.get('/playstation', indexController.playstation);
// Vista Nintendo Switch
router.get('/nintendo-switch', indexController.nintendoswitch);

// Vista product Cart
router.get('/products/cart', indexController.Cart);

// Iniciar sesion de usuario
router.get('/users/login', indexController.login);

// Otros
// Buscar usuario
router.get('/users/search', indexController.searchUser);
///searchUser


/**
 * Voy a dejar de este lado el login ya que no se porque, cuando le agrego el /users/login no lo toma
 * como valido y aca sí.
 */


module.exports = router;