const express = require('./config/server.js');

// var rota_home = require('./app/routes/home')(app)
// var rota_noticias = require('./app/routes/noticias')(app)
// var rota_admin = require('./app/routes/form_inclusao_noticia')(app)
// var rota_treino = require('./app/routes/treino')(app)

app.listen(3000, function() {
    console.log("Server ON")
})