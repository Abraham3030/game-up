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

// Coniguracion de login y logout
// Iniciar sesion de usuario
router.get('/login', guestMiddleware, usersController.login);
// Procesar informacion
router.post('/login', usersController.loginProcess);

// users Logout
router.get('/logout', usersController.logout);
// Otros
// Buscar usuario
router.get('/search', authMiddleware, usersController.searchUser);
///searchUser



// CRUD usuarios
// 1. Listado de usuarios
// Ver todos los Usuarios
router.get('/list', authMiddleware, usersController.list);
// Fin listado de usuarios

// 2. Formulario de creación de usuario
// Crear Usuario/ Obtener información con fromulario
router.get('/register', guestMiddleware, usersController.create);
// 4.Procesar formulario de usuarios
router.post('/register', validations, usersController.store);

// 3. Detalle de un usuario particular
// Obtener un Usuario/ Detalle de usuario
router.get('/:id', authMiddleware, usersController.userProfile);
// Fin obtener un Usuario

/** Edicion de usuario pendiente */
// 5. Formulario de edición de productos
// Editar un usuario
router.get('/:id/edit', usersController.edit); 
// 6. Formulario de edición (a donde se envía el formulario)
router.put('/:id', uploadFile.single('avatar'), usersController.update); 
// Fin editar un usuario

// 7 Acción de usuario
// Eliminar un usuario
router.delete('/:id', authMiddleware, usersController.destroy);
// Fin eliminar un usuario


module.exports = router;