// Aula 17  - 20/09/2021
// Métodos Avançados
// forEach() é um método que chama uma função para elemento.

let amigos = ['Daniel', 'Guilherme', 'Vanessa', 'Isnard' ]
let pizza = ['fatia1','fatia2','fatia3','fatia4'];

amigos.forEach(
    function (prato) {
        console.log(prato);
    }
);
pizza.forEach(
    function(fatia) {
        console.log(fatia);
    }
);
