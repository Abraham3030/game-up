const fs = require('fs');
const path = require('path');
const model = require('../models/users.model');
const usersFilePath = path.join(__dirname, "../database/usersDataBase.json");
const users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));

const controlador = {
  // Formulario de registro
  register: (req, res) => {
    // generar cookie de 30 min
    //res.cookie('testing', 'Hola mundo', {maxAge: 1000 *30});
    res.render('register');
  },
  
  // users.model.js
  profile: model.profile,
  
  list: model.list,
  // proceso de registro
	create: model.createUser,

  store: model.storeUser,

  edit: model.editUser,

  update: model.updateUser,

  destroy: model.destroyUser  
};

module.exports = controlador;
