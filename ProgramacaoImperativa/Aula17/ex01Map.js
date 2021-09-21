// Aula 17  - 20/09/2021
// Métodos Avançados
// O map() é um método que cria uma nova matriz com os resultados
// da chamada de uma função para cada elemento da matriz.

let letrasMinusculas = ['a', 'b', 'c', 'd'];
console.log(letrasMinusculas);
// função clássica
/* let letrasMaiusculas = letrasMinusculas.map(
    function maiuscula(letra) {
        return letra.toUpperCase();
    }
); */

// funcção com arrow function
let letrasMaiusculas = letrasMinusculas.map(
    maiuscula = elemento => elemento.toUpperCase()
);
console.log(letrasMaiusculas);
