const express = require('express');
const {Pool} = require('pg');    // Importa el módulo 'pg' para PostgreSQL que significa "PostgreSQL" conexión a la base de datos

const app = express();
const pool = new Pool({          //Datos de conexión a la base de datos acudiendo al fichero .env
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    host: process.env.PGHOST,
    port: process.env.PGPORT,
    database: process.env.PGDATABASE,
});

app.get('/', async (req, res) => {   // Ruta para obtener datos de la base de datos
    try {
        const result = await pool.query('SELECT NOW()'); // SELECT NOW() es una consulta simple que devuelve la fecha y hora actuales del servidor de la base de datos
        res.send(`Fecha y hora actuales: ${result.rows[0].now}`);  // Devuelve los resultados de la consulta en formato JSON
    } catch (error) 
    {
        console.error('Error al obtener datos:', error);
        res.status(500).json({ error: 'Error al obtener datos' });
    }
});
app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
});