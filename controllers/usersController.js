const { validationResult } = require('express-validator');
const bcryptjs = require('bcrypt');
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
  loginProcess: (req, res) => {
    
    db.Users.findOne({
          where:{
              email: req.body.email 
          }
      }).then((userToLogin) => { 
          console.log(userToLogin);
          if (userToLogin){
                console.log('Si paso el usuario a loguearse'+userToLogin);
                console.log(userToLogin.password);
                let isOkThepassword = bcryptjs.compareSync(req.body.password, userToLogin.password);
                console.log('campareSync ' + isOkThepassword);
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
        
              return res.render('login',
              console.log('no paso el usuario porque no se encontro el email del usuario'),
              {
                
                errors: {
                  email: {
                    msg: 'No se encuentra este email en nuestra base de datos'
                  }
                }
              });
        
          
      })
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
    console.log("Register");
  },
  store: async function (req, res) {
    // validacion backend middleware
    const resultValidation = validationResult(req);
    console.log("Paso de Register");
		if (resultValidation.errors.length > 0) {
			return res.render('register', {
				errors: resultValidation.mapped(),
				oldData: req.body
			});
		}

    // Verificar si un correo ya esta registrado en la base de datos
    let userInDB = await db.Users.findOne({
      where: { email: req.body.email }
    });
    // console.log(userInDB);
    if (userInDB) {
      console.log(userInDB);
      return res.render('register', {
        errors: {
          email: {
            msg: 'Intenta de nuevo'
          }
        },
        oldData: req.body
      });
    }
    else{
      // encriptar contraseña
      let password = bcryptjs.hashSync(req.body.password, 10);
      let userInfo = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: password,
        category: req.body.category,
        avatar: req.body.avatar
      };
      // crear nuevo usuario en la base de datos
      await db.Users.create(
        userInfo
      )
      res.redirect("/users/list");
    }
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
};

module.exports = controlador;
