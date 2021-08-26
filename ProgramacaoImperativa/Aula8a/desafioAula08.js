/* 
    1) Crie uma função podeSubir() que receba dois parâmetros: 
    • altura da pessoa;
    • se está acompanhada.

Deve retornar um valor booleano (TRUE, FALSE) que indique se a pessoa pode subir ou não, baseado nas seguintes condições:
        a) A pessoa deve medir mais de 1.40m e menos de 2 metros.
        b) Se a pessoa medir menos de 1.40m, deverá ir acompanhada.
        c) Se a pessoa medir menos de 1.20m, não poderá subir, nem acompanhada. */
        
function podesubir(altura, situacao) {
    if (altura > 1.4 && altura < 2.0) {
        console.log(`A pessoa pode subir`)
    } else if ((altura > 1.2 && altura < 1.4) && (situacao == true)) {
        console.log(`a pessoa deve ir acompanhada`)
    } else {
        console.log(`Nao pode subir`)
    }
}
podesubir(1.5, true)


function podesubir1(altura, situacao) {
    switch (altura, situacao) {
        case (altura > 1.4 && altura < 2.0):
            console.log(`A pessoa pode subir`)
            break;
        case ((altura > 1.2 && altura < 1.4) && (situacao == true)):
            console.log(`a pessoa deve ir acompanhada`)
            break;
        case (altura < 1.2):
            console.log(`Nao pode subir`)
            break;

    }
}
podesubir1(1.5, true)