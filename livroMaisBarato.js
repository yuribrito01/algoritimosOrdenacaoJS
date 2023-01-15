const livros = require ("./listaLivros");

function livroMaisBarato(arrProdutos, posicaoInicial){

let maisBarato = posicaoInicial;

for(let atual = posicaoInicial; atual < arrProdutos.length; atual++){
    if(arrProdutos[atual].preco < arrProdutos[maisBarato].preco){
        maisBarato = atual;
    }
}
    return maisBarato;
}

module.exports = livroMaisBarato;