var http = require('http');

var server = http.createServer(
    function(req, res) {

        var categoria = req.url

        if (categoria == "/moda") {
            res.end("<html><body> Portal de noda </body></html>");
        } else {
            res.end("<html><body> Não tem nada aqui </body></html>");
        }


    }

);

server.listen(3000);

console.log("Criando")