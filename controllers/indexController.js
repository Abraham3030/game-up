const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, "../database/productsDataBase.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
const usersFilePath = path.join(__dirname, "../database/usersDataBase.json");
const users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));

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
      res.render('results', {resultados, keywords});
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
        res.render('login');
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