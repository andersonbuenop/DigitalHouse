// aula 18 - 21/09/2021
// Concatenar arrays

let pizza = ['fatia1','fatia2','fatia3','fatia4'];
let amigo = ['Vanessa','Roberta','Ana','Pam'];
let pratos = [];

amigo.forEach(
    function (amigo, i) {
        pratos = amigo.concat(" ", pizza[i]);
        console.log(pratos);
    }
);
