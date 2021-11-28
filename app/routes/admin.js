const res = require("express/lib/response");

module.exports = function(app) {

    app.get('/admin', function(req, res) {
        res.render("admin/form_add_noticia");
    })

    app.post('/noticias/salvar', function(req, res) {
        var noticia = req.body;
        // res.send(noticias)

        var connection = app.config.dbConnection();
        var noticiasDAO = new app.app.models.noticiasDAO(connection);

        noticiasDAO.salvarNoticia(noticia, function(error, result) {
            // res.render("noticia/noticias")
            res.redirect('/noticias')
        })
    })
}