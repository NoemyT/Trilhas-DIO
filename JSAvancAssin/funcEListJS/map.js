class Pessoa {
    constructor(name) {
        this.name = name
    }
}

const lista = [new Pessoa('Noemy'), new Pessoa('João'), new Pessoa('Maria')]

const listaNomes = lista.map((element) => {
    return `
        <li>
            ${element.name}
        </li>
    `
})

console.log(listaNomes)