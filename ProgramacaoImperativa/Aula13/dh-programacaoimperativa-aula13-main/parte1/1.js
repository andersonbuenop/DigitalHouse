// 1.  Escreva um algoritmo para calcular o consumo médio de um automóvel (medido em  km/l),  dado  que  são  conhecidos  a  distância  total  percorrida  e  o  volume  de combustível consumido para percorrê-la (medido em litros).

function Consumo(km, litros) {
  const total = km / litros;
  return `${total} km/l`;
}

console.log(Consumo(816, 60));
