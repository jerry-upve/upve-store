//importaciones de librerias
const express = require('express');
const cors = require("cors");

//importacion de modulos
const users = require('./database/usuarios');

//Objetos de librerias y constatentes globales
const app = express();
const port = 3000;

//configuraciones de la aplicacion
app.use(cors());
app.use(express.json());
app.use('/', express.static('public'));

//-----------------------------------------------------------------
//------------------------- Rutas ---------------------------------

//ruta get usuarios
app.get('/usuarios', (req, res) => {
    users.obtenerUsuarios((resp) => {
        if (resp.success){
            res.json({ 
                "success": true, 
                "users": resp.data 
            });
        }else{
            res.json({ 
                "success": false, 
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
                "success": false,
                "errors": resp.error
            });
        }
    });
});

//Ruta login
app.post('/login', (req, res) => {
    users.login(req.body, (respuesta) => {
        if (respuesta.success) {
            res.json({
                "success": true,
                "data": respuesta.data
            });
        } else {
            res.json({
                "success": false,
                "errors": respuesta.error
            });
        }
    });
});

//Creacion del escuchador de peticiones
app.listen(port, () => {
    console.log("Servidor iniciado");
});