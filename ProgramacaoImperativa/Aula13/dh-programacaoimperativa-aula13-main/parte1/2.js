// 2. Em uma festa, homens pagam 20 reais de entrada e as mulheres pagam 17. Crie um programa que pergunta quantos homens e quantas mulheres participaram da festa e calcula o valor total arrecadado com as entradas.

function Total(homens, mulheres) {
  const total = homens * 20 + mulheres * 17;
  return total;
}

console.log(Total(2, 1));
