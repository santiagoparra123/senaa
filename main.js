const express = require('express');
const path = require('path')
const app = express();



app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, "Login.html"));
});

app.get('/user', function (req, res) {
    res.sendFile(path.join(__dirname, "bienvenido.html"));
});
app.get('/datos', function (req, res) {
    res.sendFile(path.join(__dirname, "datos.html"));
});


 const  puerto = 3000
console.log(`Servidor corriendo en el puerto ${puerto}`);
app.listen(puerto);
