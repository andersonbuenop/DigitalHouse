// aula 18 - 21/09/2021
let notas = [7.5, 8.1, 9.3, 9.7];
let soma = 0;
let media = 0;

for(let i = 0; i < notas.length; i++) {
    soma += notas[i];
}

media = soma / notas.length;
console.log(soma.toFixed(2));
console.log(media.toFixed(2));
