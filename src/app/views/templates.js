// ao fazer o require de uma pasta, ele procura dentro dela o arquivo index.js
module.exports = {
    base: require('./base'),
    livros: require('./livros'),
}