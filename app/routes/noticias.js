module.exports = function(app) {
    console.log("noticias")
    app.get('/noticias', function(req, res) {
        var connection = app.config.dbConnection();
        var noticiasModel = app.app.models.noticiasModel;

        noticiasModel.getNoticias(connection, function(error, result) {

            res.render('noticias/noticias', { noticias: result });
        })
    })
}