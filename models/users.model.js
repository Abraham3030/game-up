/**
 * {
 * "id": 1, // number
 * "first-name": "Abraham", // string
 * "last-name": "Montelongo Campos", // string
 * "email": "algo@hotmail.com", // email
 * "password": "algo1234", //password
 * "category": "user", // string
 * "avatar": "user-default.jpg" // file
 * }
 */
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');
const fs = require('fs');
const path = require('path');
const usersFilePath = path.join(__dirname, "../database/usersDataBase.json");
const users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));

const model = {
	// Lista de usuarios
	list: (req, res) => {
		res.render('usersList', {users});
	},
	// Perfil usuario
	userProfile: (req,res) => {
		let userId = req.params.id;
		console.log(userId);
		const user = users.find((usuario) => {
		  return usuario.id == userId;
		});
		console.log(user);
		if (user) {
		res.render("userProfile", { user });
		} else {
		  res.render("error");
		} 
	},
	// Vista crear usuario
	createUser: (req, res) => {
	res.render('register');
	},


	// Opciones para verifica que ya existe un correo
	findByField: function (field, text) {
		let allUsers = this.findAll();
		let userFound = allUsers.find(oneUser => oneUser[field] === text);
		return userFound;
	},
	findAll: function () {
		return this.getData();
	},
	fileName: './database/usersDataBase.json',

	getData: function () {
		return JSON.parse(fs.readFileSync(this.fileName, 'utf-8'));
	},
	// Accion vista crear usuario
	storeUser: (req, res) => {
		// Validacion formulario register
		const resultValidation = validationResult(req);

		if (resultValidation.errors.length > 0) {
			return res.render('register', {
				errors: resultValidation.mapped(),
				oldData: req.body
			});
		}
		/**
		 * Validacion para verificar que no este registrado el mismo correo,
		 * solo funciona cuando mandas el formulario completo y con un email identico 
		 * registrado en la BD, arroja una advertencia 'Este email ya está registrado'. 
		 * Si se intenta solo verificar que el email esta duplicado no funciona.
		 */ 
		let userInDB = model.findByField('email', req.body.email);

		if (userInDB) {
			return res.render('register', {
				errors: {
					email: {
						msg: 'Este email ya está registrado'
					}
				},
				oldData: req.body
			});
		}

		// Crear usuario
	  	const userInfo = req.body;
	  	users.push({
			id: users.length + 1,
			...userInfo,
			password: bcryptjs.hashSync(req.body.password, 10),
			avatar: req.file.filename
	  	});
	  	fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));
		res.redirect('/users/list');
	},
	// Vista: registerEdit. Editar usuario / Obtener informacion del usuario a editar
	editUser: (req, res) => {
		const userToEdit = users.find((user) => {
			return user.id == req.params.id;      
		});  
		if (userToEdit) {
			res.render("registerEdit", { userToEdit });
		} else {
			res.render("error");
		}
	},
	// Accion vista: registerEdit. editar usuario
	updateUser: (req, res) => {
		const userInfo = req.body;
        const userIdex = users.findIndex(usuario =>{
          	return usuario.id == req.params.id;
        });
		
		// if(!req.file.filename){
			//users[userIdex]={...users[userIdex], ...userInfo, avatar: req.file.filename};	
			users[userIdex]={...users[userIdex], ...userInfo};	
		// }else {
			// users[userIdex]={...users[userIdex], ...userInfo};
		// }
        
    
        fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));
        res.redirect("/users/list");
	},
	// Accion vista: registerEdit. eliminar usuario
	destroyUser: (req, res) => {
		const userIdex = users.findIndex(usuario =>{
			return usuario.id == req.params.id;
		});
	  
		users.splice(userIdex, 1);
		  
		fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));
		res.redirect("/users/list");
	}

};
  
module.exports = model;