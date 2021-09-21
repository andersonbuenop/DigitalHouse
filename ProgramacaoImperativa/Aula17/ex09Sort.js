// Aula 17  - 20/09/2021
// Métodos Avançados
// Sort = ordenar
// sort() é um método que ordena os elementos de um array.

let numeros = [50, 100, 2, 5, 25, 10];

// ordem crescente
console.log(numeros.sort(
    function(a,b) {
        return a-b;
    }
));
//50-100


// ordem decrescente
console.log(numeros.sort(
    function(a,b) {
        return b-a;
    }
));
