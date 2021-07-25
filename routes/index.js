// Configuracion express
const express = require('express');
const router = express.Router();

// Configuracion controller productsController
const indexController = require('../controllers/indexController');
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');

// /* CRUD de productos */
// Pagina Principal
router.get('/', indexController.index);

// Buscar producto
router.get('/search', indexController.search);

// Vista PlayStation
router.get('/playstation', indexController.playstation);
// Vista Nintendo Switch
router.get('/nintendo-switch', indexController.nintendoswitch);


/**
 * Voy a dejar de este lado el login ya que no se porque, cuando le agrego el /users/login no lo toma
 * como valido y aca sí.
 * Tambien las demas rutas no las jalan donde deben de ir asi que aca las dejo.
 */

// Vista product Cart
router.get('/products/cart', authMiddleware, indexController.Cart);

// Iniciar sesion de usuario
router.get('/users/login', guestMiddleware, indexController.login);
// Procesar informacion
router.post('/users/login', indexController.loginProcess);

// res.redirect user Profile
router.get('/users/userProfile', authMiddleware, indexController.profile);

// users Logout
router.get('/users/logout', indexController.logout);

// Otros
// Buscar usuario
router.get('/users/search', authMiddleware, indexController.searchUser);
///searchUser





module.exports = router;