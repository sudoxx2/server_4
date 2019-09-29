const express = require('express');
const Router = express.Router();
const con = require('./connection');

Router.get('/', (req, res) => {
  con.query("SELECT * from Students", (err, rows, fields) => {
    if(!err) {
      res.sendStatus(200);
      res.send(rows);
    } else {
      console.log(err);
    }
  })
})

Router.post('/lookup-student', (req, res) => {
  con.query(`SELECT * FROM Students WHERE Students.name = '${req.body.name}'`, (err, rows, fields) => {
    if(!err) {
      res.sendStatus(200);
      res.send(rows);
    } else {
      console.log(err);
    }
  })
})

Router.delete('/delete-student', (req, res) => {
  con.query(`DELETE FROM Students WHERE Students.name = '${req.body.name}'`, (err, rows, fields) => {
    if(!err) {
      res.sendStatus(200);
      res.send('deleted ' + req.body.name);
    } else {
      console.log(err);
    }
  })
})

Router.post('/add-student', (req, res) => {
  con.query(`INSERT INTO Students (name, age) VALUES ('${req.body.name}', ${req.body.age})`, (err, rows, fields) => {
    if(!err) {
      // res.sendStatus(200);
      res.send('added: ' + req.body.name);
    } else {
      console.log(err);
    }
  })
  
})


module.exports = Router;