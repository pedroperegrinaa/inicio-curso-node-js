module.exports = function(app) {
    console.log("noticias")
    app.get('/noticias', function(req, res) {
        var connection = app.config.dbConnection();
        var noticiasDAO = new app.app.models.noticiasDAO(connection);

        noticiasDAO.getNoticias(function(error, result) {

            res.render('noticias/noticias', { noticias: result });
        })
    })
}