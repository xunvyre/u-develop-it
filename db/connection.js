//connect to database
const mysql = require('mysql2');
const db = mysql.createConnection
(
    {
        host: 'localhost',
        user: 'root',
        password: 'stinkman',
        database: 'election'
    },
    console.log('Connected to the election databse.')
);

module.exports = db;