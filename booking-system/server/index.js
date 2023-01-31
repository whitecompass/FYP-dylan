const express = require('express');
const app = express();
const router = express.Router()
const cors = require('cors')
const mysql = require('mysql');

const allowedOrigins = ['http://localhost:3000']
const TIME_LIMIT = 2 // in hours

// const db = mysql.createConnection({
//     host: 'localhost',
//     user: '',
//     password: '',
//     database: ''
// })

// db.connect()

// db.query()


// TODO
const bookingTimeCheck = async (req, res) => {
    const event = req.body
    const group = event.grp_id;
    const startTime = event.start;
    const endTime = event.end;
    const duration = (endTime - startTime) / (1000 * 60 * 60);

    // Retrieve the group's current booking total
    const bookingTotal = await db.query(
        // `SELECT SUM(duration) as total_duration FROM bookings WHERE group = ${group}`
    );
    
    // Check if booking total has exceeded the limit for the week
    if (bookingTotal[0].total_duration + duration > TIME_LIMIT) {
        return res.status(400).json({ error: "Exceed booking time limit"})
    }
    
    // Save the booking to the databse
    await db.query(
        // `INSERT INTO bookings (group, start_time, end_time, duration) VALUES (${group}, ${startTime}, ${endTime}, ${duration})`
    );


    return res.status(200).json({ message: "Booking succesful" });
};

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
    // TODO
    res.json({})
});

app.get("/calendar_data", (req, res) => {
    // TODO
    const events = require('./tmp_calendar_data.js');
    res.json(events)
});

app.put("/calendar_data/:id", (req, res) => {
    return bookingTimeCheck(req, res)
});

app.listen(5000, () => console.log("Server started on port 5000"));

router.post("/calendar_data", (req, res) => {
    return bookingTimeCheck(req, res)
});


module.exports = router;
