/* 2. Crie uma classe para representar pessoas.
    Para cada pessoa teremos os atributos nome, peso e altura.
    As pessoas devem ter a capacidade de dizer o valor do seu IMC;
    Instancie uma pessoa chamada José, que tenha 70kg e 1.75 de altura;
    Faça então, com que José diga seu IMC.
*/

class Pessoa{
    nome;
    peso;
    altura;

    constructor (nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcIMC () {
        const imc = this.peso / (this.altura**2);
        console.log(`${this.nome}: Meu IMC é ` + imc.toFixed(2));
    }

    classImc (imc) {
        if (imc < 18.5) {
            console.log('Classificação: abaixo do peso');
        } else if (imc >= 18.5 && imc < 25) {
            console.log('Classificação: peso normal');
        } else if (imc >= 25 && imc < 30) {
            console.log('Classificação: acima do peso');
        } else if (imc >= 30 && imc <= 40) {
            console.log('Classificação: obeso');
        } else {
            console.log('Classificação: obesidade grave');
        }
    }
}

p1 = new Pessoa('José', 70, 1.75);
p1.calcIMC();
p1.classImc();