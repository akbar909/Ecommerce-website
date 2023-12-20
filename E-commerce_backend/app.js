const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require("./routes/userRoutes");
const app = express();
app.use(express.json())
app.get("/", (req, res) =>{
    res.send("Hello from api")
});

app.use("/api/v1",userRoutes);
// Roting


module.exports = app