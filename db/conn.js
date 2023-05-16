const mysql= require('mysql')
const pool=mysql.createPool({
        connectionLimit: 10,
        host: 'localhost',
        user: 'root',
        password: '32410358',
        database: 'nodemysql2',
})

module.exports = pool;