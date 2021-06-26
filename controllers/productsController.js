const controlador = {
    index: (req, res) => {
        res.render('index');
    },
    productDetail: (req, res) => {
        res.render('productDetail');
    },
    productCart: (req, res) => {
        res.render('productCart');
    }
    
};

module.exports = controlador;