// 2. Escrever um algoritmo que leia dois valores inteiros e informe qual deles é o maior.

function Verifica(numero1, numero2) {
  return numero1 > numero2
    ? `${numero1} maior que ${numero2}`
    : `${numero1} menor que ${numero2}`;
}

console.log(Verifica(20, 10));
