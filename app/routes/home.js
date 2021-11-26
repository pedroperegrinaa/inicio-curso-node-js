module.exports = function(app) {
    console.log("rota home")
    app.get('/', function(req, res) {
        res.render('home/index.ejs');
    })
}