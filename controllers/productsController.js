const fs = require('fs');
const productosModel = require('../models/productos.model');

const controlador = {
    
    index: (req, res) => {
        let productosFile = fs.readFileSync('./database/productos.json', 'utf8');
        let productos = JSON.parse(productosFile);
        res.render('index', {'productos': productos});
    },
    productDetail: (req, res) => {
        res.render('productDetail');
    },
    productCart: (req, res) => {
        res.render('productCart');
    },
    createProduct: (req,res) => {
        res.render('crearProducto');
    },

    createProduct2: (req,res) => {
        try{
            console.log(req.body);
        const producto = req.body;
        productosModel.create(producto)

        
        //res.redirect('crearProducto');
        res.render('crearProducto');
       //res.send(req.body);
        }catch(err){
            console.log(err);
        }
        


        
    }
    
};

module.exports = controlador;