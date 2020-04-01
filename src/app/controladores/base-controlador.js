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
                require('../views/base/home/home.marko')
            );
        };
    }
}

module.exports = BaseControlador;