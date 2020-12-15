const express = require("express");
const path = require("path");
const app = express();

const PORT = 3000

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const reservations = [];

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
})

app.get("/reservation", function(req, res) {
    res.sendFile(path.join(__dirname, "reservation.html"));
})

app.get("/viewtable", function(req, res) {
    res.sendFile(path.join(__dirname, "viewtable.html"));
})


app.post("/api/reservations", function(req, res) {
    var newReservation = req.body;

    console.log(newReservation);
  
    reservations.push(newReservation);
  
    res.json(newReservation);
  });

app.listen(PORT, function() {
    console.log("App listening to PORT " + PORT)
});