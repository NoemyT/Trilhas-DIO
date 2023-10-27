function nameCall(name) {
    console.log('Your name is: ' + name);
}

nameCall('Aster');

function expoTwo(number) {
    return number**2;
}

console.log(expoTwo(5));

function increment(price, percentual) {
    const fees = (percentual / 100) * price;
    return price + fees;
}

console.log(increment(50, 5));