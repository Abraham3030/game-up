//const model = require('../models/productos.model');
// Requerimos en la variable db la base de datos que creamos con sequelize
let db = require("../database/models");

let productsController = {
   
  detail: function(req,res) {
    db.Products.findByPk(req.params.id)
        .then(function(product){
            res.render("productDetail", {product})
        })
  },
  create: function (req, res) {
    res.render("product-create-form");
  },
  store: async function (req, res) {
    await db.Products.create(
        req.body
    )
    res.redirect("/products")
  },
  edit: async function(req, res) {
    const productToEdit = await db.Products.findByPk(req.params.id);

    res.render('product-edit-form', {productToEdit});
  },
  update: async function (req,res) {
    await db.Products.update(
        req.body,
        {
            where:{
                id: req.params.id
            }
    });

    res.redirect('/products');
  },
  destroy: async function (req, res) {
    await db.Products.destroy({
        where: {id: req.params.id}
    })
    res.redirect('/products');
  },
  products: function(req, res) {
    db.Products.findAll()
        .then(function(products){
            res.render('products', {products})
        });
  },
  // Vista cart
  Cart: (req, res) => {
    res.render('productCart');
  }
  // products: model.products,

  // detail: model.detail,
    
  // create: model.create,

  // store: model.store,

  // edit: model.edit,

  // update: model.update,
    
  // destroy: model.destroy  
};

module.exports = productsController;