// 3 -Escrever um algoritmo que leia três valores inteiros e verifique se eles podem ser as medidas dos lados de um triângulo.

// Exemplo:
// let ladoA = 10
// let ladoB = 10
// let ladoC = 10
// MENSAGEM:
// "Os números digitados formam um TRIÂNGULO! (TRUE)"
// "Os númerosdigitados NÃO FORMAM um triângulo! (FALSE)

// Só irá existir um triângulo se, somente se, os seus lados obedeceram à seguinte regra: um de seus lados deve ser maior que o valor absoluto (módulo) da diferença dos outros dois lados e menor que a soma dos outros dois lados. Veja o resumo da regra abaixo:
// | b - c | < a < b + c
// | a - c | < b < a + c
// | a - b | < c < a + b

function Triangulo(a, b, c) {
  const ladoA = b - c < a && a < b + c;
  const ladoB = a - c < b && b < a + c;
  const ladoC = a - b < c && c < a + b;
  const triangulo = ladoA && ladoB && ladoC;

  return triangulo
    ? `Os números digitados formam um TRIÂNGULO! (${triangulo})`
    : `Os números digitados NÃO FORMAM um triângulo! (${triangulo})`;
}

console.log(Triangulo(4, 4, 4));
