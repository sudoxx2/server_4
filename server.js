const express = require('express');
const bodyParser = require('body-parser');
const StudentRoutes = require('./students')
const app = express();
const path = require('path')

// app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/students', StudentRoutes);

app.use((req, res, next) => {
  console.log("HOLAMH");
  next();
})

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/assets/views/', 'index.html'));
});

app.listen(3000);