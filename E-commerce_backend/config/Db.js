const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const DB_URL = 'mongodb+srv://ghulamakbar:ghulamakbar@cluster0.tfxzcvr.mongodb.net/?retryWrites=true&w=majority';





mongoose.connect(DB_URL).then(() => { console.log('Connected to database') }).catch((error) => { console.log(error) });


app.listen(5000, () => { console.log('server started') });