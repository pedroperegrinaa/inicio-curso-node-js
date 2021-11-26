const express = require('express');
const msg = require('./mod_test');
// var bootstrap = require('bootstrap');
// import bootstrap from '/bootstrap/dist/css/bootstrap.min.css'
const app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render("home/index");
})

app.get('/admin', function(req, res) {
    res.render("admin/form_add_noticias");
})

app.get('/tech', function(req, res) {
    res.render("noticias/tech");
})

app.listen(3000, function() {
    console.log(msg)
})