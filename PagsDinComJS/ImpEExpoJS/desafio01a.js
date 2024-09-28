/* Uma sala contém 5 alunos e para cada aluno foi sorteado um número de 1 à 100.
    Faça um programa que receba os 5 números sorteados para os alunos e mostre o maior número sorteado.

    Dados de entrada:
    5
    50
    10
    98
    23

    Saída:
    98
*/

const sorteados = [5, 50, 10, 98, 23];
let i = 0;

function gets() {
    const valor = sorteados[i];
    i++;
    return valor;
}

function print(valor) {
    console.log(valor);
}

module.exports = { gets, print };