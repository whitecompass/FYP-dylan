const express = require('express')
const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'localhost',
    user: '',
    password: '',
    database: ''
})

connection.connect()

connection.query()

const app = express()

app.get("/api", (req, res) => {
    res.json({ "events":
               ["user1", "user2", "user3"] })
})

app.listen(5000, () => console.log("Server started on port 5000"))
