// Escreva um programa que solicita o nome de 3 alimentos e então exibe o nome dos 3 separados por virgulas. Ex: maçã, pera, banana.
const alimentos = ["uva", "pessego", "banana"];
function Separa(alimentos) {
  const alimentosSeparados = alimentos.join(", ");
  return alimentosSeparados;
}

console.log(Separa(alimentos));
