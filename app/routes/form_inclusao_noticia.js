module.exports = function(app) {
    console.log("admin")
    app.get('/admin', function(req, res) {
        res.render("admin/form_add_noticias");
    })
}