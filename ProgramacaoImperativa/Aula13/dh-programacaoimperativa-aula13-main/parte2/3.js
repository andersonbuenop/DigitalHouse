// 3.  Escrever  um  algoritmo  que  leia  dois  valores  inteiros  e  informe  se  os  números  são iguais.

function Verifica(numero1, numero2) {
  return numero1 === numero2
    ? `${numero1} igual à ${numero2}`
    : `${numero1} diferente de ${numero2}`;
}

console.log(Verifica(10, 10));
