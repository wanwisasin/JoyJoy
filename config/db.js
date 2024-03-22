const mysql = require('mysql');
const db = mysql.createConnection ({
    host: 'localhost',
    user: 'root',
    password: 'Kee0856797381',
    database: 'joyjoy'
});

// connect to database
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to database');
});
global.db = db;

module.exports = db;