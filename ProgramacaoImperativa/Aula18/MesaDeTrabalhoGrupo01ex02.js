let idade = [16, 21, 19, 28, 30, 46, 40, 60, 44, 55, 43, 19, 22, 40, 33]
let opniao = [1, 1, 1, 2, 3, 3, 2, 2, 3, 3, 3, 3, 2, 3, 3]

let otimaOpniao = [];
let soma = 0;
let media = 0;
for (let index = 0; index < opniao.length; index++) {
    if (opniao[index] === 3) {
        for (let index2 = 0; index2 < opniao.length; index2++) {
            otimaOpniao.push(idade[index])
            break;
        }
    }
}
 for (let index = 0; index < otimaOpniao.length; index++) {
     soma += parseInt(otimaOpniao[index])

}
media = soma / otimaOpniao.length;

let regularOpniao = [];
for (let index = 0; index < opniao.length; index++) {
    if (opniao[index] === 1) {
        for (let index2 = 0; index2 < opniao.length; index2++) {
            regularOpniao.push(idade[index])
            break;
        }
    }
}

let bomOpniao = [];
let porcentagem = 0;
for (let index = 0; index < opniao.length; index++) {
    if (opniao[index] === 2) {
        for (let index2 = 0; index2 < opniao.length; index2++) {
            bomOpniao.push(idade[index])
            break;
        }
    }
}
porcentagem = bomOpniao.length * (100 / opniao.length)

console.log('A média de pessoas que responderam ótimo é de ' + media.toFixed(0));
console.log('A numero total de pessoas que responderam regular é de ' + regularOpniao.length);
console.log('A porcentagem de pessoas que responderam bom é de ' + porcentagem.toFixed(2));

