var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');
var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/contact', function(req, res){
    res.render('contact');
})

app.post('/contact/send', function(req, res){
    console.log(req.body.name + " : " + req.body.email + " : " + req.body.message);
})

app.get('/about', function(req, res) {
    res.render('about');
})
app.get('/', function(req, res){
    res.render('second');
})

app.listen(3000);