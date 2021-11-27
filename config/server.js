const express = require('express');
const consign = require('consign');

app = express();
app.set('view engine', 'ejs');
app.set('views', './app/views');

consign()
    .include('./app/routes')
    .then('./config/dbConnection.js')
    .into(app)

module.exports = app;