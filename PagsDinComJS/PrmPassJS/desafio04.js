/* 2) O IMC é um critério da OMS para dar uma indicação sobre a condição
      de peso de uma pessoa adulta.

      Formúla IMC:
      IMC = peso / (altura * altura)

      Elabore um algoritimo que dado o peso e a altura de um adulto, mostre sua
      condição de acordo com a tabela abaixo:

      1. IMC < 18.5, abaixo do peso;
      2. IMC >= 18.5 e <= 25, peso normal;
      3. IMC > 25 e <=30, acima do peso;
      4. IMC > 30 e <= 40, obeso;
      5. IMC > 40, obesidade grave;

*/

const peso = 60;
const altura = 1.6;
const imc = (peso / (altura**2)).toFixed(2);

if (imc < 18.5) {
    console.log('IMC: ' + imc + ', Condição: abaixo do peso');
} else if (imc >= 18.5 && imc < 25) {
    console.log('IMC: ' + imc + ', Condição: peso normal');
} else if (imc >= 25 && imc < 30) {
    console.log('IMC: ' + imc + ', Condição: acima do peso');
} else if (imc >= 30 && imc <= 40) {
    console.log('IMC: ' + imc + ', Condição: obeso');
} else {
    console.log('IMC: ' + imc + ', Condição: obesidade grave');
}