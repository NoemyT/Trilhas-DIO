const { gets, print } = require('./desafio01a');

const nSorteados = [];

for (let i = 0; i < 5; i++){
    const nSorteado = gets();
    nSorteados.push(nSorteado);
}

let maior = 0;

for (let i = 0; i < nSorteados.length; i++) {
    const nSorteado = nSorteados[i];
    if (nSorteado > maior) {
        maior = nSorteado;
    }
}

print(maior);