const bcrypt = require("bcryptjs");
const mysql = require('mysql');
const poolDatabase = mysql.createPool({
    connectionLimit: 30,
    host: 'localhost',
    database: "upve_store",
    user: 'root',
    password: ''
});

const obtenerUsuario = (id, callback) => {
    poolDatabase.getConnection((error, connection) => {
        connection.query(`SELECT nombre, email, phone, status FROM users WHERE id = ${id}`, (error, data) => {
            if (error) {
                callback({
                    'success': false,
                    'error': error.sqlMessage
                });
            } else {
                callback({
                    'success': true,
                    'data': data
                });
            }
        });
        
        connection.release();
    });
}

const obtenerUsuarios = (callback) => {
    poolDatabase.getConnection((error, connection) => {
        connection.query('SELECT nombre, email, phone, status FROM `users`', (error, data) => {
            if (error) {
                callback({
                    'success': false,
                    'error': error.sqlMessage
                });
            } else {
                callback({
                    'success': true,
                    'data': data
                });
            }
        });

        connection.release();
    });
}

const login = (data, callback) => {
    bcrypt.hash(data.pass, 10, (error, secret) => {
        if(error) {
            callback({
                'success': false,
                'error': 'Hash password fail.'
            });
        } else {
            poolDatabase.getConnection((error, connection) => {
                connection.query(`SELECT * FROM users WHERE email = '${data.user}'`, (error, row) => {
                    if (error) {
                        callback({
                            'success': false,
                            'error': error.sqlMessage
                        });
                    } else {
                        if (row.length > 0){
                            let psw = row[0].password;
                            bcrypt.compare(data.pass, psw, (matchError, match) => {
                                if (matchError) {
                                    console.log("Error comprobando:", matchError);
                                    callback({
                                        'success': false,
                                        'error': "Error comprobando:" + matchError
                                    });
                                } else {
                                    if(match){
                                        callback({
                                            'success': true,
                                            'data': "Credenciales correctas"
                                        });
                                    }else{
                                        callback({
                                            'success': false,
                                            'error': "Contraseña incorrecta"
                                        });
                                    }
                                }
                            });
                        }else{
                            callback({
                                'success': false,
                                'error': 'El usuario no existe'
                            });
                        }
                    }
                });

                connection.release();
            })
        }
    })
}

exports.obtenerUsuarios = obtenerUsuarios;
exports.obtenerUsuario = obtenerUsuario;
exports.login = login;