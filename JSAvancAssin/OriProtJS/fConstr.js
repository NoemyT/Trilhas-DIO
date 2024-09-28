function Pessoa(nome, idade) {
    this.nome = nome
    this.idade = idade
}

Pessoa.prototype.falar = function () {
    console.log(`Meu nome é ${this.nome}`)
}

const noemy = new Pessoa('noemy', 21)

noemy.falar()

// Equivalência

/* class Pessoa {
    constructor(nome, idade){
        this.nome = nome
        this.idade = idade
    }

    falar () {
        console.log(`Meu nome é ${this.nome}`)
    }
} */