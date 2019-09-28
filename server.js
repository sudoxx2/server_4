const mysql = require('mysql');
const express = require('express');
const bodyParser = require('body-parser');
const con = require('./connection')
const StudentRoutes = require('./students')
const app = express();

// app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.use('/students', StudentRoutes);

// app.use((req, res, next) => {
//   console.log("HOLAMH");
//   next();
// })

// app.get('/', (req, res) => {
//   res.send("nani");
// });

app.listen(3000);