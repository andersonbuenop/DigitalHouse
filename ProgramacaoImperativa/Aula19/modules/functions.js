

// a maior e a menor altura do grupo;
// Função que retorna a maior Idade da lista
function maiorAltura(array){
    let alturaMaior = array[0].altura;
    for(let i = 0; i < array.length; i++){
        if(alturaMaior < array[i].altura){
            alturaMaior = array[i].altura;
        }
    }
    return alturaMaior;
}

// Função que retorna a menor Idade da lista
function menorAltura(array){
    let alturaMenor = array[0].altura;
    for(let i = 0; i < array.length; i++){
        if(alturaMenor > array[i].altura){
            alturaMenor = array[i].altura;
        }
    }
    return alturaMenor;
}

// a média de altura das mulheres;
function mediaMulheres(array){
    let somaAltura = 0;
    let qtdMulheres = 0;
    for(let i = 0; i < array.length; i++){
        if(array[i].sexo === 'F'){
            somaAltura += array[i].altura;
            qtdMulheres++;
        }
    }
    return (somaAltura/qtdMulheres);
}

// o número de homens.
function qtdHomens(array){
    let qtdHomens = 0;
    for(let i = 0; i < array.length; i++){
        if(array[i].sexo === 'M'){
            qtdHomens++;
        }
    }
    return qtdHomens;
}

module.exports = {maiorAltura, menorAltura, mediaMulheres, qtdHomens};