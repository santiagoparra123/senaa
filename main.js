const express = require('express');
const colors = require('colors')
const app = express();
const mysql = require('mysql2');
// Configuración de la conexión a la base de datos
var conexioncita = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'santiago',
    database: 'jefe'
});

conexioncita.connect(error => {
    if (error) {
        console.error('Error al conectar a la base de datos:', error);
        process.exit(1);
    }
    console.log('Conectado a la base de datos'.green);
});
// ejs
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// rutas


app.get('/', function (req, res) {
    res.render("login");
});
app.get('/user', function (req, res) {
    res.render("bienvenido" ,{usuario});
});
app.get('/datos', function (req, res) {
    res.render("datos",{datosUsuario, fecha});
});
let datosUsuario
let fecha
// validar usuario y contraseña


app.post('/', function (req, res) {
    const datos = req.body;
    console.log(datos);

    let nombre = datos.nombre;
    let cedula = datos.contraseña;
    let validar = `SELECT * FROM usuarios WHERE nombre1 = '${nombre}' AND identificacion = '${cedula}'`;

    conexioncita.query(validar, function (error, results, fields) {
        if (error) {
            console.error('Error al validar usuario:', error);
            res.status(500).send('Error al iniciar sesión');
            return;
        }

        if (results.length === 1) {
            console.log("Bienvenido".blue);
            datosUsuario = results[0];
            res.render('bienvenido', { usuario: datosUsuario });
        } else {
            console.log("Contraseña incorrecta".red);
            res.redirect("/");
        }
    });
});

console.log(datosUsuario)
//desplegar el servidr
 const  puerto = 3000
console.log(`Servidor corriendo en el puerto ${puerto}`.green);
app.listen(puerto);
