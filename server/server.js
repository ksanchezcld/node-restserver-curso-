require('./config/config');
path = require('path');

const express = require('express');
const mongoose = require('mongoose');

const app = express();
const bodyParser = require('body-parser');

//Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

//Parse application/Json
app.use(bodyParser.json())

//habilitar la carpeta public
app.use(express.static(path.resolve(__dirname, '../public')));
console.log(path.resolve(__dirname, '../public'));

//Configuracion Global de rutas
app.use(require('./routes/index'));

mongoose.connect(process.env.URLDB, (err, res) => {
    if (err) throw err;

    console.log('Base de datos ONLINE');
})

app.listen(process.env.PORT, () => {
    console.log(`Escuchando en el puerto`, process.env.PORT);
})