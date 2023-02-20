const mysql = require('mysql');

const db = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'root',
    database: 'test'
  });

const sql = `DELETE FROM userdata`;

db.query(sql, function(err, results, fields) {
  if(err) {
    console.log(err.message);
  }
});

