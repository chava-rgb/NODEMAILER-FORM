//servidor//
const express = require('express');
const app = express();
//carpetas//
const path = require('path');
//comprender el formulario y enviar un objeto//
app.use(express.urlencoded({extended: false}));
//entender información de SPA (format json)//
app.use(express.json());
//importa el enrutador//
app.use(require('./routes/index'));

//carpeta pública para el servidor//
app.use(express.static(path.join(__dirname, 'public')));

//mensaje por consola cuando inicia el servidor//
app.listen(3000);
console.log('Server on port 3000')