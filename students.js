const express = require('express');
const router = express.Router();
const con = require('./connection');

router.get('/', (req, res) => {
  con.query("SELECT * from Students", (err, rows, fields) => {
    if(!err) {
      
      
      res.status(200).send(JSON.stringify(rows));
    } else {
      console.log(err);
    }
  })
})

router.post('/lookup-student', (req, res) => {
  con.query(`SELECT * FROM Students WHERE Students.name = '${req.body.name}'`, (err, rows, fields) => {
    if(!err) {
      
      res.status(200).send(JSON.stringify(rows));
    } else {
      console.log(err);
    }
  })
})

router.delete('/delete-student', (req, res) => {
  con.query(`DELETE FROM Students WHERE Students.name = '${req.body.name}'`, (err, rows, fields) => {
    if(!err) {
      
      res.status(200).send(JSON.stringify('deleted ' + req.body.name));
    } else {
      console.log(err);
    }
  })
})

router.post('/add-student', (req, res) => {
  con.query(`INSERT INTO Students (name, age) VALUES ('${req.body.name}', ${req.body.age})`, (err, rows, fields) => {
    if(!err) {
      res.status(200).send(JSON.stringify('added ' + req.body.name));
    } else {
      console.log(err);
    }
  })
})

router.put('/update-student', (req, res) => {
  con.query(`UPDATE Students SET Students.name='${req.body.newName}', Students.age=${req.body.age} WHERE Students.name='${req.body.name}'`, (err, rows, fields) => {
    if(!err) {
      res.status(200).send(JSON.stringify('updated ' + req.body.name));
    } else {
      console.log(err);
    }
  })
})


module.exports = router;