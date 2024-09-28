// Objetos

const x = {
    nome: "Noemy",
    idade: 21
};

x.sobrenome = "Torres";

console.log(x.nome);
console.log(x['sobrenome']);

// Métodos


const pessoa = {
    nome: "João",
    idade: 15,
    falar: function(){
        console.log(`Oi, meu nome é ${this.nome}`);
    }
};

const y = pessoa.falar();

pessoa.falar();
y();
