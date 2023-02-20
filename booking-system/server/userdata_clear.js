const mysql = require('mysql');

const sql = `DELETE FROM userdata`;

db.query(sql, function(err, results, fields) {
  if(err) {
    console.log(err.message);
  }
});

