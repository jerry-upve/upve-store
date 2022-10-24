var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    database: "test",
    user: 'root',
    password: ''
});

function usersDB() {
    connection.connect();

    connection.query('SELECT * FROM `users`', function (err, rows, fields) {
        if (err) throw err;
        console.log(rows);
    });

    connection.end();
}

exports.usersDB = usersDB;