// Configuración express
const express = require('express');
const router = express.Router();

// Configuracion controlador usuario
const usersController = require('../controllers/usersController');

// Middlewares
const uploadFile = require('../middlewares/multerMiddleware');
const validations = require('../middlewares/validateRegisterMiddleware');

// Configuracion de rutas
// 1. Listado de usuarios
// Ver todos los Usuarios
router.get('/users/list', usersController.list);
// Fin listado de usuarios

// 2. Formulario de creación de usuario
// Crear Usuario/ Obtener información con fromulario
router.get('/users/register', usersController.create);
// 4.Procesar formulario de usuarios
router.post('/users/register', uploadFile.single('avatar'), usersController.store);

// 3. Detalle de un producto particular
// Obtener un Usuario/ Detalle de usuario
router.get('/users/:id', usersController.profile);
// Fin obtener un Usuario

// 5. Formulario de edición de productos
// Editar un producto
router.get('/users/:id/edit', usersController.edit); 
// 6. Formulario de edición (a donde se envía el formulario)
router.put('/:id', usersController.update); 
// Fin editar un producto

// 7 Acción de borrado
// Eliminar un producto
router.delete('/users/:id', usersController.destroy);
// Fin eliminar un producto

// Iniciar sesion de usuario
router.get('/login', usersController.login);

// Otros
// Buscar usuario
router.get('/users-Search', usersController.search);
///searchUser

module.exports = router;


/*
// Formulario de registro
router.get('/register', guestMiddleware, usersController.register);

// Procesar el registro
router.post('/register', uploadFile.single('avatar'), validations, usersController.processRegister);

// Formulario de login
router.get('/login', guestMiddleware, usersController.login);

// Procesar el login
router.post('/login', usersController.loginProcess);

// Perfil de Usuario
router.get('/profile/', authMiddleware, usersController.profile);

// Logout
router.get('/logout/', usersController.logout);

module.exports = router;
*/