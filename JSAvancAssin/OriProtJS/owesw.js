// Sobrescrita

const pessoa = {
    idade: 20
}

const noemy = {
    nome: 'noemy',
    idade: 21,
    __proto__: pessoa
}

console.log(noemy.idade)