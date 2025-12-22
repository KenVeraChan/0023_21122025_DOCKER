const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('¡Hola, mundo!, ¡bienvenido a mi servidor Express!'));
app.listen(3000, () => console.log('Servidor escuchando en el puerto 3000'));