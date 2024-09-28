/* Faça um programa para calcular o valor de uma viagem.
    
    Você terá 3 variáveis, sendo elas:

    1. Preço do combustível;
    2. Gasto médio de combustível por KM;
    3. Distância em KM da viagem;

    Imprima no console o valor que será gasto para realizar a viagem. 
*/

const pcomb = 5.4;
const gasto = 12;
let dist = 100;

console.log((pcomb * (dist / gasto)).toFixed(2));