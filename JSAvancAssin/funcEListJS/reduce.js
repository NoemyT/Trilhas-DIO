const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const somaTotal = lista.reduce((previous, current) => {
    return previous + current
})

console.log(somaTotal)

// Pode receber um segundo parâmetro como valor inicial