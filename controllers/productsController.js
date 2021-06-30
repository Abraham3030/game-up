const fs = require('fs');

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
    }
    
};

module.exports = controlador;