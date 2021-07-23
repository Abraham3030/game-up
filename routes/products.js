// Configuracion express
const express = require('express');
const router = express.Router();

// Configuracion controller productsController
const productsController = require('../controllers/productsController');

/* CRUD de productos */

// 1. Listado de productos
// Ver todos los Productos
router.get('/', productsController.products)
// Fin listado de productos

// 2. Formulario de creación de productos
// Crear Productos
router.get('/create', productsController.create); 
// 4. Accion de creación (a donde se envía el formulario) 
router.post('/create', productsController.store);
// Fin crear producto 

// 3. Detalle de un producto particular
// Obtener un producto
router.get('/:id', productsController.detail); 
// Fin obtener un producto

// 5. Formulario de edición de productos
// Editar un producto
router.get('/:id/edit', productsController.edit); 
// 6. Formulario de edición (a donde se envía el formulario)
router.put('/:id', productsController.update); 
// Fin editar un producto

// 7 Acción de borrado
// Eliminar un producto
router.delete('/:id', productsController.destroy);
// Fin eliminar un producto

module.exports = router;