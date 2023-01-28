const express = require('express');
const cors = require('cors')
const mysql = require('mysql');

const allowedOrigins = ['http://localhost:3000']

// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: '',
//     password: '',
//     database: ''
// })

// connection.connect()

// connection.query()

const app = express();

app.use(cors({
    origin: function (origin, callback) {
        if (!origin) return callback(null, true);
        if (allowedOrigins.indexOf(origin) === -1) {
            var msg = 'The CORS policy for this site does not allow access fro the specified origin'
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    }
}));

app.get("/login", (req, res) => {
    res.json({})
});

app.get("/calendar_data", (req, res) => {
    const events = require('./tmp_calendar_data.js');
    res.json(events)
});

app.listen(5000, () => console.log("Server started on port 5000"));
