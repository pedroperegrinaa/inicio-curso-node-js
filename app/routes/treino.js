module.exports = function(app) {
    console.log("rota TREINO")
    app.get('/treino', function(req, res) {
        res.render('treino.ejs')
    })
}