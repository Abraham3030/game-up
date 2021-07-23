// Configuracion express
const express = require('express');
const router = express.Router();

// Configuracion controller productsController
const productsController = require('../controllers/productsController');

/* CRUD de productos */
// Pagina Principal
router.get('/', productsController.index);
//router.post('/', productosController.index)

// 1. Listado de productos
// Ver todos los Productos
router.get('/products', productsController.products)
// Fin listado de productos

// 2. Formulario de creación de productos
// Crear Productos
router.get('/products/create', productsController.create); 
// 4. Accion de creación (a donde se envía el formulario) 
router.post('/products/create', productsController.store);
// Fin crear producto 

// 3. Detalle de un producto particular
// Obtener un producto
router.get('/products/:id', productsController.detail); 
// Fin obtener un producto

// 5. Formulario de edición de productos
// Editar un producto
router.get('/products/:id/edit', productsController.edit); 
// 6. Formulario de edición (a donde se envía el formulario)
router.put('/products/:id', productsController.update); 
// Fin editar un producto

// 7 Acción de borrado
// Eliminar un producto
router.delete('/products/:id', productsController.destroy);
// Fin eliminar un producto


// Otros
// Buscar producto
router.get('/search', productsController.search);
router.get('/productCart',productsController.productCart);
//router.post('/productCart',productosController.productCart);
router.get('/playstation', productsController.playstation);
router.get('/nintendo-switch', productsController.nintendoswitch);

module.exports = router;