// Solicita ao usuário que insira o nome do personagem:
const nomePersonagem = 'Aster';

// Solicita ao usuário que escolha entre "Atacar" ou "Fugir":
const acaoEscolhida = 'Atacar';

// TODO: Implemente uma solução utilizando lógica de programação;
//TODO: Verifique a ação escolhida e exibir a mensagem correspondente:

if (acaoEscolhida === 'Fugir') {
  console.log(nomePersonagem + ' escolheu Fugir!');
} else if (acaoEscolhida === 'Atacar') {
  console.log(nomePersonagem + ' escolheu Atacar!');
} else {
  console.log('Tente novamente');
}