module.exports = function(app) {
    console.log("noticias")
    app.get('/tech', function(req, res) {
        var connection = app.config.dbConnection();
        var noticiasDAO = app.app.models.noticiasDAO;

        noticiasDAO.getNoticias(connection, function(error, result) {

            res.render('noticias/tech', { noticias: result });
        })
    })
}