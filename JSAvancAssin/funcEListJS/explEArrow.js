// Declaração Explícita
// Arrow Function

function funcao1() {
    console.log(this)
}

const funcao2 = () => {
    console.log(this)
}

const noemy = {
    nome: 'noemy',
    funcao1,
    funcao2
}

noemy.funcao1()
noemy.funcao2()