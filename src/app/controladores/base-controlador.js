const templates = require('../views/templates');

class BaseControlador {
    
    //para facitiliar manutenção dos nomes da rotas
    static rotas() {
        return {
            home: '/',
        }   
    }

    home() {
        return function(req, resp) {
            resp.marko(
                templates.base.home
            );
        };
    }
}

module.exports = BaseControlador;