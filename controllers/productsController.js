const fs = require('fs');
const path = require('path');
const model = require('../models/productos.model');

const productsFilePath = path.join(__dirname, "../database/productsDataBase.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
  
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