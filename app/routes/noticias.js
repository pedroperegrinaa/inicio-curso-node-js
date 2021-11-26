var dbConnection = require('../../config/db_connection')

module.exports = function(app) {

    var connection = dbConnection()

    console.log("noticias")
    app.get('/tech', function(req, res) {
        connection.query('select * from noticias', function(error, result) {

            res.render('noticias/tech', { noticias: result });
        })
    })
}