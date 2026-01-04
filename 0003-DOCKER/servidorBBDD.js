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
app.get('/home',(req,res)=>{
    res.send('Bienvenido a la página de inicio');   
});
app.get('/usuarios',async(req,res)=>{
    try{
        const BBDD= await pool.query('SELECT * FROM usuarios'); // Consulta para obtener todos los registros de la tabla 'usuarios'
        let texto = ''; 
        BBDD.rows.forEach(row => { texto += `ID: ${row.id} - Usuaria: ${row.nombre} ${row.apellidos}<br>`; }); 
        res.send(texto); 
    }catch(error){
        console.error('Error al obtener usuarios:', error);
        res.status(500).json({ error: 'Error al obtener usuarios' });
    }   
});
app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
});