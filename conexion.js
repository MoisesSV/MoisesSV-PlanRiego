// Invoca al framework Express
const express = require('express');

// Crear el servidor web usando Express
const riego = express();

//Asignando al servidor  el puerto TCP 
riego.listen(5555, () => {
    console.log("El servidor está corriendo...");
});

const mysql = require('mysql');

//Definir los parametros para la conexion con el servidor de msql
//Metodo que usa mysql para crear una conexion en JS
const conexion = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "",
    database: "plan_riego"
});
/////////////////////////////////////////////////////////////////////////////
//tabla humedad
riego.get('/humedad', (req, res) => {
    //Establecer la conexion utilizando los parametros anteriores
    conexion.connect();

    conexion.query('SELECT * FROM humedad', (errors, data, fields) => {
        res.send(data);
    })

});

////////////////////////////////////////////////////////////////////////////////
//tabla  temperatura
riego.get('/temperatura', (req, res) => {
    //Establecer la conexion utilizando los parametros anteriores
    conexion.connect();

    conexion.query('SELECT * FROM temperatura', (errors, data, fields) => {
        res.send(data);
    })

});

////////////////////////////////////////////////////////////////////////////
//tabla tiempo_riego
riego.get('/tiempo_riego', (req, res) => {
    //Establecer la conexion utilizando los parametros anteriores
    conexion.connect();

    conexion.query('SELECT * FROM tiempo_riego', (errors, data, fields) => {
        res.send(data);
    })

});


///////////////////////////////////////////////metodo GET para buscar por ID//////////////////////////////////

//tabla humedad
riego.get('/humedad/:id', (req, res) => {

    const idhumedad = req.params.id;

    if (idhumedad && idhumedad != 0) {
        conexion.connect();
        humedad = conexion.query('SELECT * FROM humedad WHERE id ="' + idhumedad + '"', (errors, data, fields) => {
            res.send(data);
        });
    } else {
        res.status(404).json({ "Mensaje": "El Recurso no se encuantra dentro de la Coleccion..." });
    
    }
});


//tabla temperatura
riego.get('/temperatura/:id', (req, res) => {

    const idtemperatura = req.params.id;

    if (idtemperatura && idtemperatura != 0) {
        conexion.connect();
        temperatura = conexion.query('SELECT * FROM humedad WHERE id ="' + idtemperatura + '"', (errors, data, fields) => {
            res.send(data);
        });
    } else {
        res.status(404).json({ "Mensaje": "El Recurso no se encuantra dentro de la Coleccion..." });

    }
});

//tabla tiempo_riego
riego.get('/tiempo_riego/:id', (req, res) => {

    const idtiempo_riego = req.params.id;

    if (idtiempo_riego && idtiempo_riego != 0) {
        conexion.connect();
        tiempo_riego = conexion.query('SELECT * FROM humedad WHERE id ="' + idtiempo_riego + '"', (errors, data, fields) => {
            res.send(data);
        });
    } else {
        res.status(404).json({ "Mensaje": "El Recurso no se encuantra dentro de la Coleccion..." });

    }
});


///////////////////////////////////////metdodo POT para insertar datos en la coleccion (tabla de la base de datso)//////////////////////


riego.post('/temperatura', express.json({ type: '*/*' }), (req, res) => {
    const nuevotemperatura = req.body;
    conexion.connect();

    temperatura = conexion.query(

        'INSERT INTO humedad ="' + NULL + '"' + '"' + fecha + '"' + '"' + hora + '"' + '"' + '"' + nivelHumedad + '"',

        (errors, data, fields) => {
        res.send(data);
    });    
    temperatura.push(nuevotemperatura);
    res.status(201).json({ "Mensaje": "Se agrego un nuevo recurso.." });
    res.end();
});







