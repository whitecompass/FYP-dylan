const mysql = require('mysql');

const db = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'root',
    database: 'test'
  });

const userData = [
  ["Tester", "ee4218", "a0123456x", 3, "Student", "tester@org.com", "testerpass"],
  ["John", "ee2033", "a111111x", 2, "Student", "john@org.com", "johnpass"],
  ["Michael", "ee4218", "NA", 0, "Teacher", "michael@org.com", "michaelpass"]
];

const sql1 = `INSERT INTO userdata (StudentName, Module, MatricNo, Grp, Role, Username, Password) VALUES ?`;

db.query(sql1, [userData], (err, results, fields)) {
  if (err) {
    console.log(err.message);
  }
});
