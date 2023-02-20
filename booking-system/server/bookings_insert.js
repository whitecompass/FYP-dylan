const mysql = require('mysql');

const db = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'root',
    database: 'test'
  });

const bookingData = [
  [2, "03/21/2023 02:00pm", "03/21/2023 03:00pm", 1],
  [3, "03/22/2023 02:00pm", "03/22/2023 04:00pm", 2]
];

let sql2 = `INSERT INTO bookings (Grp, Start_time, End_time, Duration) VALUES ?`;

db.query(sql2, [bookingData], function(err, results, fields) {
  if (err) {
    console.log(err.message);
  }
});
