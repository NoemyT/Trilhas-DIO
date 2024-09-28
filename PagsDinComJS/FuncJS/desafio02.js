function verifyAge(age) {
    if (age >= 18) {
        return 'Adult';
    } else {
        return 'Minor'
    }
}

function main() {
    a1 = 15;
    console.log(verifyAge(a1));
}

main();