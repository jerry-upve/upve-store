var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    database: "test",
    user: 'root',
    password: ''
});

function obtenerUsuarios(callback) {
    connection.connect();
    connection.query('SELECT * FROM `users`', function (err, rows) {
        if (err){
            callback({
                'success': false,
                'error': err.sqlMessage
            });
        }else{
            callback({
                'success': true,
                'rows': rows
            });
        }
    });

    connection.end();
}

exports.obtenerUsuarios = obtenerUsuarios;