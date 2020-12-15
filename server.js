const express = require("express");
const app = express();

const PORT = 3000

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


app.listen(PORT, function() {
    console.log("App listening to PORT " + PORT)
});