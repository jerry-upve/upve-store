//importaciones de librerias
const express = require('express');
const cors = require("cors");

//importacion de modulos
const users = require('./database');

//Objetos de librerias y constatentes globales
const app = express();
const port = 3000;

//configuraciones de la aplicacion
app.use(cors());
app.use(express.json());

//-----------------------------------------------------------------
//------------------------- Rutas ---------------------------------
//Ruta index
app.get('/usuarios', (req, res) => {
    users.obtenerUsuarios((resp) => {
        if (resp.success){
            res.json({ 
                "success": true, 
                "users": resp.data 
            });
        }else{
            res.json({ 
                "success": true, 
                "errors": resp.error 
            });
        }
    });
});

app.get('/usuarios/:id', (req, res) => {
    users.obtenerUsuario(req.params.id, (resp) => {
        if (resp.success) {
            res.json({
                "success": true,
                "user": resp.data[0]
            });
        } else {
            res.json({
                "success": true,
                "errors": resp.error
            });
        }
    });
});


//Ruta login
app.post('/login', (req, res) => {
    res.json({
        "success": true,
        "logged": true
    });
});

//Creacion del escuchador de peticiones
app.listen(port, () => {
    console.log("Servidor iniciado");
});