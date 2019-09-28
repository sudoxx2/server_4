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

module.exports = Router;