const mysql = require('mysql');

var con = mysql.createConnection({
  host : 'localhost',
  user : 'root',
  password : 'Floorman11',
  database : 'mydb'
  // multipleStatements : true
})

con.connect((err) => {
  if (err) throw err;
  console.log("Connected!");
  con.query("CREATE DATABASE IF NOT EXISTS mydb", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
  con.query("CREATE TABLE IF NOT EXISTS Students (id int NOT NULL AUTO_INCREMENT, name varchar(255), age int, PRIMARY KEY (id))", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
});



module.exports = con;