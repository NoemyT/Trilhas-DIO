// Classes

class Aluno {
    nome;
    idade;
    matricula;

    constructor(nome, idade, matricula){
        this.nome = nome;
        this.idade = idade;
        this.matricula = matricula;
    }

    descrever(){
        console.log(`Nome: ${this.nome}, Idade: ${this.idade}, Número de Matrícula: ${this.matricula}`);
    }
}

const noemy = new Aluno('Noemy Torres', 21, 22112110);

noemy.descrever();