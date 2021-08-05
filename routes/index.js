// Configuracion express
const express = require('express');
const router = express.Router();

// Configuracion controller productsController
const indexController = require('../controllers/indexController');

// Pagina Principal
router.get('/', indexController.index);

// Buscar producto
router.get('/search', indexController.search);

// Vista PlayStation
router.get('/playstation', indexController.playstation);
// Vista Nintendo Switch
router.get('/nintendo-switch', indexController.nintendoswitch);
// res.redirect user Profile
router.get('/users/userProfile', indexController.profile);

router.get('/prueba', (req,res) => {
    res.render('prueba');
})

module.exports = router;