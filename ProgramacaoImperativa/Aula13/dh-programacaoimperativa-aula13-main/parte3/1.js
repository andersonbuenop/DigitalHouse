// 1 -Escreva um programa que solicita um número inteiro. Exiba uma mensagem de erro se o número informado estiver entre 15 e 25 ou entre 45 e 50.

function Verifica(numero) {
  const erro = (numero >= 15 && numero <= 25) || (numero >= 45 && numero <= 50);

  return erro ? "Erro 😿" : "Tudo tranquilo 👍";
}

console.log(Verifica(51));
