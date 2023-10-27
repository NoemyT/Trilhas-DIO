function imcCalc(peso, altura) {
    return (peso / (altura**2)).toFixed(2);
}

function classif(imc) {
    if (imc < 18.5) {
        return 'IMC: ' + imc + ', Condição: abaixo do peso';
    } else if (imc >= 18.5 && imc < 25) {
        return 'IMC: ' + imc + ', Condição: peso normal';
    } else if (imc >= 25 && imc < 30) {
        return 'IMC: ' + imc + ', Condição: acima do peso';
    } else if (imc >= 30 && imc <= 40) {
        return 'IMC: ' + imc + ', Condição: obeso';
    } else {
        return 'IMC: ' + imc + ', Condição: obesidade grave';
    }
}

function main() {
    const peso = 65;
    const altura = 1.5;
    const imc = imcCalc(peso, altura);
    console.log(classif(imc));
}

main();