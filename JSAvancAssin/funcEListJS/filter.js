const lista = [1, 2, 3, 4, 5]

const listaNumPar = lista.filter((element) => {
    return (element % 2 === 0)
})

console.log(lista)
console.log(listaNumPar)