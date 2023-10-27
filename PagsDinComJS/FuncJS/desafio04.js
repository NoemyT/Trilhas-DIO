function calcularDesconto(preco, tipoPagamento) {
    if (tipoPagamento === 1){
        return 'R$ ' + (preco - (0.1 * preco)).toFixed(2);
    } else if (tipoPagamento === 2){
        return 'R$ ' + (preco - (0.15 * preco)).toFixed(2);
    } else if (tipoPagamento === 3) {
        return 'R$ ' + preco;
    } else {
        return 'R$ ' + (preco + (0.1 * preco)).toFixed(2);
    }
}

function main() {
    const etiqueta = 75.2;
    const opcPagar = 3;
    console.log(calcularDesconto(etiqueta, opcPagar));
}

main();