const model = require('../models/productos.model');

const controller = {
   // Vista cart
   Cart: (req, res) => {
    res.render('productCart');
  },
  
  products: model.products,

  detail: model.detail,
    
  create: model.create,

  store: model.store,

  edit: model.edit,

  update: model.update,
    
  destroy: model.destroy  
};

module.exports = controller;