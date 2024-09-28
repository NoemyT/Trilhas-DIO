// Estruturas de repetição

const notas = [8, 7, 6, 7];
let soma = 0;

for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    soma = soma + nota;
}

console.log(soma);

const media = soma / notas.length;

console.log(media);