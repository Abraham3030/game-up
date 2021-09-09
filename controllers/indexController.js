// const fs = require('fs');
// const path = require('path');
// const productsFilePath = path.join(__dirname, "../database/productsDataBase.json");
// const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
let db = require("../database/models");

const controller = {

    index: (req, res) => {
      db.Products.findAll()
        .then(function(products){
            res.render('index', {products})
        });
    },
    search: (req, res) => {
      const {keywords} = req.query;
      db.Products.findAll({
        where: {name:{
          [db.Sequelize.Op.like]: "%" + req.query.keywords + "%"// Colocando una concatenacion funciono la busqueda de cualquier producto
        }}
      })
          .then(resultados => {
              res.render('results', {resultados, keywords, user: req.session.userLogged});
          });
    },
    playstation:  (req, res) => {
      db.Products.findAll({
          where: {
              brand: "PlayStation"
          }
      })
          .then(playstation => {
              res.render('playstation', {playstation});
          });
    },
    nintendoswitch:  (req, res) => {
      db.Products.findAll({
          where: {
              brand: "Switch"
          }
      })
          .then(nintendoswitch => {
              res.render('nintendoswitch', {nintendoswitch});
          });
    },
    profile: (req, res) => {
      //console.log('Estas en Profile');
      //console.log(req.session);
      console.log(req.cookies.userEmail);
      return res.render('profile', {
        user: req.session.userLogged
      });
    }
    // index: (req, res) => {
    //     const playstation = products.filter((product)=>{
		// 	return product.category === 'playstation';
		// });
		// const nintendoswitch = products.filter((product)=>{
		// 	return product.category === 'switch';
		// });
		// res.render('index', {playstation, nintendoswitch});
    // },
    // playstation: (req, res) => {
    //   const playstation = products.filter((product)=>{
    //     return product.category === 'playstation';
    //   });
    //   res.render('playstation', {playstation});
    // },
    // nintendoswitch: (req, res) => {
    //   const nintendoswitch = products.filter((product)=>{
    //     return product.category === 'switch';
    //   });
    //   res.render('nintendoswitch', {nintendoswitch});
    // },
    // search: (req, res) => {
    //   const {keywords} = req.query;
    //   const resultados = products.filter(({description, name})=>{
    //     return description.includes(keywords) || name.includes(keywords);
    //     });
    //   res.render('results', {resultados, keywords, user: req.session.userLogged});
    // },
    
}

module.exports = controller;