require('marko/node-require').install();
require('marko/express');

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override')
var cors = require('cors');

app.use(cors());

//link para arquivos estáticos
app.use('/estatico', express.static('src/app/public'));

// bodParser devolver o middleware que agente deseja
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(methodOverride(function (req, res) {
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
        // look in urlencoded POST bodies and delete it
        var method = req.body._method;
        delete req.body._method;
        return method;
    }
}));

const rotas = require('../app/rotas/rotas');
rotas(app);

module.exports = app;