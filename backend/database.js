var mysql = require('mysql');
var poolDatabase = mysql.createPool({
    connectionLimit: 20,
    host: 'localhost',
    database: "test",
    user: 'root',
    password: ''
});

const obtenerUsuario = (id, callback) => {
    poolDatabase.getConnection((error, connection) => {
        connection.query(`SELECT * FROM users WHERE id = ${id}`, (error, data) => {
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
        connection.query('SELECT * FROM `users`', (error, data) => {
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

exports.obtenerUsuarios = obtenerUsuarios;
exports.obtenerUsuario = obtenerUsuario;