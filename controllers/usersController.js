const fs = require('fs');
const path = require('path');
const bcryptjs = require('bcrypt');
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
  // Vista login
  login: (req, res) => {
    // Impresion de sesion
    //console.log(req.session);
    // Impresión de cookie
    //console.log(req.cookies.testing);
    res.render('login');
  },
  // Procesar informacion vista login
  loginProcess: (req, res) => {
    let userToLogin = model.findByField('email', req.body.email);
    
    if (userToLogin){
      let isOkThepassword = bcryptjs.compareSync(req.body.password, userToLogin.password);
      if(isOkThepassword) {
        delete userToLogin.password;
        req.session.userLogged = userToLogin;

        if(req.body.remember_user) {
          res.cookie('userEmail', req.body.email, {maxAge: (1000 *60)*2});
        }
        return res.redirect('/users/userProfile');
        //return res.send('Ok puedes ingresar')
      }
      return res.render('login',{
        errors: {
          email: {
            msg: 'Las credenciales son inválidas'
          }
        }
      });
    }

    return res.render('login',{
      errors: {
        email: {
          msg: 'No se encuentra este email en nuestra base de datos'
        }
      }
    });


  },
  
  logout: (req, res) => {
    res.clearCookie('userEmail');
    req.session.destroy();
    console.log(req.session);
    return res.redirect('/');
  },
  // Busqueda de usuario
  searchUser: (req, res) => {
      const {keywords} = req.query;
      const resultadosUsuario = users.filter(({email, last_name, first_name})=>{
          return email.includes(keywords) || last_name.includes(keywords) || first_name.includes(keywords);
      });
      res.render('userResult', {resultadosUsuario, keywords});
  },
  
  // users.model.js
  userProfile: model.userProfile,
  
  list: model.list,
  // proceso de registro
	create: model.createUser,

  store: model.storeUser,

  edit: model.editUser,

  update: model.updateUser,

  destroy: model.destroyUser  
};

module.exports = controlador;
