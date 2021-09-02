// Faça  um  algoritmo  que  receba  um  número  e  mostre  uma  mensagem  caso  este número seja maior que 80, menor que 25 ou igual a 40.

function Verifica(numero) {
  const erro = numero > 80 || numero < 25 || numero === 40;

  return erro ? "Erro 😿" : "Tudo tranquilo 👍";
}

console.log(Verifica(40));
