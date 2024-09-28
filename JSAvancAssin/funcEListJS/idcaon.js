const pessoa = {
    nome: 'noemy',
    idade: 21
}

function falar(prefixo) {
    console.log(prefixo, this.nome)
}

falar('bruh') // invocação direta - Não tem propriedade sobre o 'this'

falar.apply(pessoa, ['bruh']) // apply

falar.call(pessoa, 'bruh') // call

// 'new' - também pode executar uma função