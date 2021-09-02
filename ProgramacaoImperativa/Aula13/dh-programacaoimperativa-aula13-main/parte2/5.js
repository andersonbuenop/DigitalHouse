// 5.  Crie  um  programa  que  receba  um  número  inteiro  e  informa  se  este  número  é múltiplo de 10

function Multiplo10(numero) {
  return numero % 10 === 0 ? "É multiplo de 10 :)" : "Não é multiplo de 10 :(";
}

console.log(Multiplo10(50));
