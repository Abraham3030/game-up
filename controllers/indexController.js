const fs = require('fs');
const path = require('path');
const bcryptjs = require('bcrypt');

const productsFilePath = path.join(__dirname, "../database/productsDataBase.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
const usersFilePath = path.join(__dirname, "../database/usersDataBase.json");
const users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));
const model = require('../models/users.model');

const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
    index: (req, res) => {
        const playstation = products.filter((product)=>{
			return product.category === 'playstation';
		});
		const nintendoswitch = products.filter((product)=>{
			return product.category === 'switch';
		});
		res.render('index', {playstation, nintendoswitch});
    },
    search: (req, res) => {
      const {keywords} = req.query;
      const resultados = products.filter(({description, name})=>{
        return description.includes(keywords) || name.includes(keywords);
        });
      res.render('results', {resultados, keywords, user: req.session.userLogged});
    },
    playstation: (req, res) => {
      const playstation = products.filter((product)=>{
        return product.category === 'playstation';
      });
      res.render('playstation', {playstation});
    },
    nintendoswitch: (req, res) => {
      const nintendoswitch = products.filter((product)=>{
        return product.category === 'switch';
      });
      res.render('nintendoswitch', {nintendoswitch});
    },
    // Vista cart
    Cart: (req, res) => {
        res.render('productCart');
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
    profile: (req, res) => {
      //console.log('Estas en Profile');
      //console.log(req.session);
      console.log(req.cookies.userEmail);
      return res.render('profile', {
        user: req.session.userLogged
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
}

module.exports = controller;