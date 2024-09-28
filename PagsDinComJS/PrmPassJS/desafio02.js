/* Faça um programa para calcular o valor de uma viagem.

    Você terá 5 variáveis, sendo elas:
    1. Preço do etanol;
    2. Preço da gasolina;
    3. O tipo de combustível que está no seu carro;
    4. Gasto médio de combustível do carro por KM;
    5. Distância em KM da viagem;

    Imprima no console o valor que será gasto para realizar esta viagem.
*/

const pEtanol = 4.3;
const pGasolina = 5.4;
const tCombust = 'gasolina';
const gMedio = 10;
const distKm = 100;

if (tCombust === 'gasolina'){
    console.log(pGasolina * (distKm / gMedio).toFixed(2));
} else if (tCombust === 'etanol') {
    console.log(pEtanol * (distKm / gMedio).toFixed(2));
} else {
    console.log('Tipo de combustível inválido!');
}