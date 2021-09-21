let altura = [120, 150, 160, 165, 168, 169, 175, 159, 166, 177, 180, 188, 190, 176, 182]
let sexo = ['M', 'F', 'F', 'M', 'F', 'F', 'M', 'F', 'F', 'M', 'F', 'F', 'M', 'F', 'F']

Array.min = function (array) {
    return Math.min.apply(Math, array);
}

Array.max = function (array) {
    return Math.max.apply(Math, array);
}

let masculino = []
for (let index = 0; index < sexo.length; index++) {
    if (sexo[index] === 'M') {
        masculino.push(sexo[index]);
    }
}

let mulher = [];
let soma = 0;
let media = 0;
for (let index = 0; index < sexo.length; index++) {
    if (sexo[index] === 'F') {
        for (let index2 = 0; index2 < altura.length; index2++) {
            mulher.push(altura[index])
            break;
        }
    }
}
for (let index = 0; index < mulher.length; index++) {
    soma += parseInt(mulher[index])
    
}
media = soma / mulher.length;

console.log('A maior altura é ' + Array.min(altura) + 'cm e a menor altura é ' + Array.max(altura)+'cm!');
console.log('A média de altura das mulheres é ' + media.toFixed(0)+'cm!');
console.log('A quantidade total de homens é  ' + masculino.length+'!');
