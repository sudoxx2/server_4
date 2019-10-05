const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const StudentRoutes = require('./students');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');

// app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/students', StudentRoutes);
app.use(cookieParser());
// app.use((req, res, next) => {
//   console.log("HOLAMH");
//   next();
// })

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/assets/views/', 'index.html'));
});

app.get('/cookie', (req, res) => {
  res.cookie('myFirstCOokie', 'looks Good');
  res.end('wow');
});

app.get('/cookie-req', (req, res) => {
  console.log(req.cookies);
  res.end('wow');
});

app.get('/cookie-remove', (req, res) => {
  res.clearCookie('myFirstCOokie', 'looks Good');
  res.end('wow');
});

app.get('/secret', isAuthorized, (req, res) => {
  res.sendFile(path.join(__dirname, '/assets/views/', 'index.html'));
});


app.get('/jwt', (req, res) => {

  var signOptions = {
    expiresIn:  "30s",
    algorithm:  "HS256"   // RSASSA [ "RS256", "RS384", "RS512" ]
   };

  let privateKey = 'haxorz';
  let token = jwt.sign({"body": "stuff"}, privateKey, signOptions);
  res.send(token);
})

function isAuthorized(req, res, next){
  if(typeof req.headers.authorization !== 'undefined') {
    let token = req.headers.authorization.split(' ')[1];
    let privateKey = 'haxorz';

    jwt.verify(token, privateKey, {algorithm: 'HS256'}, (err, decoded) => {
      if(err) {
        res.status(500).json({error: "Not authorized"});
      }

      console.log(decoded);

      return next();
    })
  } else {
    res.status(500).json({error: "Not authorized"});
  }
}

app.listen(3000);