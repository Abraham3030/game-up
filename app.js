const express = require('express');
const path    = require('path');
const app = express();
const PORT      = process.env.PORT || 3000;
const publicPath = path.resolve(__dirname, './public');
const rutasProductos = require('./routes/products');
const rutasUsuarios = require('./routes/users');
app.use( express.static( publicPath ));

//Configuracion de EJS
app.set('view engine', 'ejs');
app.set('views', ['./views/products/',
                  './views/users/']);

// app.get('/', (req,res) => {
//     res.sendFile(path.resolve(__dirname, './views/index.html'));
// });

// app.get('/', (req,res) => {
//     res.render('index');
// });

// app.post('/', (req,res) => {
//     res.sendFile(path.resolve(__dirname, './views/index.html'));
// });

// app.post('/', (req,res) => {
//     res.render('index');
// });

// app.get('/login', (req,res) => {
//     res.sendFile(path.resolve(__dirname, './views/login.html'));
// });

// app.get('/login', (req,res) => {
//     res.render('login');
// });

// app.get('/register', (req,res) => {
//     res.sendFile(path.resolve(__dirname, './views/register.html'));
// });

// app.get('/register', (req,res) => {
//     res.render('register');
// });

// app.get('/productCart', (req,res) => {
//     res.sendFile(path.resolve(__dirname, './views/productCart.html'));
// });

// app.get('/productCart', (req,res) => {
//     res.render('productCart');
// });

// app.post('/productCart', (req,res) => {
//     res.sendFile(path.resolve(__dirname, './views/productCart.html'));
// });

// app.post('/productCart', (req,res) => {
//     res.render('productCart');
// });

// app.get('/productDetail', (req,res) => {
//     res.sendFile(path.resolve(__dirname, './views/productDetail.html'));
// });

// app.get('/productDetail', (req,res) => {
//     res.render('productDetail');
// });

//Utilizacion de MVC
app.use('/', rutasProductos);
app.use('/', rutasUsuarios);

app.listen( PORT, () => {
    console.log('Servidor corriendo en el puerto: ', PORT);
});