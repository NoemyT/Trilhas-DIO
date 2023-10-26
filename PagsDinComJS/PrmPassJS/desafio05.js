/* 3) Elabore um algoritimo que calcule o que deve ser pago por um produto,
      considerando o preço normal de etiqueta e a escolha da condição de pagamento.
      Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e
      efetuar o cálculo adequado.

      Condições de pagamento:
      1. à vista débito, recebe 10% de desconto;
      2. à vista no dinheiro ou pix, recebe 15% de desconto;
      3. em duas vezes, preço normal de etiqueta sem juros;
      4. acima de duas vezes, preço normal de etiqueta mais juros de 10%; 
       
*/

const preco = 50;
const tipoPagamento = 'débito';
const vezes = 1;

if (tipoPagamento === 'débito' && vezes === 1){
    console.log(preco - (0.1 * preco));
} else if ((tipoPagamento === 'dinheiro' || tipoPagamento === 'pix') && vezes === 1){
    console.log(preco - (0.15 * preco));
} else if (vezes === 2) {
    console.log(preco);
} else {
    console.log(preco + (0.1 * preco));
}

// Dá pra abstrar mais, mas para conpreensão deixarei assim