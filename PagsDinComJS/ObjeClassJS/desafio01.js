/* 1. crie uma classe para representar carros.
    Os carros possuem uma marca, uma cor e um gasto médio de combustível por KM rodado.
    Crie um método que dado a quantidade de KMs e o preço do combustível nos devolva o valor
    gasto em reais para realizar o percurso.
*/

class Carro{
    marca;
    cor;
    gastoMedio;

    constructor (marca, cor, gastoMedio) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedio = gastoMedio;
    }

    valorPercurso (dist, preco) {
        const valGasto = (dist / this.gastoMedio) * preco;
        console.log(`Para o ${this.marca}: O valor gasto será R$ ` + valGasto.toFixed(2));
    }
}

c1 = new Carro('Uno', 'Azul', 12);
c1.valorPercurso(50, 5.7);
c2 = new Carro('Fox', 'Vermelho', 8);
c2.valorPercurso(50, 5.7);