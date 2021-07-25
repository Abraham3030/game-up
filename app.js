const express = require('express');
const session = require('express-session');
const cookie = require('cookie-parser');
const path    = require('path');
const app = express();
const PORT      = process.env.PORT || 3000;
const publicPath = path.resolve(__dirname, './public');

const rutasIndex = require('./routes/index');
const rutasProductos = require('./routes/products');
const rutasUsuarios = require('./routes/users');
const methodOverride = require('method-override');
const userLoggedMiddleware = require('./middlewares/userLoggedMiddleware');


// Configuracion sesion de usuario.
app.use(session({
    secret: "Shhh, It's a secret",
    resave: false,
    saveUninitialized: false,
}));

// Configuracion para recordar sesion de usuario en login
app.use(cookie());

// middelware de sesion
app.use(userLoggedMiddleware);

app.use(methodOverride('_method'));
app.use( express.static( publicPath ));

//Configuracion de EJS
app.set('view engine', 'ejs');
app.set('views', ['./views/index/', './views/products/', './views/users/']);
                  
// Configuracion para poder usar post
// primero debe ir esta configuracion del middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Despues las ruttas
//Utilizacion de MVC
app.use('/', rutasIndex);
app.use('/products', rutasProductos);
app.use('/users', rutasUsuarios);



//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({extended: false}));
app.listen( PORT, () => {
    console.log('Servidor corriendo en el puerto: ', PORT);
});

module.exports = app;