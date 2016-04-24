'use strict';

const PORT = process.env.PORT || 3000;

var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');

var app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('splash', { color: 'blue'});
});

app.get('/api', (req,res) => {
  // console.log("mainForum", req);
  res.render('ds');
});

app.use('/api', require('./routes/api'));

app.listen(PORT, err => {
  console.log(err || `Server listening on port ${PORT}`);
});
