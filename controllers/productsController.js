const fs = require('fs');
const path = require('path');
const model = require('../models/productos.model');

const productsFilePath = path.join(__dirname, "../database/productsDataBase.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

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
    productCart: (req, res) => {
      res.render('productCart');
    },
    products: model.products,

    detail: model.detail,
  
    create: model.create,

    store: model.store,

    edit: model.edit,

    update: model.update,

    destroy: model.destroy
    /*
    productDetail: (req, res) => {
        res.render('productDetail');
    },*/
    
   
};

module.exports = controller;