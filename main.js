const express = require('express');
const colors = require('colors')
const app = express();
// ejs
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// rutas


app.get('/', function (req, res) {
    res.render("login");
});
app.get('/user', function (req, res) {
    res.render("bienvenido");
});
app.get('/datos', function (req, res) {
    res.render("datos");
});
 const  puerto = 3000
console.log(`Servidor corriendo en el puerto ${puerto}`.green);
app.listen(puerto);
