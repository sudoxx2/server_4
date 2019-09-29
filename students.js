const express = require('express');
const Router = express.Router();
const con = require('./connection');

Router.get('/', (req, res) => {
  con.query("SELECT * from students", (err, rows, fields) => {
    if(!err) {
      res.send(rows);
    } else {
      console.log(err);
    }
  })
})

Router.post('/lookup-student', (req, res) => {
  con.query(`SELECT * FROM students WHERE students.name = '${req.body.name}'`, (err, rows, fields) => {
    if(!err) {
      res.send(rows);
    } else {
      console.log(err);
    }
  })
})

Router.delete('/delete-student', (req, res) => {
  con.query(`DELETE FROM students WHERE students.name = '${req.body.name}'`, (err, rows, fields) => {
    if(!err) {
      res.send('deleted ' + req.body.name);
    } else {
      console.log(err);
    }
  })
})


module.exports = Router;