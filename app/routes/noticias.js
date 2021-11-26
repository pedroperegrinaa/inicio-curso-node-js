module.exports = function(app) {
    console.log("noticias")
    app.get('/tech', function(req, res) {
        res.render("noticias/tech");
    })
}