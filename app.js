// Requires ## Importacion de librerias o personalizadas
var express = require('express');
var mongoose = require('mongoose');

// Inicializar variables
var app = express();

// Conexion a la BD | Mongo
mongoose.connection.openUri('mongodb://localhost:27017/hospitalDB', (err, res) => {
    if (err) throw err; // Detiene todo el proceso
    console.log('Base de datos, establecida la conexion: \x1b[32m%s\x1b[0m', 'online');
})

// Rutas
app.get('/', (req, res, next) => {

    res.status(200).json({
        ok: true,
        mensaje: 'Peticion realizada corectamente'
    })

});


// Escuchar peticones
app.listen(3000, () => {
    console.log('Express server en el puerto 3000: \x1b[32m%s\x1b[0m', 'online');
})