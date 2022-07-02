// Invocca al frameWork Express
const express = require('express');

//Creacion del Servidor Web (Invernadero)
const Riego = express();

// Asignando al servidor 'Invernadero' el puerto TCP 5000
Riego.listen(4000, () => {
    console.log("El servidor esta corriendo...");
});
/* Coleccion DatosAire */ 
DatosAire = [

    { "id": "0", "Fecha": "12/06/2022", "Hora": "07:00 am","Temperatura":"14° C" },
    { "id": "1", "Fecha": "12/06/2022", "Hora": "07:10 am","Temperatura":"14° C" },
    { "id": "2", "Fecha": "13/06/2022", "Hora": "12:30 am","Temperatura":"20° C" },
    { "id": "3", "Fecha": "14/06/2022", "Hora": "01:00 pm","Temperatura":"26° C" },
    { "id": "4", "Fecha": "15/06/2022", "Hora": "07:00 am","Temperatura":"14° C" },
    { "id": "5", "Fecha": "16/06/2022", "Hora": "07:45 am","Temperatura":"15° C" },
    { "id": "6", "Fecha": "20/06/2022", "Hora": "11:32 pm","Temperatura":"19° C" },
    { "id": "7", "Fecha": "22/06/2022", "Hora": "01:28 am","Temperatura":"08° C" },
    { "id": "8", "Fecha": "27/06/2022", "Hora": "05:00 pm","Temperatura":"22° C" },
    { "id": "9", "Fecha": "30/06/2022", "Hora": "06:10 pm","Temperatura":"26° C" }
];


//Método GET para mostrar toda la colección.
Riego.get('/DatosAire', (req, res) => {
    res.json(DatosAire);

});

    /*Mostar un recurso de la colección de estudiantes por su ID siempre y cuando esté en la colección 
    si no lanza un mensaje en conjunto con un status de error 404.*/

Riego.get('/DatosAire/:id', (req, res) => {
    const idDatosAire = req.params.id;

    if (DatosAire[idDatosAire]) {
        res.json(DatosAire[idDatosAire])
    } else {
        res.status(404).json({ "Mensaje": "El Recurso no se encuantra..." });
    }
});

    //agregar un recurso a la colección con el método POST.

Riego.post('/DatosAire/:id', express.json({ type: '*/*' }), (req, res) => {
    const nuevoDatosAire = req.body; //boy recibe todo el cuerpo del recurso
    DatosAire.push(nuevoDatosAire);
    res.status(201).json({ "Mensaje": "Se agrego un nuevo recurso.." });
    res.end();
});

    //Eliminar un Recurso de la Coleccion.

Riego.delete('/DatosAire/:id',(req, res) => {
    const idDatosAire = req.params.id;
    if (DatosAire[idDatosAire]) {
        DatosAire.splice(idDatosAire, 1);
        res.json({ "Mensaje": "El Recurso a sido eliminado..." });
    } else {
        res.status(404).json({ "Mensaje": "El Recurso no existe..." });
    }
});

                    /*Coleccion para el Sensor de Suelo el cual mide la Humedad de la tierra*/ 
suelo = [
    { id: 0, "fecha": "14/02/2022", "hora": "7:00 am", "Nivel de humedad": "42%" },
    { id: 1, "fecha": "19/03/2022", "hora": "7:10 am", "Nivel de humedad": "50%" },
    { id: 2, "fecha": "25/03/2022", "hora": "12:30 am", "Nivel de humedad": "80%" },
    { id: 3, "fecha": "26/03/2022", "hora": "01:00 pm", "Nivel de humedad": "64%" },
    { id: 4, "fecha": "01/04/2022", "hora": "7:00 am", "Nivel de humedad": "100%" },
    { id: 5, "fecha": "05/05/2022", "hora": "7:45 am", "Nivel de humedad": "11%" },
    { id: 6, "fecha": "20/06/2022", "hora": "11:32 pm", "Nivel de humedad": "40%" },
    { id: 7, "fecha": "22/06/2022", "hora": "1:28 am", "Nivel de humedad": "72%" },
    { id: 8, "fecha": "25/06/2022", "hora": "5:00 am", "Nivel de humedad": "88%" },
    { id: 9, "fecha": "30/06/2022", "hora": "6:10 am", "Nivel de humedad": "25%" }
];
//Método GET para mostrar toda la colección.

Riego.get('/suelo', (req, res) => {
    res.json(suelo);

});

/* Busqueda de un recurso dentro de la coleccion Suelo usando el metodo GET */

Riego.get('/suelo/:id', (req, res) => {
    const idsuelo = req.params.id;

    if (suelo[idsuelo]) {
        res.json(suelo[idsuelo])
    } else {
        res.status(404).json({ "Mensaje": "El Recurso no se encuantra..." });
    }
});

//Agregar un nuevo recurso a la coleccion de suelo
Riego.post('/suelo', express.json({ type: '*/*' }), (req, res) => {
    const nuevoDato = req.body;
    suelo.push(nuevoDato);
    res.status(201).json({ "AVISO:": "Se agrego un nuevo recurso" });
    res.json(nuevoDato);
});

//Eliminar un recurso de la coleccion 'suelo'
Riego.delete('/suelo/:id', (req, res) => {
    const nuevoDato = req.params.id;
    //res.json(nuevoDato);
    if (suelo[nuevoDato]) {
        suelo.splice(nuevoDato, 1);
        res.json({ "Alerta": "El recurso ha sido eliminado" })
    } else {
        res.status(404).json({ "Alerta": "El recurso no existe" });
    }
})

/* coleccion de datos  Tiempo_Riego*/

Tiempo_Riego = [
    { id: 0, "fecha": "16/05/2022", "hora": "7:28 pm", "nivel": "27%" },
    { id: 1, "fecha": "20/05/2022", "hora": "8:35 am", "nivel": "32%" },
    { id: 2, "fecha": "24/05/2022", "hora": "7:45 am", "nivel": "20%" },
    { id: 3, "fecha": "28/05/2022", "hora": "3:15 pm", "nivel": "25%" },
    { id: 4, "fecha": "1/06/2022", "hora": "3:55 pm", "nivel": "22%" },
    { id: 5, "fecha": "4/06/2022", "hora": "8:24 am", "nivel": "30%" },
    { id: 6, "fecha": "8/06/2022", "hora": "12:12 pm", "nivel": "18%" },
    { id: 7, "fecha": "9/06/2022", "hora": "4:20 pm", "nivel": "21%" },
    { id: 8, "fecha": "12/06/2022", "hora": "7:18 am", "nivel": "24%" },
    { id: 9, "fecha": "16/06/2022", "hora": "8:20 pm", "nivel": "29%" }
];

//Eliminar un recurso de la coleccion Tiempo_Riego
Riego.delete('/Tiempo_Riego/:id', (req, res) => {
    const idTiempo = req.params.id;
    if (Tiempo_Riego[idTiempo]) {
        Tiempo_Riego.splice(idTiempo, 1);
        res.json({ "Mensaje": "El recurso ha sido eliminado" });
    } else {
        res.status(404).json({ "Mensaje": "El recurso no se encuentra..." })
    }
});

//Agregar un nuevo recurso ala coleccion de Tiempo_Riego
Riego.post('/Tiempo_Riego', express.json({ type: '*/*' }), (req, res) => {
    const nuevoTiempo = req.body;
    Tiempo_Riego.push(nuevoTiempo);
    res.status(201).json({ "Mensaje": "Se agrego un nuevo recurso" });
    res.end();
});

//Mostrar un recurso de la coleccion de Tiempo_Riego
Riego.get('/Tiempo_Riego/:id', (req, res) => {
    const idTiempo_Riego = req.params.id;
    if (Tiempo_Riego[idTiempo_Riego]) {
        res.json(Tiempo_Riego[idTiempo_Riego]);
    } else {
        res.status(404).json({ "Mensaje": "El recurso no se encuentra..." })
    }


});

//Mostrar la Coleccion de Tiempo_Riego
Riego.get('/Tiempo_Riego', (req, res) => {
    res.json(Tiempo_Riego);

});