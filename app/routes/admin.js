const res = require("express/lib/response");

module.exports = function(app) {

    app.get('/admin', function(req, res) {
        res.render("admin/form_add_noticia");
    })

    app.post('/noticias/salvar', function(req, res) {
        var noticia = req.body;
        // res.send(noticias)

        var connection = app.config.dbConnection();
        var noticiasModel = app.app.models.noticiasModel;

        noticiasModel.salvarNoticia(noticia, connection, function(error, result) {
            // res.render("noticia/noticias")
            res.redirect('/noticias')
        })
    })

    // app.post('/noticia', function(req, res) {
    //     var connection = app.config.dbConnection();
    //     var noticiasModel = app.app.models.noticiasModel;

    //     noticiasModel.getNoticias(connection, function(error, result) {

    //         res.render('noticias/noticia', { noticias: result });
    //     })
    // })




}