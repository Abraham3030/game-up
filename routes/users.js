// Configuración express
const express = require('express');
const router = express.Router();

// Configuracion controlador usuario
const usersController = require('../controllers/usersController');

// Middlewares
const uploadFile = require('../middlewares/multerMiddleware');
const validations = require('../middlewares/validateRegisterMiddleware');
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');

// Configuracion de rutas
// 1. Listado de usuarios
// Ver todos los Usuarios
router.get('/list', authMiddleware, usersController.list);
// Fin listado de usuarios

// 2. Formulario de creación de usuario
// Crear Usuario/ Obtener información con fromulario
router.get('/register', guestMiddleware, usersController.create);
// 4.Procesar formulario de usuarios
router.post('/register', uploadFile.single('avatar'), validations, usersController.store);

// 3. Detalle de un producto particular
// Obtener un Usuario/ Detalle de usuario
router.get('/:id', authMiddleware, usersController.profile);
// Fin obtener un Usuario

/** Edicion de usuario pendiente */
// 5. Formulario de edición de productos
// Editar un producto
router.get('/:id/edit', authMiddleware, usersController.edit); 
// 6. Formulario de edición (a donde se envía el formulario)
router.put('/:id', authMiddleware, usersController.update); 
// Fin editar un producto

// 7 Acción de borrado
// Eliminar un producto
router.delete('/:id', authMiddleware, usersController.destroy);
// Fin eliminar un producto


module.exports = router;