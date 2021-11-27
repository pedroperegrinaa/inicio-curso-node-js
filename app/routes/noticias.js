module.exports = function(app) {

    console.log("noticias")
    app.get('/tech', function(req, res) {
        var connection = app.config.dbConnection();

        connection.query('select * from noticias', function(error, result) {

            res.render('noticias/tech', { noticias: result });
        })
    })
}