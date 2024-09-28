// Tipos de Dados

/* Number

    +Infinity -Infinity e NaN
    Double Precision 64-bit binary format IEEE 754

*/

console.log(typeof(10));
console.log(typeof(5.2));
console.log(typeof(NaN));
console.log(typeof(+Infinity));
console.log(typeof(-Infinity));

/* String

    Textos, 3 formas de representar -> '', "", ``
    dependendo do contexto a representação necessária deve ser utilizada

*/

const x = "Noemy";
const y = 'Torres';

console.log(`${x} ${y}`);

/* Symbol

    Símbolos imutáveis e únnicos
    utilizado na identificação de objetos

*/

const a = Symbol('10');
const b = Symbol('10');

console.log(a === b);