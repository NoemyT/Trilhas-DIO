// Objetos literais

const pessoa = {
    idade: 21
}

const noemy = {
    nome: 'noemy',
    __proto__: pessoa
}

console.log(noemy.idade)

// outra forma
// const noemy = Object.create(pessoa)
// nesta forma não é necessário chamar o __proto__