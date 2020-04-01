const { check, validationResult } = require('express-validator');

const LivroDao = require('../infra/livro-dao');
const db = require('../../config/database');

const LivroControlador = require('../controladores/livro-controlador');
const livroControlador = new LivroControlador();

const BaseControlador = require('../controladores/base-controlador');
const baseControlador = new BaseControlador();


module.exports = (app) => {
    const rotasBase = BaseControlador.rotas();
    const rotasLivro = LivroControlador.rotas();

    app.get(rotasBase.home, baseControlador.home());
    
    app.get(rotasLivro.lista, livroControlador.lista());
    app.get(rotasLivro.cadastro, livroControlador.formularioCadastro());
    app.get(rotasLivro.edicao, livroControlador.formularioEdicao());

    app.post(rotasLivro.lista, [
        check('titulo').isLength({ min: 5 }).withMessage('O título precisa ter no mínimo 5 caracteres!'),
        check('preco').isCurrency().withMessage('O preço precisa ter um valor monetário válido!')
    ], 
    livroControlador.cadastra());

    app.put(rotasLivro.lista, livroControlador.edita());
    app.delete(rotasLivro.delecao, livroControlador.remove());
    
};