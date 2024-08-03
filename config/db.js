const mysql = require('mysql2/promise')
// Create a connection pool

const mysqlpool = mysql.createPool({
    host: 'localhost',
    user: 'root'    ,
    password: 'Abhay@9528',
    database: 'new_schema',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit
: 0

});
module.exports = mysqlpool;