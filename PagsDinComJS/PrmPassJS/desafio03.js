/* 1) Faça um algoritimo que dado as três notas tiradas por um aluno em um semestre da faculdade
      calcule e imprima a média e a sua classificação conforme a tabela abaixo.

      Média = (nota 1 + nota 2 + nota 3) / 3;

      Classificação:
      1. Média > 7, aprovado;
      2. Média >= 5 e <=7, recuperação;
      3. Media < 5, reprovado;

*/

const nota1 = 5;
const nota2 = 6.5;
const nota3 = 10;
const media = (nota1 + nota2 + nota3) / 3;

if (media > 7){
    console.log('Média: ' + media.toFixed(1) + ', classificação: Aprovado');
} else if (media <= 7 && media >= 5){
    console.log('Média: ' + media.toFixed(1) + ', classificação: Recuperação');
} else {
    console.log('Média: ' + media.toFixed(1) + ', classificação: Reprovado');
}