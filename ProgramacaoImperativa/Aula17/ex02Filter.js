// Aula 17  - 20/09/2021
// Métodos Avançados
// Filter() é um método que retorna um novo array,
// com os elementos que atendem uma condição

let idades = [22, 8, 17, 14, 30];
console.log(idades);
let maiores = idades.filter(
  function (idade)  {
      return idade > 18;
  }
);
console.log(maiores);
