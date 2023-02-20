const mysql = require('mysql');

const userData = [
  ["Tester", "ee4218", "a0123456x", 3, "Student", "tester@org.com", "testerpass"],
  ["John", "ee2033", "a111111x", 2, "Student", "john@org.com", "johnpass"],
  ["Michael", "ee4218", "NA", 0, "Teacher", "michael@org.com", "michaelpass"]
];

const bookingData = [
  [2, "03/21/2023 02:00pm", "03/21/2023 03:00pm", 1],
  [3, "03/22/2023 02:00pm", "03/22/2023 04:00pm", 2]
];


const sql1 = `INSERT INTO userdata (StudentName, Module, MatricNo, Grp, Role, Username, Password) VALUES ?`;
let sql2 = `INSERT INTO bookings (Grp, Start_time, End_time, Duration) VALUES ?`;

db.query(sql1, [userData], (err, results, fields) {
  if (err) {
    console.log(err.message);
  }
});

db.query(sql2, [bookingData], (err, results, fields) {
  if (err) {
    console.log(err.message);
  }
});
