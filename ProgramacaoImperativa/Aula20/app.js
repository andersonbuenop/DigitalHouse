// 28/09/2021 - Revisão
// O que é callback?
// É um tipo de função que só é executada após o 
// o processamento de outra função.

let salarioBruto = 5000;
let salarioLiquido;

function getSalario(salarioBruto, callback) {
    let liquido = 0
    const inss = salarioBruto * 0.11;
    const vr = salarioBruto * 0.05;
    const vt = salarioBruto * 0.06;
    const descontos = inss + vr + vt;
    liquido = salarioBruto - descontos;

    return callback(liquido);
}


getSalario(salarioBruto, (resultado) => { 
    salarioLiquido = resultado;
    console.log(`O salário líquido é ${salarioLiquido}`);
});
