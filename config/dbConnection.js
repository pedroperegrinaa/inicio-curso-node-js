const mysql = require('mysql');

const connMySQL = function() {
    console.log("CONEXAO ESTABELECIDA")
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'cadastro'
    });
}

module.exports = function() {
    return connMySQL;
}