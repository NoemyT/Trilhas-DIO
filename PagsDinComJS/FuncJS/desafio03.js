function namePrinter(name) {
    return 'My name is ' + name;
}

function verifyAge(age) {
    if (age >= 18) {
        return namePrinter(n1) + ', a grownup';
    } else {
        return namePrinter(n1) + ', a minor';
    }
}

function main() {
    n1 = 'Aster';
    a1 = 21;
    console.log(verifyAge(a1));
}

main();