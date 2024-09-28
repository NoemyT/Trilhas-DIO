// Hoisting
// Traz declarações para o início do código, no caso de variáveis
// não traz a atribuíção o que ocasiona errors.

var test1;

function teste2() {
    console.log('teste2');
}

teste2();
teste1();

teste1 = function() {
    console.log('teste1');
}