// Objetos

const aluno = {
    nome: 'Noemy',
    matricula: 22112110,
    descrever: function () {
        console.log(`Nome: ${this.nome}, matricula: ${this.matricula}`);
    }
};

//aluno.periodo = 4;
//delete aluno.periodo;

//console.log(aluno.nome);
//console.log(aluno.matricula);
//console.log(aluno);

aluno.descrever();