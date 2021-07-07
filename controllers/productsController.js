const fs = require('fs');
const path = require('path');
//const productosModel = require('../models/productos.model');

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
    products: (req, res) => {
        res.render("products", { products });
    },
    detail: (req, res) => {
        let productId = req.params.id;
        console.log(productId);
        const product = products.find((producto) => {
          return producto.id == productId;
        });
        console.log(product);
        if (product) {
          res.render("productDetail", { product });
        } else {
          res.render("error");
        }
    },
    create: (req, res) => {
        res.render('product-create-form');
    },
    store: (req, res) => {
        // Do the magic
        const productInfo = req.body;
        products.push({
          ...productInfo,
          id: products.length + 1,
          image: "new-product.jpg",
        });
        fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2));
        res.redirect("/products");
    },
    edit: (req, res) => {
        const productToEdit = products.find((product) => {
          return product.id == req.params.id;      
        });
        
        if (productToEdit) {
          res.render("product-edit-form", { productToEdit });
        } else {
          res.render("error");
        }
    },
    update: (req, res) => {
        const productInfo = req.body;
        const productIdex = products.findIndex(producto =>{
          return producto.id == req.params.id;
        });
    
        products[productIdex]={...products[productIdex], ...productInfo};
    
        fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2));
        res.redirect("/");
    },
    destroy: (req, res) => {
    
        const productIdex = products.findIndex(producto =>{
          return producto.id == req.params.id;
        });
    
        products.splice(productIdex, 1);
        
        fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2));
        res.redirect("/products");
        // Do the magic
    }





    /*
    productDetail: (req, res) => {
        res.render('productDetail');
    },
    productCart: (req, res) => {
        res.render('productCart');
    },**/

};

module.exports = controller;