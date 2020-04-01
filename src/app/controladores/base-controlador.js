const livroControlador = require('./livro-controlador');

const templates = require('../views/templates');

class BaseControlador {
    
    //para facitiliar manutenção dos nomes da rotas
    static rotas() {
        return {
            home: '/',
            login: '/login'
        }   
    }

    home() {
        return function(req, resp) {
            resp.marko(
                templates.base.home
            );
        };
    }

    login() {
        return function(req, resp) {
            resp.marko(templates.base.login);
        }
    }

    efetuaLogin() {
        return function (req, resp, next) {
            
            //lógica do login
            const passport = req.passport;

            passport.autenthicate('local', (erro, usuario, info) => {
                if (info) {
                    return resp.marko(templates.base.login);
                }
                if (erro) {
                    return next(erro); //continua mas passa um erro
                }

                req.login(usuario, (erro) => {
                    if (erro) {
                        return next(erro);
                    }
                    return resp.redirect(LivroControlador.rotas().lista);
                });
            })(req, resp, next);
        }
    }
}

module.exports = BaseControlador;