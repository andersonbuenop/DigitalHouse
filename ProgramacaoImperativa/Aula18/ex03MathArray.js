// aula 18 - 21/09/2021
// Função para retornar o menor valor de um array
Array.min = function(array) {
    return Math.min.apply(Math, array);
}

Array.max = function(array) {
    return Math.max.apply(Math, array);
}

// Agora é só pegar os resultados
let numeros = [112, 32, 10, 41, 67, 5];
console.log(Array.min(numeros));
console.log(Array.max(numeros));
