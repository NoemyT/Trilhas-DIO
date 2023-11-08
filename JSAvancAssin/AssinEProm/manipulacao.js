const { error } = require('console')
const fs = require('fs')

const pLeitura = fs.promises.readFile('rotina.csv')

pLeitura
    .then((arquivo) => arquivo.toString('utf8'))
    .then((texto) => texto.split('\n').slice(1))
    .then((linhas) => linhas.map((linha) => {
        const [nome, feito] = linha.split(';')
        return {
            nome,
            feito: feito.trim() === 'true'
        }
    }))
    .then((lista) => console.log(lista))
    .catch((error) => console.log('Deu ruim', error))