function soma(x){
    return function(y) {
        return x + y;
    }
}

const somaParcial = soma(10)

console.log(somaParcial(10))