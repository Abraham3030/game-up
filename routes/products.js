const express = require('express');
const router = express.Router();
const productosController = require('../controllers/productsController');

router.get('/', productosController.index);
router.post('/', productosController.index)
router.get('/productDetail', productosController.productDetail);
router.get('/productCart',productosController.productCart);
router.post('/productCart',productosController.productCart);
module.exports = router;