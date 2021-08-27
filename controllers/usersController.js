const fs = require('fs');
const path = require('path');
const bcryptjs = require('bcrypt');
const model = require('../models/users.model');
const usersFilePath = path.join(__dirname, "../database/usersDataBase.json");
//const users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));


let db = require("../database/models");

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
  async loginProcess: (req, res) => {
    let userToLogin = model.findByField('email', req.body.email);
    //let userToLogin = db.Users.findAll({where: {email: req.body.email}});
    let userToLogin = await db.Users.findByField({})
    
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
      db.Users.findAll({
        where: {first_name:{
          [db.Sequelize.Op.like]: "%" + req.query.keywords + "%"// Colocando una concatenacion funciono la busqueda de cualquier producto
        }}
      })
          .then(resultadosUsuario => {
              res.render('userResult', {resultadosUsuario, keywords});
          });
  },

  //// nuevo
  create: function (req, res) {
    res.render("register");
  },
  store: async function (req, res) {
    
    console.log(req.body);
     await db.Users.create(
         {
           first_name: req.body.first_name,
           last_name: req.body.last_name,
           email: req.body.email,
           password: bcryptjs.hashSync(req.body.password, 10),
           category: req.body.category,
           avatar: req.body.avatar

         }
     )
    res.redirect("/users/list")
  },
  edit: async function(req, res) {
    const userToEdit = await db.Users.findByPk(req.params.id);

    res.render('registerEdit', {userToEdit});
  },
  update: async function (req,res) {
    await db.Users.update(
      req.body,
      {
        where:{
          id: req.params.id
        }
    });

    res.redirect('/users/list');
  },
  destroy: async function (req, res) {
    await db.Users.destroy({
        where: {id: req.params.id}
    })
    res.redirect('/users/list');
  },
  list: function(req, res) {
    db.Users.findAll()
        .then(function(users){
            res.render('usersList', {users})
        });
  },
  userProfile: function(req,res) {
    db.Users.findByPk(req.params.id)
        .then(function(user){
            res.render("userProfile", {user})
        })
  }
  
  // // users.model.js
  // userProfile: model.userProfile,
  
  // list: model.list,
  // // proceso de registro
	// create: model.createUser,

  // store: model.storeUser,

  // edit: model.editUser,

  // update: model.updateUser,

  // destroy: model.destroyUser  
};

module.exports = controlador;
