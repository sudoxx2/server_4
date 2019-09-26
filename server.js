const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send("nani");
});
app.listen(3000);