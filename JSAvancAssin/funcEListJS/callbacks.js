function add(x, y) {
    return x + y
}

function sub(x, y) {
    return x - y
}

function calculadora(x, opr, y) {
    console.log(opr(x, y))
}

calculadora(10, add, 20)
calculadora(20, sub, 10)